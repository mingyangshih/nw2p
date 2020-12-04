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
        let message = '請先登入'
        let theme = 'danger'
        commit('changeMessage', {message, theme}, {root: true})
        router.push('/')
        return
      }
      if (state.startDate === '' || state.endDate === '') {
        let message = '請選擇搜尋區間'
        let theme = 'primary'
        commit('changeMessage', {message, theme}, {root: true})
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
      let m = (today.getMonth() + 1 < 10) ? '0' + today.getMonth() + 1 : today.getMonth() + 1
      let lm = (oneMonthAgoDate.getMonth() + 1 < 10) ? '0' + oneMonthAgoDate.getMonth() + 1 : oneMonthAgoDate.getMonth() + 1
      let date = (today.getDate() < 10) ? '0' + today.getDate() : today.getDate()
      let ldate = (oneMonthAgoDate.getDate() < 10) ? '0' + oneMonthAgoDate.getDate() : oneMonthAgoDate.getDate()
      let endDate = `${y}-${m}-${date}`
      let startDate = `${ly}-${lm}-${ldate}`
      let token = state.basketref
      let API_PATH = process.env.API
      commit('setDate', {startDate, endDate})
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
    invoiceImg ({state, dispatch, commit}) {
      dispatch('getBasketRef')
      if (state.basketref === '') {
        alert('請先登入')
        router.push('/')
        return
      }
      dispatch('showModal')
      let imgbox = document.getElementById('imgbox')
      let system = document.getElementById('system')
      system.innerHTML = '<p class="text-primary font-weight-bold w-100 text-center">系統處理中...</p>'
      imgbox.innerHTML = ''
      let API_PATH = process.env.API
      let invoiceNum = state.invoiceNum
      let token = state.basketref
      fetch(`${API_PATH}user/invoiceimg/${token}/${invoiceNum}`, {method: 'POST'}).then(res => {
        return res.json()
      }).then(response => {
        if (response.error_code === '-1') {
          let message = response.error_message
          let theme = 'danger'
          commit('changeMessage', {message, theme}, {root: true})
          dispatch('closeModal')
          router.push('/')
          return
        }
        system.innerHTML = ''
        let image = new Image()
        image.src = response.data
        image.classList.add('img-fluid')
        imgbox.appendChild(image)
      }).finally(() => {
      })
    },
    // 開啟發票modal
    showModal () {
      $('#invoiceModal').modal('show')
      $('#tpx-basket-bar').css('z-index', '0')
    },
    // 關閉發票modal
    closeModal () {
      $('#invoiceModal').modal('hide')
      // taopix 預設css
      setTimeout(function () {
        $('#tpx-basket-bar').css('z-index', '900')
      }, 1000)
    }
  },
  mutations: {
    updateField,
    setDate (state, {startDate, endDate}) {
      state.startDate = startDate
      state.endDate = endDate
    },
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
