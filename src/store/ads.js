export default {
    state: {
        ads: [
            {
                title: "image",
                description: "it is title",
                promo: false,
                imageSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
                id: "123"
            },
            {
                title: "second image",
                description: "it is title",
                promo: true,
                imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
                id: "1234"
            },
            {
                title: "third image",
                description: "it is title",
                promo: true,
                imageSrc: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
                id: "12345"
            }
        ]
    },
    mutations: {
        createAd (state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
        createAd ({commit}, payload) {
            payload.id = "gfhshs"
            commit("createAd", payload)
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