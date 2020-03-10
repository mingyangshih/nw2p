import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import standardModules from './modules/standard'
import loginModules from './modules/login'
import enrollModules from './modules/enroll'
import homeModules from './modules/home'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: null,
    totalCategory: [],
    totalProduct: []
  },
  actions: {
    loadingStatus (context, status) {
      context.commit('LOADING', status)
    },
    getNavBarList (context, status) {
      // const vm = this
      let totalCategory = []
      axios.get(`${process.env.API}product/getmenu`).then((response) => {
        // console.log(response.data.data)
        // 篩出有幾種分類
        response.data.data.forEach((item) => {
          if (totalCategory.indexOf(item.productCategory) < 0) {
            totalCategory.push(item.productCategory)
          }
        })
        let totalProduct = response.data.data
        context.commit('listDetail', {totalCategory, totalProduct})
      })
    }
  },
  mutations: {
    LOADING (context, status) {
      const vm = this
      vm.state.isLoading = status
    },
    listDetail (context, {totalCategory, totalProduct}) {
      const vm = this
      vm.state.totalCategory = totalCategory
      vm.state.totalProduct = totalProduct
    }
  },
  getters: {
    totalProduct: state => state.totalProduct,
    totalCategory: state => state.total.totalCategory
  },
  modules: {
    standardModules,
    loginModules,
    enrollModules,
    homeModules
  }
})
