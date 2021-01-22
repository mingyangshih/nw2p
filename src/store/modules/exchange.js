import axios from 'axios'

export default{
  namespaced: true,
  state: {
    coupons: []
  },
  actions: {
    getGroupCoupon ({commit}) {
      let API_PATH = process.env.API
      commit('LOADING', true, {root: true})
      axios.get(`${API_PATH}groupcoupon/getdetail`).then(rep => {
        let coupons = rep.data.data.productItem
        commit('getGroupCoupon', {coupons})
      }).finally(() => {
        commit('LOADING', false, {root: true})
      })
    }
  },
  mutations: {
    getGroupCoupon (state, {coupons}) {
      state.coupons = coupons
    }

  }
}
