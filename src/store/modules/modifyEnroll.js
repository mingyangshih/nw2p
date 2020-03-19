import axios from 'axios'
import { getField, updateField } from 'vuex-map-fields'
export default {
  namespaced: true,
  state: {
    enrollData: {
      account: '',
      UAID: '',
      UAGE: '',
      USEX: '',
      USEND: '',
      UADDR: '',
      UDNAME: '',
      UPHONE: '',
      UTEL1: '',
      UTELPHONE: '',
      UREF: ''
    },
    birthdayYear: null,
    birthdayMonth: null,
    birthdayDate: null,
    totalCityData: [],
    cityName: '',
    districtName: '',
    location: []
  },
  actions: {
    getOldData ({commit, dispatch}) {
      let nw2pData = JSON.parse(localStorage.getItem('nw2pData'))
      // console.log(nw2pData)
      axios.get(`${process.env.API}user/getdetail/${nw2pData.UID}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${nw2pData.token}`
        }
      }).then((response) => {
        if (!response.data.data) {
          // token 過期 重新取得
          dispatch('refreshToken')
        } else if (response.data.error_code === '0') {
          // console.log(response.data.data[0])
          let enrolledData = response.data.data[0]
          commit('loadEnrolledData', enrolledData)
          // 觸發取郵遞區號
          dispatch('getAddressData')
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // token 過期 重新取得
    refreshToken ({dispatch}) {
      let nw2pData = JSON.parse(localStorage.getItem('nw2pData'))
      fetch(`${process.env.API}auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${nw2pData.token}`
        }
      }).then(res => {
        return res.json()
      }).then(result => {
        console.log(result)
        if (result.error_code === '-1') {
          dispatch('logOut', null, { root: true })
        }
      })
    },
    // 取郵遞區號對應的縣市
    getAddressData ({state, commit}) {
      axios.get(`${process.env.API}addr/postalcode`).then(response => {
        let totalData = response.data.data
        let cityName = ''
        let districtNameAry = []
        let districtName = ''
        let location = []
        totalData.forEach(item => {
          item.district.forEach(itm => {
            // 用zipCode(郵遞區號)篩選出城市、區鄉總數(location)、區號是否重複(districtNameAry)
            if (itm.zipCode === state.enrollData.UAID) {
              cityName = item.cityName
              location = item.district
              districtNameAry.push(itm.districtName)
            }
          })
        })
        // 判斷郵遞區號是否重複，若有重複不預設，若沒有直接選出鄉或區
        if (districtNameAry.length > 1) districtName = ''
        else districtName = districtNameAry[0]
        commit('changeAddrData', {cityName, districtName, location, totalData})
      })
    }
  },
  mutations: {
    updateField,
    loadEnrolledData (state, enrolledData) {
      console.log(enrolledData)
      state.enrollData.account = enrolledData.account
      state.enrollData.UAID = enrolledData.UAID
      state.enrollData.USEX = enrolledData.USEX
      state.enrollData.EN_UPHONE = enrolledData.EN_UPHONE
      state.enrollData.UTELPHONE = enrolledData.EN_UTELPHONE
      state.enrollData.UDNAME = enrolledData.UDNAME
      state.enrollData.USEND = enrolledData.USEND
      state.enrollData.UADDR = enrolledData.UADDR
      state.enrollData.UREF = enrolledData.UREF
      state.birthdayYear = enrolledData.UAGE.slice(0, 4)
      state.birthdayMonth = enrolledData.UAGE.slice(4, 6)
      if (enrolledData.UAGE[4] === '0') {
        state.birthdayMonth = enrolledData.UAGE.slice(5, 6)
      } else {
        state.birthdayMonth = enrolledData.UAGE.slice(4, 6)
      }
      if (enrolledData.UAGE[6] === '0') {
        state.birthdayDate = enrolledData.UAGE.slice(7, 8)
      } else {
        state.birthdayDate = enrolledData.UAGE.slice(6, 8)
      }
    },
    changeAddrData (state, {cityName, districtName, location, totalData}) {
      state.cityName = cityName
      state.districtName = districtName
      state.location = location
      state.totalCityData = totalData
    }
  },
  getters: {
    getField,
    changeCityChangeLocation (state) {
      state.totalCityData.forEach(item => {
        if (item.cityName === state.cityName) state.location = item.district
      })
    }
  }
}
