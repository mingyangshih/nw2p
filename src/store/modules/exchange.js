import axios from 'axios'

export default{
  namespaced: true,
  state: {
    coupons: [],
    kind: []
  },
  actions: {
    getGroupCoupon ({commit}) {
      let API_PATH = process.env.API
      commit('LOADING', true, {root: true})
      axios.get(`${API_PATH}groupcoupon/getdetail`).then(rep => {
        let coupons = rep.data.data.productItem
        let kind = []
        coupons.forEach(item => {
          // productName
          if (kind.indexOf(item.productName) < 0) {
            kind.push(item.productName)
          }
        })
        console.log(kind)
        console.log(coupons)
        commit('getGroupCoupon', {coupons, kind})
      }).finally(() => {
        commit('LOADING', false, {root: true})
      })
    }
  },
  mutations: {
    getGroupCoupon (state, {coupons, kind}) {
      state.coupons = coupons
      state.kind = kind
    }

  }
}
