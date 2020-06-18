<template lang="pug">
  #enrollModal.modal.fade(tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true')
      .modal-dialog(role='document')
        .modal-content.border-0.px-3.py-3
          .modal-header.border-bottom-0.py-0
            button.close(type='button' data-dismiss='modal' aria-label='Close')
              span(aria-hidden='true') &times;
          .modal-body.px-0.py-0
            P#exampleModalLabel.modal-title.font-weight-bold.text-center 註冊
            p.mb-1.font-weight-bold.fz14 會員帳號*
            ValidationProvider(rules="required|email" v-slot="{ errors }" name="email")
             input(type="text" v-model="enrollData.account" required).form-control.fz14.rounded-0
             span.text-danger.fz14.font-weight-bold {{errors[0]}}
            p.mb-0.font-weight-bold.fz14 帳號範例(w2p@gmail.com)
            p.mb-1.mt-1.font-weight-bold.fz14 會員姓名*
            ValidationProvider(rules="required" v-slot="{ errors }" name="姓名")
              input(type="text" v-model="enrollData.UDNAME").form-control.fz14.rounded-0
              span.text-danger.fz14.font-weight-bold {{errors[0]}}
            .form-row.mt-2
              .form-group.col-md-6.mb-0
                label.fz14.font-weight-bold.mb-1 密碼*
                ValidationProvider(rules="required" v-slot="{errors}" name="密碼")
                 input(type="password" v-model="enrollData.password").form-control.rounded-0
                 span.text-danger.fz14.font-weight-bold {{errors[0]}}
              .form-group.col-md-6.mb-0
                label.fz14.font-weight-bold.mb-1 確認密碼* <span class="text-danger" v-if="enrollData.password !== verifyPassword">密碼不一致</span>
                input(type="password" v-model="verifyPassword").form-control.rounded-0
            p.font-weight-bold.fz14.mb-1 密碼至少6個字元，不可使用全形數字以及中文字。
            .form-row
              .form-group.col-md-6.mb-1
                label.fz14.font-weight-bold 生日
                .d-flex
                  select.form-control.rounded-0( v-model="birthdayYear")
                    <option :value="item + 1910" v-for="item in fullYear - 1910">{{item + 1910}}</option>
                  select.form-control.ml-2.rounded-0(v-model="birthdayMonth")
                    <option :value="item" v-for="item in 12"> {{item}}月</option>
                  select.form-control.ml-2.rounded-0(v-model="birthdayDate")
                    <option :value="item" v-for="item in date">{{item}}</option>
              .form-group.col-md-6.mb-1
                label.fz14.font-weight-bold 性別
                select.form-control.rounded-0(v-model="enrollData.USEX")
                  <option value="F">女</option>
                  <option value="M">男</option>
            p.mb-1.font-weight-bold.fz14 手機號碼*
            ValidationProvider(rules="required|digits:10" v-slot="{errors}" name="手機號碼")
              input(type="tel" v-model="enrollData.UPHONE").form-control.rounded-0
              span.text-danger.fz14.font-weight-bold {{errors[0]}}
            .form-row
              .form-group.col-md-6.mb-1
                label.font-weight-bold.fz14.mb-1 從哪得知我們?
                select.form-control.rounded-0(v-model="enrollData.UREF")
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
              .form-group.col-md-6.mb-1
                label.fz-14.font-weight-bold.fz14.mb-1 是否想收到電子報?
                select.form-control.rounded-0(v-model="enrollData.USEND")
                  option(value="Y") 是
                  option(value="N") 否
            .form-row
              .form-group.col-md-4.mb-0
                label.fz14.font-weight-bold.mb-1 區號
                input.form-control.bg-white.rounded-0(type="text" disabled v-model="postId")
              .form-group.col-md-4.mb-0
                label.fz14.font-weight-bold.mb-1 縣市
                select.form-control.rounded-0(v-model="modeledCityName")
                  option(v-for="item in cityName") {{item}}
              .form-group.col-md-4.mb-0
                label.fz14.font-weight-bold.mb-1 區域
                select.form-control.rounded-0(v-model="modeledLocationName")
                  option(v-for="(item, idx) in location") {{item.districtName}}
              .form-group.col-md-12
                label.fz14.font-weight-bold.my-1 地址
                //- input.form-control.rounded-0(type="text" v-model="addr")
                .input-group.mb-1
                  .input-group-prepend
                    label.input-group-text.rounded-0 {{modeledCityName}}{{modeledLocationName}}
                  input.form-control(v-model="addr")
            .d-flex.flex-column.px-0.py-0.border-top-0
              a(href="#").mt-2.text-primary.font-weight-bold.fz14.text-center 服務條款
              .d-flex.align-items-center.justify-content-center.my-2
                input(type="checkbox" v-model="readTerms")
                label.mb-0.fz14.ml-2 我已閱讀並同意相關服務條款
              button.btn.w-100.ml-0.font-weight-bold.mb-2.fz14(:disabled="!readTerms || !enrollData.account || !enrollData.password || !enrollData.UPHONE" :class="{'btn-gray':!readTerms || !enrollData.account || !enrollData.password || !enrollData.UPHONE, 'btn-primary': readTerms}" @click="enrollAction") 確定建立
              .d-flex.justify-content-center
                span.fz14.font-weight-bold 已有帳號了？
                a(data-toggle="modal" href="#loginModal" data-dismiss="modal").text-primary 登入
</template>

<script>
export default {
  data () {
    return {
      fullYear: null,
      birthdayMonth: null,
      birthdayYear: null,
      birthdayDate: null,
      enrollData: {
        account: '',
        password: '',
        UAID: '',
        UAGE: '',
        USEX: '',
        USEND: '',
        UADDR: '',
        UDNAME: '',
        UPHONE: '',
        UTEL1: '02',
        UTELPHONE: '22668944',
        UREF: ''
      },
      // 判斷是否重複輸入密碼
      verifyPassword: '',
      // 判斷是否同意條款
      readTerms: false,
      // 所有縣市資料
      totalCityData: [],
      // 抓近來縣市資料
      cityName: [],
      // v-model 綁定縣市
      modeledCityName: '',
      // v-model 綁定區域名
      modeledLocationName: '',
      // addr 地址後面詳細資訊
      addr: ''
    }
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
    // 用縣市判斷有哪些區域
    location () {
      let vm = this
      let districtName = []
      vm.totalCityData.forEach((item) => {
        if (item.cityName === vm.modeledCityName) {
          districtName = item.district
        }
      })
      return districtName
    },
    // 用縣市區域判斷郵遞區號
    postId () {
      let vm = this
      let postId = ''
      vm.totalCityData.forEach((item) => {
        if (item.cityName === vm.modeledCityName) {
          item.district.forEach((item1) => {
            if (item1.districtName === vm.modeledLocationName) {
              postId = item1.zipCode
            }
          })
        }
      })
      return postId
    }
  },
  methods: {
    enrollAction () {
      $('#enrollModal').modal('toggle')
      let vm = this
      if (vm.birthdayMonth < 10) {
        vm.birthdayMonth = `0${vm.birthdayMonth}`
      }
      if (vm.birthdayDate < 10) {
        vm.birthdayDate = `0${vm.birthdayDate}`
      }
      vm.enrollData.UAGE = `${vm.birthdayYear}${vm.birthdayMonth}${vm.birthdayDate}`
      vm.enrollData.UADDR = `${vm.addr}`
      vm.enrollData.UAID = vm.postId
      vm.$store.dispatch('ENROLL', vm.enrollData)
      // 註冊後清空
      vm.birthdayMonth = null
      vm.birthdayYear = null
      vm.birthdayDate = null
      vm.enrollData = {
        account: '',
        password: '',
        UAID: '',
        UAGE: '',
        USEX: '',
        USEND: '',
        UADDR: '',
        UDNAME: '',
        UPHONE: '',
        UTEL1: '02',
        UTELPHONE: '22668944',
        UREF: ''
      }
      // 判斷是否重複輸入密碼
      vm.verifyPassword = ''
      // 判斷是否同意條款
      vm.readTerms = false
      // 所有縣市資料
      vm.totalCityData = []
      // 抓近來縣市資料
      vm.cityName = []
      // v-model 綁定縣市
      vm.modeledCityName = ''
      // v-model 綁定區域名
      vm.modeledLocationName = ''
      // addr 地址後面詳細資訊
      vm.addr = ''
    }
  }
  // created () {
  //   let d = new Date()
  //   this.fullYear = d.getFullYear()
  //   // 取郵遞區號資料
  //   let vm = this
  //   this.$http.get(`${process.env.API}addr/postalcode`).then((response) => {
  //     vm.totalCityData = response.data.data
  //     response.data.data.forEach((item) => {
  //       vm.cityName.push(item.cityName)
  //     })
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }
}
</script>

<style lang="scss" scoped>
  $s20: 20px;
  // modal
  .fz14{
    font-size: 14px;
  }
  .modal-dialog{
    max-width: 579px;
    margin: 20px auto;
    box-shadow: 3px 3px 5px rgba(58, 58, 58, 0.2);
  }
  @media(max-width: 640px){
    .modal-dialog{
      margin: 0 auto;
    }
  }
  .modal-content{
    z-index: 100;
  }

  .modal-title{
    font-size: $s20;
    font-family: "Noto Serif TC",serif;
    margin-bottom: 30px;
  }

  .modal-body{
    .form-control{
      background: #e8f0fe;
      border:1px solid #c6bdbc;
    }
  }
  #keepLogin{
  & ~ label {
  font-size: 13px;
  line-height: 13px;
  }
  }
  .showPassword{
    position:relative;
    float:right;
    z-index: 2;
    margin-top: -34px;
    margin-right: 16px;
    cursor: pointer;
  }
</style>
