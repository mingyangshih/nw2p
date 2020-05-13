import Vue from 'vue'
import Vuex from 'vuex'
// import { getField, updateField } from 'vuex-map-fields'
import standardModules from './modules/standard'
import loginModules from './modules/login'
import enrollModules from './modules/enroll'
import homeModules from './modules/home'
import navbarModules from './modules/navbar'
import modifyEnrollModules from './modules/modifyEnroll'
import logOutModules from './modules/logout'
import alertModules from './modules/alert'
import productDetailModules from './modules/productDetail'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: null,
    sideBarShow: null
  },
  actions: {
    loadingStatus (context, status) {
      context.commit('LOADING', status)
    }
  },
  mutations: {
    LOADING (context, status) {
      const vm = this
      vm.state.isLoading = status
    },
    sideBarShowEvent (state, status) {
      state.sideBarShow = status
      // state.sideBarShow = !state.sideBarShow
    }
  },
  getters: {
  },
  modules: {
    standardModules,
    loginModules,
    enrollModules,
    homeModules,
    productDetailModules,
    navbarModules,
    modifyEnrollModules,
    logOutModules,
    alertModules
  }
})
