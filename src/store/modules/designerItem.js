import axios from 'axios'
export default {
  state: {
    productItem: [],
    productName: '',
    templateName: '',
    designerName: '',
    price: '',
    productIntroDesc: [],
    productNotes: '',
    productPattern: [],
    productFeature: [],
    purchaseNotice: '',
    choosedPatterenID: null,
    editLink: '',
    recommendedDesigner: [],
    recommendedPrdouct: []
  },
  actions: {
    getDesignerItem ({commit}, {designerItemId}) {
      commit('LOADING', true, {root: true})
      let API_PATH = process.env.API
      return axios.get(`${API_PATH}design/getdetail/${designerItemId}`).then(response => {
        console.log(response.data.data)
        let {productItem, productIntroDesc, productNotes, productPattern, productFeature, purchaseNotice, designerMaster, recommendedDesigner, recommendedPrdouct} = response.data.data
        commit('init', {productItem, productIntroDesc, productNotes, productPattern, productFeature, purchaseNotice, designerMaster, recommendedDesigner, recommendedPrdouct})
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        commit('LOADING', false, {root: true})
      })
    }
  },
  mutations: {
    init (state, {productItem, productIntroDesc, productNotes, productPattern, productFeature, purchaseNotice, designerMaster, recommendedDesigner, recommendedPrdouct}) {
      state.productItem = productItem
      state.productName = productItem[0].productName
      state.templateName = productItem[0].templateName
      state.price = productItem[0].price
      state.choosedPatterenID = productItem[0].Id
      state.editLink = productItem[0].editLink
      state.designerMaster = designerMaster
      state.productIntroDesc = productIntroDesc
      state.productNotes = productNotes
      state.productPattern = productPattern
      state.productFeature = productFeature
      state.purchaseNotice = purchaseNotice
      state.designerName = designerMaster[0].designerName
      state.recommendedDesigner = recommendedDesigner
      state.recommendedPrdouct = recommendedPrdouct
    },
    choosedPatteren (state, {Id, editLink}) {
      state.choosedPatterenID = Id
      state.editLink = editLink
    }
  }
}
