<template lang="pug">
  .serviceContent.mt-30
    alert
    //- 桌機看到的樣子
    .container.desktop
      .row
        .col-md-2
          .d-flex.flex-column
            p.d-flex.justify-content-between.align-items-center 關於會員 <i class="fas fa-chevron-right"></i>
            p.d-flex.justify-content-between.align-items-center 訂購與取貨 <i class="fas fa-chevron-right"></i>
            p.d-flex.justify-content-between.align-items-center 發票與售後服務 <i class="fas fa-chevron-right"></i>
            p.d-flex.justify-content-between.align-items-center 電子發票 <i class="fas fa-chevron-right"></i>
            router-link(to="/serviceContent/workslayout" :class="{'text-primary': active === '作品編排'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '作品編排'">作品編排</span> <i class="fas fa-chevron-right"></i>
            p.d-flex.justify-content-between.align-items-center 網路設定 <i class="fas fa-chevron-right"></i>
            p.d-flex.justify-content-between.align-items-center 購物車 <i class="fas fa-chevron-right"></i>
            router-link(to="/serviceContent/contactus" :class="{'text-primary': active === '客服信箱'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '客服信箱'">客服信箱</span> <i class="fas fa-chevron-right"></i>
        .col-md-10
          router-view
    .container.mobile
      #accordionExample.accordion
        .card.border-left-0.border-right-0
          #headingOne.card-header.pl-0(data-toggle='collapse' data-target='#collapseOne')
            h2.mb-0
              .btn.text-decoration-none.text-dark.pl-0
                | 關於會員
          #collapseOne.collapse.show(aria-labelledby='headingOne' )
            .card-body
              |
        .card.border-left-0.border-right-0.border-bottom
          #headingTwo.card-header.pl-0(data-toggle='collapse' data-target='#collapseTwo')
            h2.mb-0
              .btn.collapsed.text-decoration-none.text-dark.pl-0
                | 訂購與取貨
          #collapseTwo.collapse(aria-labelledby='headingTwo' data-parent='#accordionExample')
            .card-body
              |
        .card.border-left-0.border-right-0
          #headingThree.card-header.pl-0(data-toggle='collapse' data-target='#collapseThree')
            h2.mb-0
              .btn.collapsed.text-decoration-none.text-dark.pl-0
                | 發票與售後服務
          #collapseThree.collapse(aria-labelledby='headingThree' data-parent='#accordionExample')
            .card-body
              |
        .card.border-left-0.border-right-0
          #headingThree.card-header.pl-0(data-toggle='collapse' data-target='#collapseFour')
            h2.mb-0
              .btn.collapsed.text-decoration-none.text-dark.pl-0
                | 電子發票
          #collapseFour.collapse(aria-labelledby='headingThree' data-parent='#accordionExample')
            .card-body
              |
        .card.border-left-0.border-right-0
          #headingThree.card-header.pl-0(data-toggle='collapse' data-target='#collapseFive')
            h2.mb-0
              .btn.collapsed.text-decoration-none.text-dark.pl-0
                | 作品編排
          #collapseFive.collapse(aria-labelledby='headingThree' data-parent='#accordionExample')
            .card-body
              |
        .card.border-left-0.border-right-0
          #headingThree.card-header.pl-0(data-toggle='collapse' data-target='#collapseSix')
            h2.mb-0
              .btn.collapsed.text-decoration-none.text-dark.pl-0
                | 網路設定
          #collapseSix.collapse(aria-labelledby='headingThree' data-parent='#accordionExample')
            .card-body
              |
        .card.border-left-0.border-right-0
          #headingThree.card-header.pl-0(data-toggle='collapse' data-target='#collapseSeven')
            h2.mb-0
              .btn.collapsed.text-decoration-none.text-dark.pl-0
                | 客服信箱
          #collapseSeven.collapse(aria-labelledby='headingThree' data-parent='#accordionExample')
            .card-body.pl-0
              .title 客服信箱
              hr
              .d-flex
                .col-3.px-0.d-flex.align-items-start
                  p 客服信箱
                .col-10.px-0.d-flex.align-items-start
                  p services@cloudw2p.com
              .d-flex
                .col-3.px-0.d-flex.align-items-start
                  p 客服時間
                .col-10.px-0.d-flex.align-items-start
                  p 週一至週五 ( 非例假日 )，10:00 ~ 12:00 及 13:00 ~ 17:00
              .d-flex.mb-3
                .col-3.px-0.d-flex.align-items-center
                  p.mb-0 姓名
                .col-10.px-0.d-flex.flex-column.align-items-start
                  input.border-dark.form-control.w-95.rounded-0(type="text" v-model="contactInfo.name")
                  p.mb-0.text-danger.text-right.fz14(v-if="contactInfo.name === '' && emptyInput.indexOf(0) > -1") 此欄位必填
              .d-flex.mb-3
                .col-3.px-0.d-flex.align-items-center
                  p.mb-0 電話
                .col-10.px-0.d-flex.flex-column.align-items-start
                  input.border-dark.form-control.w-95.rounded-0(type="text" v-model="contactInfo.phone")
                  p.mb-0.text-danger.text-right.fz14(v-if="contactInfo.phone === '' && emptyInput.indexOf(1) > -1") 此欄位必填
              .d-flex.mb-3
                .col-3.px-0.d-flex.align-items-center
                  p.mb-0 Email
                .col-10.px-0.d-flex.flex-column.align-items-start
                  input.border-dark.form-control.w-95.rounded-0(type="text" v-model="contactInfo.email")
                  p.mb-0.text-danger.text-right.fz14(v-if="contactInfo.email === '' && emptyInput.indexOf(2) > -1") 此欄位必填
              .d-flex.mb-3
                .col-3.px-0.d-flex.align-items-center
                  p.mb-0 您的留言
                .col-10.px-0.d-flex.flex-column.align-items-start
                 textarea(cols="30" rows="10" v-model="contactInfo.message").form-control.w-95.border-dark.rounded-0
                 p.mb-0.text-danger.text-right.fz14(v-if="contactInfo.message === '' && emptyInput.indexOf(3) > -1") 此欄位必填
              .d-flex
                img.ml-auto.captchaImg(:src="verifyImg")
              .d-flex.my-3.align-items-center
                .col-3.px-0.d-flex.align-items-center
                  p.mb-0 輸入驗證碼
                .col-10.px-0.d-flex.flex-column.align-items-start
                  input(type="text" v-model="verifyCode").form-control.border-dark.w-95.rounded-0
              .d-flex.justify-content-end
                button.btn.btn-primary.font-weight-bold.btnInPage.px-0.py-0.text-decoration-none.rounded-0.mt-3(@click="getImage") 重產驗證碼
              .d-flex.justify-content-end
                button.btn.btn-primary.font-weight-bold.btnInPage.pr-0.py-0.my-3.text-decoration-none.rounded-0(@click="captcha") 確認送出 <i class="fas fa-chevron-right fa-xs"></i>

</template>

<script>
import {mapActions} from 'vuex'
import { createHelpers } from 'vuex-map-fields'
import alert from '../alert'
const { mapFields } = createHelpers({
  getterType: 'contactusModules/getField',
  mutationType: 'contactusModules/updateField'
})
export default {
  components: {
    alert
  },
  data () {
    return {
      active: ''
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
  .serviceContent{
    margin-bottom: 200px;
  }
  .link{
    cursor: pointer;
    color: black;
    &:hover{
      color:#5c87a6;
    }
  }
  @media(max-width: 640px){
    .desktop{
      display:none;
    }
  }
  @media(min-width: 640px){
    .mobile{
      display: none;
    }
  }
  .card-header{
    background: white;
    border-color: black;
  }
  .card{
    border-color: black;
    border-radius: 0;
  }
  .card-body{
    border-color: black;
  }
  // 內容
  .title{
    font-size: 24px;
    font-weight: bold;
    font-family: "Noto Serif TC",serif;
  }
  .col-3,.col-10{
    p{
      font-size: 14px;
    }
  }
  hr{
    border-color: black;
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
  .captchaImg{
    margin-right: -14px;
  }
</style>
