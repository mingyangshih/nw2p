<template lang="pug">
  .contactus
    //- alert 提醒視窗
    alert
    .title 客服信箱
    hr
    .d-flex.align-items-center
      .col-md-3
        p 客服信箱
      .col-md-9
        p services@cloudw2p.com
    .d-flex.align-items-center
      .col-md-3
        p 客服時間
      .col-md-9
        p 週一至週五 ( 非例假日 )，10:00 ~ 12:00 及 13:00 ~ 17:00
    .d-flex.align-items-center.mb-3
      .col-md-3
        p 姓名
      .col-md-9
        input(type="text" v-model="contactInfo.name").form-control.rounded-0
        p.mb-0.text-danger.text-right.fz14(v-if="contactInfo.name === '' && emptyInput.indexOf(0) > -1") 此欄位必填
    .d-flex.align-items-center.mb-3
      .col-md-3
        p 電話
      .col-md-9
        input(type="text" v-model="contactInfo.phone").form-control.rounded-0
        p.mb-0.text-danger.text-right.fz14(v-if="contactInfo.phone === '' && emptyInput.indexOf(1) > -1") 此欄位必填
    .d-flex.align-items-center.mb-3
      .col-md-3
        p Email
      .col-md-9
        input(type="text" v-model="contactInfo.email").form-control.rounded-0
        p.mb-0.text-danger.text-right.fz14(v-if="contactInfo.email === '' && emptyInput.indexOf(2) > -1") 此欄位必填
    .d-flex.align-items-center.mb-3
      .col-md-3
        p 您的留言
      .col-md-9
        textarea(name="" id="" cols="30" rows="10" v-model="contactInfo.message").form-control.rounded-0
        p.mb-0.text-danger.text-right.fz14(v-if="contactInfo.message === '' && emptyInput.indexOf(3) > -1") 此欄位必填
    .d-flex.align-items-center.mb-3
      .col-md-3
      .col-md-9
        p 如一直收不到回覆信件，請查明您的垃圾信件夾，並將services@cloudw2p.com 加入通訊錄喔！上列您填入的資料，僅在雲端印刷網上交易使用，不會作為其他用途使用。以上資料請仔細填寫，聯絡將以此資料為主，謝謝您的填寫。
    .d-flex.justify-content-end
      .col-md-3
      .col-md-9.px-0
        .d-flex.align-items-center
          img(:src="verifyImg")
          input.ml-3.rounded-0(type="text" v-model="verifyCode").captchaInput.mx-auto
          button.btn.btn-primary.font-weight-bold.btnInPage.px-0.py-0.text-decoration-none.rounded-0(@click="getImage") 重產驗證碼
    .d-flex.justify-content-end
      button.btn.btn-primary.font-weight-bold.btnInPage.pr-0.py-0.my-3.text-decoration-none(@click="captcha") 確認送出 <i class="fas fa-chevron-right fa-xs"></i>
  </div>

</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
import {mapActions} from 'vuex'
import { createHelpers } from 'vuex-map-fields'
import alert from '../components/alert'
const { mapFields } = createHelpers({
  getterType: 'contactusModules/getField',
  mutationType: 'contactusModules/updateField'
})
export default {
  components: { VueRecaptcha, alert },
  data () {
    return {
      buttonshow: false
    }
  },
  methods: {
    ...mapActions('contactusModules', [
      'contactus', 'captcha', 'getImage'
    ])
  },
  computed: {
    ...mapFields(['contactInfo', 'emptyInput', 'verifyImg', 'code', 'verifyCode'])
  },
  created () {
    this.$store.commit('contactusModules/clearContactInfo')
    this.$store.dispatch('contactusModules/getImage')
  }
}
</script>

<style lang="scss" scoped>
  .fz14{
    font-size: 14px;
  }
  .title{
    font-size: 24px;
    font-weight: bold;
    font-family: "Noto Serif TC",serif;
  }
  .btnInPage{
    border-radius: 5px;
    width: 203px;
    height: 39px;
    font-size: 21px;
    padding-left: 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .fa-chevron-right{
      margin-left: 37px;
    }
  }
  .captchaInput{
    border: 1px solid black;
    height: 70px;
  }
</style>
