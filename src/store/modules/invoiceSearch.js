import { getField, updateField } from 'vuex-map-fields'
import $ from 'jquery'
import router from '../../router'

export default{
  namespaced: true,
  state: {
    startDate: '',
    endDate: '',
    invoiceAry: [],
    invoiceNum: null,
    basketref: ''
  },
  actions: {
    getBasketRef ({commit}) {
      let ca = document.cookie.split(';')
      let tempbasketref = ''
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        if (c.charAt(0) === ' ') {
          c = c.substring(1, c.length)
          if (c.includes('mawebhlbr')) {
            tempbasketref = c
          }
        }
      }
      let basketref = tempbasketref.replace('mawebhlbr=', '')
      commit('setBasketref', {basketref})
    },
    getInvoice ({commit, state, dispatch}) {
      dispatch('getBasketRef')
      if (state.basketref === '') {
        alert('請先登入')
        router.push('/')
        return
      }
      commit('LOADING', true, {root: true})
      let API_PATH = process.env.API
      let token = state.basketref
      fetch(`${API_PATH}user/cloudinvoice/${token}/${state.startDate}/${state.endDate}`, {method: 'POST'}).then(res => {
        return res.json()
      }).then(result => {
        commit('getInvoice', {result})
      }).finally(() => {
        commit('LOADING', false, {root: true})
      })
    },
    init ({commit, state, dispatch}) {
      dispatch('getBasketRef')
      if (state.basketref === '') {
        alert('請先登入')
        router.push('/')
        return
      }
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
      let token = state.basketref
      let API_PATH = process.env.API
      fetch(`${API_PATH}user/cloudinvoice/${token}/${startDate}/${endDate}`, {method: 'POST'}).then(res => {
        return res.json()
      }).then(result => {
        commit('getInvoice', {result})
      }).catch((error) => {
        console.error(error)
      }).finally(() => {
        commit('LOADING', false, {root: true})
      })
    },
    invoiceImg ({state}) {
      if (state.basketref === '') {
        alert('請先登入')
        router.push('/')
        return
      }
      $('#invoiceModal').modal('show')
      let imgbox = document.getElementById('imgbox')
      imgbox.innerHTML = ''
      let API_PATH = process.env.API
      let invoiceNum = state.invoiceNum
      let token = state.basketref
      fetch(`${API_PATH}user/invoiceimg/${token}/${invoiceNum}`, {method: 'POST'}).then(res => {
        return res.json()
      }).then(response => {
        let image = new Image()
        image.src = response.data
        image.classList.add('img-fluid')
        imgbox.appendChild(image)
      }).finally(() => {
      })
    }
  },
  mutations: {
    updateField,
    getInvoice (state, {result}) {
      state.invoiceAry = result
    },
    invoiceNum (state, {invoiceNum}) {
      state.invoiceNum = invoiceNum
    },
    setBasketref (state, {basketref}) {
      state.basketref = basketref
    }
  },
  getters: {
    getField
  }
}
