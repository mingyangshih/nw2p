import axios from 'axios'

export default {
  state: {
    // 一個理由下面的資料
    getIndexData: []
  },
  actions: {
    // 取一個理由下面的資料
    getIndex (context) {
      context.commit('LOADING', true, {root: true})
      axios.get(`${process.env.API}product/getindex`).then((response) => {
        context.commit('changeIndexData', response.data.data)
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        context.commit('LOADING', false, {root: true})
      })
    }
  },
  mutations: {
    changeIndexData (state, indexData) {
      // console.log(indexData)
      state.getIndexData = indexData
    }
  }
}
