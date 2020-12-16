<template lang="pug">
  .productDetail
    .container.d-flex.my-3
      router-link(to="/").mb-0.text-gray.text-decoration-none 首頁
      p.mb-0.text-gray.mx-2 /
      p.mb-0(v-if="categoryName") {{categoryName}}
    .container-fluid
      .row.px-0
        .col-sm-12.px-0
          img.w-100.firstBanner.img-fluid(:src="subMenuTotalData[0].categoryBanner" v-if="fullWidth >= 640 && subMenuTotalData")
          img.w-100.firstBanner.img-fluid(:src="subMenuTotalData[0].categoryBannerM" v-if="fullWidth < 640 && subMenuTotalData")
      //- 裝訂方式
      .row.bookBinding
        .col-sm-12.px-0.text-center
          h2.font-weight-bold.mb-0.text-secondary {{categoryBannerText}}
    //- 不同的裝訂方式
    .container.bookBindingProduct
      .row.justify-content-center
        .col-6.col-md-3.text-center.mb-3(v-for = "(itm, idx) in subProducts" :class="{'mr-auto' : subProducts.length >4 && idx == subProducts.length-1}")
          .card.rounded-0
            .imgBox
              router-link(:to="'/standard/' + itm.productId")
                img.card-img-top.rounded-0(:src="itm.subMenuSmallImg")
            .card-body
              h6.card-title.text-secondary {{itm.productName}}
    .container-fluid.bg-gray.secondBannerBox
      .row
        .col-md-6.secondBannerDesBox
          .secondBannerDes
            p.title.text-primary.font-weight-bold.mb-md-4 {{subMenuTotalData[0].categoryBanner1Title}}
            p {{subMenuTotalData[0].categoryBanner1Desc}}
            .d-flex.try.mb-3
              router-link(:to="'/standard/'+productId").btn.btn-primary.btnInPage.py-0.pr-0 <span class="font-weight-bold">馬上體驗</span> <i class="fas fa-chevron-right fa-xs"></i>
        .col-md-6.px-0.secondBanner
          img(:src="subMenuTotalData[0].categoryBanner1")
    .container-fluid
      .row.satisfyAllNeeds
        h2.title.text-center.font-weight-bold.w-100.mb-0 滿足您所有場景的需求
    .container-fluid.specialEffectleft.my-5(v-for = "(itm, idx) in subProducts")
      .row.justify-content-center
        .col-md-7.standard.bgSetting
          img(:src="itm.subMenuBigImg")
        .col-md-4
          .under_second_banner_des_box_right
            .glasses
              p.font-weight-bold.text-dark.under_secondbanner_des_title(:class="{'text-center':fullWidth <= 640}") {{itm.productName}}
              p.under_secondbanner_des(v-if="fullWidth > 640") {{itm.productDesc}}
              .d-flex.try.mb-3
                router-link(:to="'/standard/'+itm.productId").btn.btn-primary.btnInPage.py-0.pr-0 <span class="font-weight-bold">我要製作</span> <i class="fas fa-chevron-right fa-xs"></i>
    //- .border-top.mt-30.footer.container-fluid.px-0
    //-   footerComponent(:viewportWidth="fullWidth")
    //- copyright(:viewportWidth="fullWidth")
</template>

<script>
import navbarhead from '../navbarhead'
import footerComponent from '../footer.vue'
import copyright from '../copyright'
import {mapState} from 'vuex'
export default {
  components: {
    navbarhead,
    copyright,
    footerComponent
  },
  data () {
    return {
      fullWidth: document.body.clientWidth,
      // 馬上體驗
      productId: null
    }
  },
  computed: {
    // productdeatilmodule 取回的資料
    ...mapState({
      subMenuTotalData: state => state.productDetailModules.subMenuTotalData,
      categoryName: state => state.productDetailModules.categoryName,
      subProducts: state => state.productDetailModules.subProducts,
      categoryBannerText: state => state.productDetailModules.categoryBannerText
    })
  },
  async created () {
    const vm = this
    const categoryId = this.$route.params.id
    // 把側邊欄關掉
    vm.$store.commit('sideBarShowEvent', false)
    await vm.$store.dispatch('getSubMenu', {categoryId})
    vm.productId = vm.subProducts[0].productId
  },
  mounted () {
    const vm = this
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
    },
    // navbar 載入同個component 不同id時用這個方法重取資料
    async '$route' (to, from) {
      const vm = this
      const categoryId = to.params.id
      if (to.params.id !== from.params.id) {
        await vm.$store.dispatch('getSubMenu', {categoryId})
        vm.productId = vm.subMenuTotalData[0].productId
      }
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
    h6{
      margin-bottom: 0;
      font-size: 18px;
    }
  }
  @media(max-width: 1024px){
    .card-body{
      height: 40px;
      padding:10px 0;
      font-size: 24px;
    }
    h6{
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
  .specialEffectleft:nth-child(even){
    .col-md-7{
      order:2;
    }
    .col-md-4{
      order:1;
    }
  }
  @media(max-width: 640px){
    .specialEffectleft:nth-child(even){
      .col-md-7{
        order:1;
      }
      .col-md-4{
        order:2;
      }
    }
  }
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
