<template lang="pug">
  .productDetail
    .container-fluid
      .row.px-0.campaign.campaignBox.bg-primary(v-if="fullWidth >= 640")
        p.mb-0.w-100.campaignDes 全商品8折優惠 / 20% OFF．滿499免運費
      //- navbar
    .container
      navbarhead(:viewportWidth="fullWidth")
    .container-fluid
      .row.px-0.campaign.campaignBox.bg-primary(v-if="fullWidth < 640")
        p.mb-0.w-100.campaignDes 全商品8折優惠 / 20% OFF．滿499免運費
      //- banner
      .row.px-0
        .col-sm-12.px-0
          img.w-100.firstBanner.img-fluid(src="../../assets/img/productDetail/banner.jpg" v-if="fullWidth >= 640")
          img.w-100.firstBanner.img-fluid(src="../../assets/img/productDetail/banner_mobile.jpg" v-if="fullWidth < 640")
      //- 裝訂方式
      .row.bookBinding
        .col-sm-12.px-0.text-center
          h2.font-weight-bold.mb-0.text-secondary 隨心所欲選擇您要的裝訂方式
    //- 不同的裝訂方式
    .container.bookBindingProduct
      .row.justify-content-center
        .col-6.col-md-3.text-center
          .card.rounded-0
            .imgBox
              router-link(to="/standard/14")
                img.card-img-top.rounded-0(src="../../assets/img/productDetail/a01.jpg")
            .card-body
              h5.card-title.text-secondary 平裝相片書
        .col-6.col-md-3.text-center
          .card.rounded-0
            .imgBox
              img.card-img-top.rounded-0(src="../../assets/img/productDetail/a01.jpg")
            .card-body
              h5.card-title.text-secondary 精裝相片書
        .col-6.col-md-3.text-center
          .card.rounded-0
            .imgBox
              img.card-img-top.rounded-0(src="../../assets/img/productDetail/a01.jpg")
            .card-body
              h5.card-title.text-secondary 薄蝴蝶裝相片書
        .col-6.col-md-3.text-center
          .card.rounded-0
            .imgBox
              img.card-img-top.rounded-0(src="../../assets/img/productDetail/a01.jpg")
            .card-body
              h5.card-title.text-secondary 厚蝴蝶裝裝相片書
    .container-fluid.bg-gray.secondBannerBox
      .row
        .col-md-6.secondBannerDesBox
          .secondBannerDes
            p.title.text-primary.font-weight-bold.mb-md-4 編輯作品比您想得更容易
            p 吻合各種螢幕大小的編輯空間，提供您穩定的編輯流程和隨心所欲的設計方式，我們已經可以預見您收到作品時的笑容。
            .d-flex.try.mb-3
              button.btn.btn-primary.btnInPage.py-0.pr-0 <span class="font-weight-bold">馬上體驗</span> <i class="fas fa-chevron-right fa-xs"></i>
        .col-md-6.px-0.secondBanner
          img(src="../../assets/img/productDetail/b01.jpg")
    .container-fluid
      .row.satisfyAllNeeds
        h2.title.text-center.font-weight-bold.w-100.mb-0 滿足您所有場景的需求
    .container-fluid.specialEffectleft.my-5
      .row.justify-content-center
        .col-md-7.standard.bgSetting
          img(src="../../assets/img/productDetail//c01.jpg")
        .col-md-4
          .under_second_banner_des_box_right
            .glasses
              p.font-weight-bold.text-dark.under_secondbanner_des_title(:class="{'text-center':fullWidth <= 640}") 平裝相片書
              p.under_secondbanner_des(v-if="fullWidth > 640") 輕薄好攜帶是平裝相片書最大的優勢，作為一份自己珍藏或是送給家人、朋友的禮物，精巧而不顯得過於貴重。些微反光但不沾指紋的光澤，保有了傳統相紙的豔麗，消除了收藏上的缺點。只有這樣的好質感，才襯得出您的珍貴。
              .d-flex.try.mb-3
                button.btn.btn-primary.btnInPage.py-0.pr-0 <span class="font-weight-bold">馬上體驗</span> <i class="fas fa-chevron-right fa-xs"></i>
    .container-fluid.my-5.specialEffectRight
      .row.justify-content-center
        .col-md-4
          .under_second_banner_des_box_left
            .glasses
              p.font-weight-bold.text-dark.under_secondbanner_des_title(:class="{'text-center':fullWidth <= 640}") 精裝相片書
              p.under_secondbanner_des(v-if="fullWidth > 640") 輕薄好攜帶是平裝相片書最大的優勢，作為一份自己珍藏或是送給家人、朋友的禮物，精巧而不顯得過於貴重。些微反光但不沾指紋的光澤，保有了傳統相紙的豔麗，消除了收藏上的缺點。只有這樣的好質感，才襯得出您的珍貴。
              .d-flex.try.mb-3
                button.btn.btn-primary.btnInPage.py-0.pr-0 <span class="font-weight-bold">馬上體驗</span> <i class="fas fa-chevron-right fa-xs"></i>
        .col-md-7.standard.bgSetting
          img(src="../../assets/img/productDetail//c01.jpg")
    .container-fluid.specialEffectleft.my-5
      .row.justify-content-center
        .col-md-7.standard.bgSetting
          img(src="../../assets/img/productDetail//c01.jpg")
        .col-md-4
          .under_second_banner_des_box_right
            .glasses
              p.font-weight-bold.text-dark.under_secondbanner_des_title(:class="{'text-center':fullWidth <= 640}") 薄蝴蝶裝相片書
              p.under_secondbanner_des(v-if="fullWidth > 640") 輕薄好攜帶是平裝相片書最大的優勢，作為一份自己珍藏或是送給家人、朋友的禮物，精巧而不顯得過於貴重。些微反光但不沾指紋的光澤，保有了傳統相紙的豔麗，消除了收藏上的缺點。只有這樣的好質感，才襯得出您的珍貴。
              .d-flex.try.mb-3
                button.btn.btn-primary.btnInPage.py-0.pr-0 <span class="font-weight-bold">馬上體驗</span> <i class="fas fa-chevron-right fa-xs"></i>
    .container-fluid.my-5.specialEffectRight
      .row.justify-content-center
        .col-md-4
          .under_second_banner_des_box_left
            .glasses
              p.font-weight-bold.text-dark.under_secondbanner_des_title(:class="{'text-center':fullWidth <= 640}") 厚蝴蝶裝裝相片書
              p.under_secondbanner_des(v-if="fullWidth > 640") 輕薄好攜帶是平裝相片書最大的優勢，作為一份自己珍藏或是送給家人、朋友的禮物，精巧而不顯得過於貴重。些微反光但不沾指紋的光澤，保有了傳統相紙的豔麗，消除了收藏上的缺點。只有這樣的好質感，才襯得出您的珍貴。
              .d-flex.try.mb-3
                button.btn.btn-primary.btnInPage.py-0.pr-0 <span class="font-weight-bold">馬上體驗</span> <i class="fas fa-chevron-right fa-xs"></i>
        .col-md-7.standard.bgSetting
          img(src="../../assets/img/productDetail//c01.jpg")
    .border-top.mt-30.footer.container-fluid.px-0
      footerComponent(:viewportWidth="fullWidth")
    copyright(:viewportWidth="fullWidth")
    loginmodal
    enrollmodal
</template>

<script>
import navbarhead from '../navbarhead'
import footerComponent from '../footer.vue'
import copyright from '../copyright'
import loginmodal from '../../components/loginmodal'
import enrollmodal from '../../components/enrollmodal'
import {scroll} from '../../assets/scroll'
export default {
  components: {
    navbarhead,
    copyright,
    footerComponent,
    loginmodal,
    enrollmodal
  },
  data () {
    return {
      fullWidth: document.body.clientWidth
    }
  },
  mixins: [scroll],
  mounted () {
    const vm = this
    // const {elem: elemleft, distance: distanceleft} = vm.scroll('specialEffectleft')
    // const {elem: elemright, distance: distanceright} = vm.scroll('specialEffectRight')
    // // inner viewport height
    // const IVPH = window.innerHeight
    // window.addEventListener('scroll', function (e) {
    //   e.stopPropagation()
    //   distanceleft.forEach(function (item, idx) {
    //     const checkClassName = elemleft[idx].classList.contains('specialEffectShow')
    //     if (item - window.scrollY <= IVPH / 4 && !checkClassName) elemleft[idx].classList.add('specialEffectShow')
    //   })
    //   distanceright.forEach(function (item, idx) {
    //     const checkClassName = elemright[idx].classList.contains('specialEffectShow')
    //     if (item - window.scrollY <= IVPH / 4 && !checkClassName) elemright[idx].classList.add('specialEffectShow')
    //   })
    // })
    // resize 事件
    window.onresize = () => {
      return (() => {
        vm.fullWidth = document.documentElement.clientWidth
      })()
    }
  },
  watch: {
    // val 為改變的值
    fullWidth (val) {
      this.fullWidth = val
    }
  }
}
</script>

<style lang="scss" scoped>
  $s14: 14px;
  $s20: 20px;
  $serif: 'Noto Serif TC', serif;
  .productDetail{
    width: 100%;
    overflow-x: hidden;
  }
  // 上方促銷活動樣式
  .campaign{
    font-size: $s20;
    font-weight: bold;
    max-width: 1920px;
  }
  @media(max-width: 640px) {
    .campaign{
      font-size: 5vw;
    }
  }
  .campaignBox{
    height: 60px;
    box-sizing: border-box;
    color:white;
  }
  .campaignDes{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  // first banner
  .firstBanner{
    width: 100%;
    max-height: 700px;
    height: auto;
    position: relative;
    z-index: 0;
  }
  @media(max-width: 640px){
    .firstBanner{
      height: auto;
    }
  }
  // 裝訂方式
  .bookBinding{
    padding-top: 40px;
    padding-bottom: 40px;
    h2{
      font-family: $serif;
      letter-spacing: 1px;
      font-size: 24px;
    }
  }
  .bookBindingProduct{
    padding-bottom: 40px;
    box-sizing: border-box;
  }
  @media(max-width: 640px){
    .bookBindingProduct{
      padding-bottom: 0;
    }
    .bookBinding{
      h2{
        font-size: 6vw;
      }
    }
  }
  .card{
    max-height: 330px;
    max-width: 258px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover{
      .imgBox, .card-body{
        opacity: .5;
      }
    }
  }
  @media(max-width: 640px){
    .card{
      margin-bottom: 46px;
    }
  }
  // 裝訂方式 下方白色部分
  .card-body{
    height: 62px;
    box-sizing: border-box;
    h5{
      margin-bottom: 0;
    }
  }
  @media(max-width: 1024px){
    .card-body{
      height: 40px;
      padding:10px 0;
      font-size: 24px;
    }
    h5{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-size: 0.6em;
    }
  }
  // 裝訂方式 相片部分
  .imgBox{
    max-height: 258px;
    max-width: 258px;
    overflow:hidden;
    img{
      max-width: 258px;
      max-height: 258px;
      transform:scale(1,1);
    }
  }
  // 裝訂方式，手機版相片間距
  @media(max-width: 640px){
    .col-6:nth-child(2n){
    padding: 0 15px 0 5px;
  }
    .col-6:nth-child(2n + 1){
      padding: 0 5px 0 15px;
    }
  }
  // second banner
  .secondBanner{
    max-height: 600px;
    img{
      width:100%;
      max-width:100%;
      height: auto;
    }

  }
  @media(max-width: 640px){
    .secondBannerDesBox{
      max-height: 676px;
    }
  }
  .secondBannerDesBox{
    display: flex;
    justify-content: center;
  }
  @media(max-width: 640px){
    .secondBannerDesBox{
      padding: 30px 15px;
    }
  }
  .secondBannerDes{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    min-width: 45%;
    .title{
      font-size: 32px;
      font-family: $serif;
      letter-spacing: 1px;
      margin-top: 12px;
    }
    p:nth-child(2){
      margin-bottom: 80px;
    }
  }
  @media(max-width: 1024px){
    .secondBannerDes{
      box-sizing: border-box;
      padding:0 0;
      max-height: 600px;
      width: 100%;
      .title{
        text-align: center;
        font-size: 5vw;
        margin-bottom: 12px;
      }
      p:nth-child(2){
        margin-bottom: 12px;
      }
    }
  }
  @media(max-width:1024px){
  .secondBannerDes{
      .title{
        font-size: 23px;
      }
    }
  }
  .satisfyAllNeeds{
    padding-top: 40px;
    // padding-bottom: 40px;
    box-sizing: border-box;
    .title{
      font-family: $serif;
      font-size: 24px;
      letter-spacing: 1px;
    }
  }
  // 第二個banner下方產品介紹樣式設定
  .under_secondbanner_des_title{
    font-size: 27px;
    word-break: keep-all;
  }
  @media(max-width:667px){
    .under_secondbanner_des_title{
      // font-size: 4vw;
      margin-bottom: 0;
      font-size: 20px;
    }
  }
  @media(max-width:640px){
    .under_secondbanner_des_title{
      margin-top: 12px;
    }
  }
  .under_secondbanner_des{
    font-size: 17px;
  }
  // 第二個banner產品--左邊圖片--樣式設定
  .under_second_banner_des_box_right{
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    // margin-left: 40px;
  }
  @media(max-width:640px){
    .under_second_banner_des_box_right{
      margin-left: 0;
    }
  }
  // 第二個banner產品--右邊圖片--樣式設定
  .under_second_banner_des_box_left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
    align-items: flex-end;
    // margin-right: 60px;
  }
  @media (min-width: 640px){
    .col-md-4 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 33.33333%;
      flex: 0 0 33.33333%;
      max-width: none;
    }
  }
  @media(max-width: 640px){
    .under_second_banner_des_box_left{
      align-items: center;
    }
  }
  // 背景圖片樣式設定
  .bgSetting{
    max-width: 880px;
    height: auto;
    box-sizing: border-box;
    img{
      width: 100%;
      height: auto;
    }
  }
  @media(max-width: 640px){
    .bgSetting{
      max-width: 580px;
      height: auto;
      img{
        max-width: 100%;
        height: auto;
      }
    }
  }

  // footer style
  .footer{
    background-color : #f4f4f1;
    position: relative;
  }

  // 頁面中的Btn樣式
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
  @media(max-width: 1024px){
    .btnInPage{
      // width: 332px;
      padding-left: 0;
    }
    .try{
      display: flex;
      justify-content: center;
    }
  }
  // 滾動特效
  // .specialEffectleft{
  // transform: translateX(-2000px);
  // transition-property: transform, opacity;
  // transition-duration: 1.2s, 1.7s;
  // transition-timing-function: cubic-bezier(0.32,-0.04, 0.55, 0.71), cubic-bezier(0.05, 0.26, 0.33,-0.2);
  // opacity: 0;
  // overflow: hidden;
  // &.specialEffectShow{
  //   transform: translateX(0);
  //   opacity: 1;
  // }
  // }
  // .specialEffectRight{
  //   transform: translateX(2000px);
  //   transition-property: transform, opacity;
  //   transition-duration: 1.2s, 1.7s;
  //   transition-timing-function: cubic-bezier(0.32,-0.04, 0.55, 0.71), cubic-bezier(0.05, 0.26, 0.33,-0.2);
  //   opacity: 0;
  //   overflow: hidden;
  //   &.specialEffectShow{
  //     transform: translateX(0);
  //     opacity: 1;
  //   }
  // }
  @media(max-width: 640px){
    .specialEffectRight{
      .col-md-4{
        order:2;
      }
      .col-md-7{
        order:1;
      }
    }
  }
</style>
