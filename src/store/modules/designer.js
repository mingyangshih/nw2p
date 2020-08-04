import axios from 'axios'
export default {
  state: {
    designerMaster: [],
    designerProductItem: [],
    designerProducts: []
  },
  actions: {
    getDesignerDetail ({commit}, {licensorId, designerId}) {
      commit('LOADING', true, {root: true})
      let API_PATH = process.env.API
      return axios.get(`${API_PATH}design/getdesigner/${licensorId}/${designerId}`).then(response => {
        let {designerMaster, productItem: designerProductItem, products: designerProducts} = response.data.data
        commit('setDesignerData', {designerMaster, designerProductItem, designerProducts})
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        commit('LOADING', false, {root: true})
      })
    }
  },
  mutations: {
    setDesignerData (state, {designerMaster, designerProductItem, designerProducts}) {
      state.designerMaster = designerMaster
      state.designerProductItem = designerProductItem
      state.designerProducts = designerProducts
    }
  }
}
