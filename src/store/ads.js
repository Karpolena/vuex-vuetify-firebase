
import  firebase from 'firebase/app';
import 'firebase/database';
class Ad {
    constructor (title, description,  promo=false, imageSrc, id=null) {
        this.title = title
        this.description = description
        this.promo = promo
        this.imageSrc = imageSrc        
        this.id = id

    }
}
export default {
    state: {
        ads: [
            // {
            //     title: "image",
            //     description: "it is title",  
            //     promo: false,
            //     imageSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
            //     id: "123"
            // },
            // {
            //     title: "second image",
            //     description: "it is title",
            //     promo: true,
            //     imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
            //     id: "1234"
            // },
            // {
            //     title: "third image",
            //     description: "it is title",
            //     promo: true,
            //     imageSrc: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
            //     id: "12345"
            // }
        ]
    },
    mutations: {
        createAd (state, payload) {
            state.ads.push(payload)
        },
        loadAds (state, payload) {
            state.ads = payload
        }
    },
    actions: {
            async createAd({commit, getters}, payload) {
                commit("clearError")
                commit("setLoading", true)
                const image = payload.image
                try {
                    const newAd = new Ad (
                        payload.title,
                        payload.description,
                        payload.promo,
                        "",
                        getters.user.id                        
                    )
                    const ad = await firebase.database().ref("ads").push(newAd)
                    const imageExt = image.name.slice(image.name.lastIndexOf("."))

                    const fileData = await firebase.storage().ref(`ads/${ad.key}.${imageExt}`).put(image)
                    // const imageSrc = fileData.metadata.downloadURLs[0] 
                    const imageSrc = await fileData.ref.getDownloadURL() 

                    await firebase.database().ref('ads').child(ad.key).update({imageSrc})
                    commit("setLoading", false)
                    commit("createAd", {
                        ...newAd,
                        id: ad.key,
                        imageSrc
                    })
                } catch (error) {
                    commit("setError", error.message)
                    commit("setLoading", false)
                    throw error
                }
            },
            async fetchAds ({commit}) {
                commit ("clearError")
                commit ("setLoading", true)
                const resultAds = []
                try {
                    const fbVal = await firebase.database().ref("ads").once("value")
                    const ads = fbVal.val()
                    Object.keys(ads).forEach(key => {
                        const ad = ads[key]
                        resultAds.push(new Ad (ad.title, ad.description, ad.promo, ad.imageSrc, key))
                    })
                    commit ("loadAds", resultAds)
                    commit ("setLoading", false)
                } catch (error) {
                    commit ("setError", error.message)
                    commit ("setLoading", false)
                    throw error
                }
            }            
        },
    getters: {
        ads (state) {
            return state.ads
        },
        promoAds (state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds (state) {
            return state.ads
        },
        adById(state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }
    }
}