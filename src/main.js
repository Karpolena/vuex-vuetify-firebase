import Vue from "vue"
import App from "@/App"
import router from "@/router"
import store from "@/store"
import Vuetify from "vuetify"
import * as firebase from 'firebase/app'
import 'firebase/auth'
import "vuetify/dist/vuetify.min.css"

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyCRlWyQoc4OTMeuuxU0gTTZLClUjOi6-Z0",
      authDomain: "itc-ads-e509f.firebaseapp.com",
      databaseURL: "https://itc-ads-e509f.firebaseio.com",
      projectId: "itc-ads-e509f",
      storageBucket: "itc-ads-e509f.appspot.com",
      messagingSenderId: "478746383652"
    }),
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoLoginUser", user)
      }
    })
  },
 render: h => h(App)
})
