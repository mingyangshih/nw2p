import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import standardModules from './standard'
import loginModules from './login'
import enrollModules from './enroll'
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
      axios.get(`${process.env.API}/product`).then((response) => {
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
    enrollModules
  }
})
