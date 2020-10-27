<template lang="pug">
  .serviceContent.mt-30
    alert
    //- 桌機看到的樣子
    .container
      .row
        .col-md-2.desktop
          .d-flex.flex-column
            //- p.d-flex.justify-content-between.align-items-center 關於會員 <i class="fas fa-chevron-right"></i>
            router-link(to="/serviceContent" :class="{'text-primary': active === '編輯教學'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '編輯教學'">編輯教學</span> <i class="fas fa-chevron-right"></i>
            router-link(to="/serviceContent/aboutMember" :class="{'text-primary': active === '關於會員'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '關於會員'">關於會員</span> <i class="fas fa-chevron-right"></i>
            router-link(to="/serviceContent/workslayout" :class="{'text-primary': active === '作品編排'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '作品編排'">作品編排須知</span> <i class="fas fa-chevron-right"></i>
            router-link(to="/serviceContent/buyAndTake" :class="{'text-primary': active === '訂購與取貨'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '訂購與取貨'">訂購與取貨</span> <i class="fas fa-chevron-right"></i>
            router-link(to="/serviceContent/invoiceAndSaledService" :class="{'text-primary': active === '發票與售後服務'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '發票與售後服務'">發票與售後服務</span> <i class="fas fa-chevron-right"></i>
            router-link(to="/serviceContent/contactus" :class="{'text-primary': active === '客服信箱'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '客服信箱'">客服信箱</span> <i class="fas fa-chevron-right"></i>
        //- mobile
        .col-md-2.mobile
          .d-flex.flex-column
            .mb-3.d-flex.justify-content-between.align-items-cetner(v-if="serviceContentDrop === '#/serviceContent'" @click="showDropDown = !showDropDown;") 編輯教學 <i class="fas fa-chevron-down" v-if="!showDropDown"></i> <i class="fas fa-chevron-up" v-if="showDropDown"></i>
            .mb-3.d-flex.justify-content-between.align-items-cetner(v-if="serviceContentDrop === '#/serviceContent/aboutMember'" @click="showDropDown = !showDropDown") 關於會員 <i class="fas fa-chevron-down"  v-if="!showDropDown"></i> <i class="fas fa-chevron-up" v-if="showDropDown"></i>
            .mb-3.d-flex.justify-content-between.align-items-cetner(v-if="serviceContentDrop === '#/serviceContent/workslayout'" @click="showDropDown = !showDropDown") 作品編排須知 <i class="fas fa-chevron-down"  v-if="!showDropDown"></i> <i class="fas fa-chevron-up" v-if="showDropDown"></i>
            .mb-3.d-flex.justify-content-between.align-items-cetner(v-if="serviceContentDrop === '#/serviceContent/buyAndTake'" @click="showDropDown = !showDropDown") 訂購與取貨 <i class="fas fa-chevron-down"  v-if="!showDropDown"></i> <i class="fas fa-chevron-up" v-if="showDropDown"></i>
            .mb-3.d-flex.justify-content-between.align-items-cetner(v-if="serviceContentDrop === '#/serviceContent/invoiceAndSaledService'" @click="showDropDown = !showDropDown") 發票與售後服務 <i class="fas fa-chevron-down"  v-if="!showDropDown"></i> <i class="fas fa-chevron-up" v-if="showDropDown"></i>
            .mb-3.d-flex.justify-content-between.align-items-cetner(v-if="serviceContentDrop === '#/serviceContent/contactus'" @click="showDropDown = !showDropDown") 客服信箱 <i class="fas fa-chevron-down"  v-if="!showDropDown"></i> <i class="fas fa-chevron-up" v-if="showDropDown"></i>
          //- 非桌機板下拉選項
          .d-flex.flex-column.dropDown.border-bottom.mb-3(:class="{'show':showDropDown}" style="boder-color:rgba(0,0,0,0.5)")
            div(@click="$router.push('/serviceContent'); showDropDown = !showDropDown; $store.state.serviceContentDrop = '#/serviceContent' " v-if="showDropDown" :class="{'text-dark' : serviceContentDrop === '#/serviceContent', 'text-gray': serviceContentDrop !== '#/serviceContent'}").mb-3.d-flex.justify-content-between.align-items-center.link <span @click="active= '編輯教學'">編輯教學</span>
            div(@click="$router.push('/serviceContent/aboutMember'); showDropDown = !showDropDown; $store.state.serviceContentDrop = '#/serviceContent/aboutMember'" v-if="showDropDown" :class="{'text-dark' : serviceContentDrop === '#/serviceContent/aboutMember', 'text-gray': serviceContentDrop !== '#/serviceContent/aboutMember'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '關於會員'">關於會員</span>
            div(@click="$router.push('/serviceContent/workslayout'); showDropDown = !showDropDown; $store.state.serviceContentDrop = '#/serviceContent/workslayout'" v-if="showDropDown" :class="{'text-dark' : serviceContentDrop === '#/serviceContent/workslayout', 'text-gray': serviceContentDrop !== '#/serviceContent/workslayout'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '作品編排'">作品編排須知</span>
            div(@click="$router.push('/serviceContent/buyAndTake'); showDropDown = !showDropDown; $store.state.serviceContentDrop = '#/serviceContent/buyAndTake'" v-if="showDropDown" :class="{'text-dark' : serviceContentDrop === '#/serviceContent/buyAndTake', 'text-gray': serviceContentDrop !== '#/serviceContent/buyAndTake'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '訂購與取貨'">訂購與取貨</span>
            div(@click="$router.push('/serviceContent/invoiceAndSaledService'); showDropDown = !showDropDown; $store.state.serviceContentDrop = '#/serviceContent/invoiceAndSaledService'" v-if="showDropDown" :class="{'text-dark' : serviceContentDrop === '#/serviceContent/invoiceAndSaledService', 'text-gray': serviceContentDrop !== '#/serviceContent/invoiceAndSaledService'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '發票與售後服務'">發票與售後服務</span>
            div(@click="$router.push('/serviceContent/contactus'); showDropDown = !showDropDown; $store.state.serviceContentDrop = '#/serviceContent/contactus'" v-if="showDropDown" :class="{'text-dark' : serviceContentDrop === '#/serviceContent/contactus', 'text-gray': serviceContentDrop !== '#/serviceContent/contactus'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '客服信箱'">客服信箱</span>
        .col-md-10
          router-view

</template>

<script>
import {mapActions, mapState} from 'vuex'
import { createHelpers } from 'vuex-map-fields'
import alert from '../alert'
import teachEdit from '../teachEdit'
import aboutMember from '../aboutMember'
const { mapFields } = createHelpers({
  getterType: 'contactusModules/getField',
  mutationType: 'contactusModules/updateField'
})
export default {
  components: {
    alert,
    aboutMember,
    teachEdit
  },
  data () {
    return {
      active: '',
      location: '',
      showDropDown: false
    }
  },
  methods: {
    ...mapActions('contactusModules', [
      'contactus', 'getImage'
    ])
  },
  computed: {
    ...mapFields(['contactInfo', 'emptyInput', 'verifyImg', 'code', 'verifyCode']),
    ...mapState({
      serviceContentDrop: state => state.serviceContentDrop
    })
  },
  created () {
    this.$store.commit('contactusModules/clearContactInfo')
    this.$store.dispatch('contactusModules/getImage')
    this.location = window.location.hash
  },
  mounted () {
    let vm = this
    vm.location = window.location.hash
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
    .mobile{
      display: initial;
    }
  }
  @media(min-width: 640px){
    .mobile{
      display: none;
    }
  }
  // 自幹下拉
  .dropDown{
    height: 0px;
    &.show{
      height: auto;
    }
  }
  //
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
  // 每個下拉
  .destitle{
    line-height: 18px;
    display: block;
    cursor: pointer;
    // &:hover{
    //   border-bottom: 1px solid black;
    // }
  }
  .plus{
    width: 20px;
    height: 20px;
    background: rgba(0,0,0,.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    line-height: 16px;
    &:hover{
      background: #000;
    }
  }
  .minus{
    width: 20px;
    height: 20px;
    background: black;
    display: none;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    line-height: 16px;
  }
  input:checked ~ .labelContent > .plus{
    display: none;
  }
  input:checked ~ .labelContent > .minus{
    display: flex;
  }
  .indent{
    display: none;
    // margin-left: 1.6rem;
    // text-indent: -1.6rem;
    margin-top: 24px;
  }
  input[type="checkbox"]:checked ~ .indent{
    display: initial;
    margin-top: 24px;
  }
  input ~ .imgBox{
    display: none;
  }
  input:checked ~ .imgBox{
    max-width: 100%;
    display: initial;
  }
  input ~ .imgBox > img{
    display: none;
  }
  input:checked ~ .imgBox > img{
    display: initial;
    max-width:100%;
  }
</style>
