import { getField, updateField } from 'vuex-map-fields'

export default{
  namespaced: true,
  state: {
    startDate: '',
    endDate: '',
    invoiceAry: []
  },
  actions: {
    getInvoice ({commit, state}) {
      commit('LOADING', true, {root: true})
      let API_PATH = process.env.API
      fetch(`${API_PATH}user/cloudinvoice/218a3411611912211664331197132515911195514128491347a0ca/${state.startDate}/${state.endDate}`, {method: 'GET'}).then(res => {
        return res.json()
      }).then(result => {
        commit('getInvoice', {result})
      }).finally(() => {
        commit('LOADING', false, {root: true})
      })
    },
    init ({commit, state}) {
      commit('LOADING', true, {root: true})
      let today = new Date()
      let time = today.getTime()
      // use timestamp count timestamp of a thirty days ago
      let oneMonthAgoTimeStamp = time - 86400000 * 30
      let oneMonthAgoDate = new Date(oneMonthAgoTimeStamp)
      let y = today.getFullYear()
      let ly = oneMonthAgoDate.getFullYear()
      let m = today.getMonth() + 1
      let lm = oneMonthAgoDate.getMonth() + 1
      let date = today.getDate()
      let ldate = oneMonthAgoDate.getDate()
      let endDate = `${y}-${m}-${date}`
      let startDate = `${ly}-${lm}-${ldate}`
      let API_PATH = process.env.API
      fetch(`${API_PATH}user/cloudinvoice/218a3411611912211664331197132515911195514128491347a0ca/${startDate}/${endDate}`, {method: 'GET'}).then(res => {
        return res.json()
      }).then(result => {
        console.log(result)
        commit('getInvoice', {result})
      }).finally(() => {
        commit('LOADING', false, {root: true})
      })
    }
  },
  mutations: {
    updateField,
    getInvoice (state, {result}) {
      state.invoiceAry = result
    }
  },
  getters: {
    getField
  }
}
