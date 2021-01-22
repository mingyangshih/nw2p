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
import contactusModules from './modules/contactus'
import styleModules from './modules/style'
import bulletinModules from './modules/bulletin'
import designerModules from './modules/designer'
import designerItemModules from './modules/designerItem'
import homeSwiperModules from './modules/homeswiper'
import invoiceSearchModules from './modules/invoiceSearch'
import exchangeModules from './modules/exchange'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: null,
    sideBarShow: null,
    openStyleModal: null,
    imgPath: window.imgPath,
    serviceContentDrop: '#/serviceContent'
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
    alertModules,
    contactusModules,
    styleModules,
    bulletinModules,
    designerModules,
    designerItemModules,
    homeSwiperModules,
    invoiceSearchModules,
    exchangeModules
  }
})
