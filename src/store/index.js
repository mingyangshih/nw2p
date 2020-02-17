import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: null

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
  }
})
