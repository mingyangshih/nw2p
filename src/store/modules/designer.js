import axios from 'axios'
export default {
  state: {
    designerMaster: [],
    designerProductItem: [],
    designerProducts: [],
    designerProductCategory: []
  },
  actions: {
    // 取得designer的資料
    getDesignerDetail ({commit}, {id, designerId}) {
      commit('LOADING', true, {root: true})
      let API_PATH = process.env.API
      return axios.get(`${API_PATH}design/getdesigner/${id}/${designerId}`).then(response => {
        let {designerMaster, productItem: designerProductItem, products: designerProducts, productCategory: designerProductCategory} = response.data.data
        commit('setDesignerData', {designerMaster, designerProductItem, designerProducts, designerProductCategory})
        commit('LOADING', false, {root: true})
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mutations: {
    setDesignerData (state, {designerMaster, designerProductItem, designerProducts, designerProductCategory}) {
      state.designerMaster = designerMaster
      state.designerProductItem = designerProductItem
      state.designerProducts = designerProducts
      state.designerProductCategory = designerProductCategory
    }
  }
}
