import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import standardModules from './standard'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
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
      axios.get('http://192.168.20.133:8001/api/v1/product').then((response) => {
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
    standardModules
  }
})
