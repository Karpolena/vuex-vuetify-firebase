import Vue from "vue"
import  Vuex from "vuex"
import ads from "@/store/ads.js"
import user from "@/store/user.js"
import shared from "@/store/shared.js"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ads, user, shared
    }
})