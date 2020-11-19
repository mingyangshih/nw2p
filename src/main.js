// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store'
import loading from 'vue-loading-overlay'
import { ValidationProvider, extend } from 'vee-validate'
import { required, email, digits } from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/zh_TW.json'
// GTM
import VueGtm from 'vue-gtm'
import {pageUserTrack} from './assets/trackService'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'
import filter from './assets/filters/currency'
Vue.filter('currency', filter)
window.$ = $ // 將原本的$變成jquery
Vue.use(VueAxios, axios)
// 使用Vuex
Vue.use(Vuex)
// use router
Vue.use(router)
// vue-loading-overlay
Vue.component('loading', loading)
// GTM
let gtm = window.gtm
Vue.use(VueGtm, {
  // container id
  id: gtm,
  // display console logs debugs or not (optional)
  // debug: true,
  enabled: true
  // vueRouter: router,
  // loadScript: true
})

// vee validate
Vue.component('ValidationProvider', ValidationProvider)
extend('email', {
  ...email,
  message: messages.email
})
// Override the default message.
extend('required', {
  ...required,
  message: messages.required
})
extend('digits', {
  ...digits,
  message: messages.digits
})

// event bus
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// gtm
router.afterEach((to, from) => {
  // const { meta } = router.currentRoute
  // 時間稍微延遲以避免抓取到前個 window.location.href 位置
  setTimeout(() => {
    pageUserTrack()
  }, 500)
})

// router.beforeEach((to, from, next) => {
//   let nw2pData = JSON.parse(localStorage.getItem('nw2pData'))
//   if (to.meta.requiresAuth === true) {
//     const API = `${process.env.API}user/getdetail/${nw2pData.UID}`
//     axios.get(API, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${nw2pData.token}`
//       }
//     }).then(response => {
//       if (response.data.error_code === 0 || 401) {
//         next()
//       } else {
//         store.dispatch('logOut')
//       }
//     })
//   } else {
//     next()
//   }
// })
