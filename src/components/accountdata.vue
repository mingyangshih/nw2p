<template lang="pug">
  .accountdata
    h4.font-weight-bold 資料修改
    hr.mb-5
    p.font-weight-bold.fz14.mb-0 會員帳號*
    input(type="text" v-model="enrollData.account" disabled).form-control.rounded-0.border-dark.mb-3.full
    p.font-weight-bold.fz14.mb-0 會員姓名*
    input(type="text" v-model="enrollData.UDNAME").form-control.rounded-0.border-dark.mb-3.full
    p.font-weight-bold.fz14.mb-0 手機號碼*
    input(type="text" v-model="enrollData.UPHONE").form-control.rounded-0.border-dark.mb-3.full
    p.font-weight-bold.fz14.mb-0 生日*
    .row.birth.mx-0.mb-3
      .col-md-4.year
        select.form-control.rounded-0.border-dark.full(v-model="birthdayYear")
          <option :value="item + 1910" v-for="item in fullYear - 1910">{{item + 1910}}</option>
      .col-md-4.px-0.month
        select.form-control.rounded-0.border-dark(v-model="birthdayMonth")
          <option :value="item" v-for="item in 12"> {{item}}月</option>
      .col-md-4.date
        select.form-control.rounded-0.border-dark(v-model="birthdayDate")
          <option :value="item" v-for="item in date">{{item}}</option>
    .row.sexAndPhone.mx-0
      .col-md-6.sex
        .form-group.fz14.font-weight-bold 性別
          select.form-control.rounded-0.border-dark(v-model="enrollData.USEX")
            <option value="F">女</option>
            <option value="M">男</option>
      .col-md-6.phone
        .form-group.fz14.font-weight-bold 電話
          input(type="tel" v-model="enrollData.UTELPHONE").form-control.rounded-0.border-dark
    .row.mx-0.knowUsBox
      .col-md-6.knowUs
        .form-group.fz14.font-weight-bold 從哪得知我們
          select.form-control.rounded-0.border-dark( v-model="enrollData.UREF")
            option(value="10") 部落格
            option(value="11") Yahoo 關鍵字
            option(value="12") Google 關鍵字
            option(value="13") 親友推薦
            option(value="14") 報章雜誌報導
            option(value="15") DM廣告
            option(value="16") 寰宇家庭
            option(value="17") 紫金堂
            option(value="18") 再生緣
            option(value="19") Nikon 活動
            option(value="20") 企業用戶
            option(value="21") VOW 舊用戶
            option(value="22") 17 Life
            option(value="23") 設計師活動相關訊息
            option(value="24") GROUPON
            option(value="25") 攝影器材展
            option(value="26") YAHOO 折扣
            option(value="27") 大潤發
            option(value="28") 家樂福
            option(value="29") VeryWed
            option(value="30") GOMAJI
            option(value="31") 信誼
            option(value="99") 其他
      .col-md-6.eNews
        .form-group.fz14.font-weight-bold 是否想收到電子報
          select.form-control.rounded-0.border-dark(v-model="enrollData.USEND")
            option(value="Y") 是
            option(value="N") 否
    .row.addrBox.mx-0
      .col-md-4.zipCode
        p.fz14.font-weight-bold.mb-0 區號
        input.form-control.rounded-0.border-dark(tupe="text" disabled v-model="enrollData.UAID")
      .col-md-4.city
        p.fz14.font-weight-bold.mb-0 縣市
        select.form-control.rounded-0.border-dark(v-model="cityName")
          option(v-for="item in totalCityName") {{item}}
      .col-md-4.district
        p.fz14.font-weight-bold.mb-0 區域
        select.form-control.rounded-0.border-dark(v-model="districtName")
          option(v-for="item in location") {{item.districtName}}
      .col-12.px-0
        p.fz14.font-weight-bold.mb-0 地址
        input.form-control.rounded-0.border-dark(type=
        "text" v-model="enrollData.UADDR")
    .row.justify-content-center.my-5.buttonBox.mx-0
      button(@click='modifyEnrollData').btn.btn-primary.btnInPage.py-0.px-0 <span class="font-weight-bold">更新</span>
</template>

<script>
import {mapActions} from 'vuex'
// import { mapFields } from 'vuex-map-fields'
import { createHelpers } from 'vuex-map-fields'

// 'modifyEnrollModules' is the name of the Vuex module.
// namespace 設為true 時的特殊處理
const { mapFields } = createHelpers({
  getterType: 'modifyEnrollModules/getField',
  mutationType: 'modifyEnrollModules/updateField'
})
export default {
  data () {
    return {
      fullYear: null,
      totalCityName: []
      // birthdayMonth: null,
      // birthdayYear: null,
      // birthdayDate: null
    }
  },
  methods: {
    ...mapActions('modifyEnrollModules', ['modifyEnrollData'])
  },
  computed: {
    date () {
      switch (this.birthdayMonth) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          return 31
        case 2:
          if (this.birthdayYear % 4 === 0) {
            return 29
          } else {
            return 28
          }
        default:
          return 30
      }
    },
    ...mapFields([
      'enrollData',
      'birthdayYear',
      'birthdayMonth',
      'birthdayDate',
      'cityName',
      'districtName',
      'location'
    ])
  },
  created () {
    // 取得今年是哪一年
    let d = new Date()
    let vm = this
    vm.fullYear = d.getFullYear()
    // 取郵遞區號資料
    vm.$http.get(`${process.env.API}addr/postalcode`).then((response) => {
      response.data.data.forEach(item => {
        vm.totalCityName.push(item.cityName)
      })
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style lang="scss" scoped>
  input.full{
    width: 75%;
  }
  .row{
    &.birth{
      width: 75%;
      .year{
        padding-left: 0px;
      }
      .date{
        padding-right: 0px;
      }
    }
    .sexAndPhone{
      width: 75%;
      .sex{
        padding-left: 0;
      }
      .phone{
        padding-right: 0;
      }
    }
    .knowUsBox{
      width: 75%;
      .knowUs{
        padding-left: 0;
      }
      .eNews{
        padding-right: 0;
      }
    }
    .addrBox{
      width: 75%;
      .zipCode{
        padding-left: 0;
      }
      .district{
        padding-right: 0;
      }
    }
    .buttonBox{
      width: 75%;
    }
  }
  // 頁面中的Btn樣式
  .btnInPage{
    border-radius:3px;
    width: 150px;
    height: 39px;
    font-size: 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    // .fa-chevron-right{
    //   margin-left: 37px;
    // }
  }
  @media(max-width: 640px){
    input{
      &.full{
        width: 100%;
      }
    }
    .row{
      &.birth{
        width: 100%;
        .year{
          margin-bottom: 16px;
          padding-left: 0px;
          padding-right: 0px;
        }
        .month{
          margin-bottom: 16px;
        }
        .date{
          padding-right: 0px;
          padding-left: 0px;
        }
      }
      .sexAndPhone{
        width: 100%;
        .sex{
          padding-left: 0;
          padding-right: 0;
        }
        .phone{
          padding-right: 0;
          padding-left: 0;
        }
      }
      .knowUsBox{
        width: 100%;
        .knowUs{
          padding-left: 0;
          padding-right: 0;
        }
        .eNews{
         padding-right: 0;
         padding-left: 0;
        }
      }
      .addrBox{
        width: 100%;
        .zipCode{
          padding-left: 0;
          padding-right: 0;
        }
        .city{
          padding:0 0 ;
        }
        .district{
          padding-right: 0;
          padding-left: 0;
        }
      }
      .buttonBox{
        width: 100%;
      }
    }
  }
</style>
