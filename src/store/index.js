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
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: null
    // totalCategory: [],
    // totalProduct: []
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
    }
    // updateField
  },
  getters: {
    // getField
    // totalProduct: state => state.totalProduct,
    // totalCategory: state => state.totalCategory
  },
  modules: {
    standardModules,
    loginModules,
    enrollModules,
    homeModules,
    navbarModules,
    modifyEnrollModules,
    logOutModules,
    alertModules
  }
})
