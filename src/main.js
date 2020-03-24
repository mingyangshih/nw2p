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
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

window.$ = $ // 將原本的$變成jquery
Vue.use(VueAxios, axios)
// 使用Vuex
Vue.use(Vuex)
// vue-loading-overlay
Vue.component('loading', loading)
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
console.log(Vue.prototype)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  let nw2pData = JSON.parse(localStorage.getItem('nw2pData'))
  if (to.meta.requiresAuth === true) {
    const API = `${process.env.API}user/getdetail/${nw2pData.UID}`
    axios.get(API, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${nw2pData.token}`
      }
    }).then(response => {
      if (response.data.error_code === '0' || '401') {
        next()
      } else {
        store.dispatch('logOut')
      }
    })
  } else {
    next()
  }
})
