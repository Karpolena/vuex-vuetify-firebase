import Vue from "vue"
import App from "@/App"
import router from "@/router"
import store from "@/store"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
import firebaseConfig from '@/config/firebase'
import * as firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(Vuetify)

Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  store,
  created () {
    firebase.initializeApp(firebaseConfig)
    this.$store.dispatch('fetchAds')
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoLoginUser", user)
      }
    })
  },
 render: h => h(App)
})
