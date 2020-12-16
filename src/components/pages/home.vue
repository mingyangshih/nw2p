<template lang="pug">
.home
  .container-fluid
    .row.px-0
      .col-sm-12.px-0
        homeSwiper(:viewportWidth="fullWidth")
        //- img.w-100.firstBanner.img-fluid.deskTop(src="../../assets/img/home/banner.jpg")
        //- img.w-100.firstBanner.img-fluid.mobile(src="../../assets/img/home/banner_mobile.jpg")
    //- 第一層產品TITLE
    .row.letPhotoForever
      .col-sm-12.px-0.text-center
        h2.font-weight-bold.text-secondary.eachTitle 一個理由，讓照片永存
        p.eachSecondTitle.px-2 將照片留在記錄中，讓它成為你的重要“故事”。
  //- 首頁第一層產品介紹
  .container.letPhotoForeverProduct
    .row.justify-content-center
      .col-6.col-md-4.text-center.mb-md-3(v-for="item in getIndexData")
        .card.rounded-0
          .imgBox
            router-link(:to="`/standard/${item.productId}`")
              img.card-img-top.rounded-0(:src='$store.state.imgPath+item.productAlbum' :alt='item.productName')
          .card-body
            h5.card-title.text-secondary {{item.productName}}
  .container-fluid.bg-gray.secondBannerBox
    .row
      .col-md-6.px-0.secondBanner
        img(src="../../assets/img/home/Experience_1.jpg")
      .col-md-6.px-0.secondBannerDesBox
        .secondBannerDes.py-5.px-md-4
          p.mb-0.title.text-primary.font-weight-bold 只需簡單的步驟，
          p.mb-30.title.text-primary.font-weight-bold 完成您不簡單的作品
          .glasses.stepDesBox
            div.text-dark.d-flex.align-items-center
              p.border.border-primary.num.mb-0.d-flex.justify-content-center.align-items-center.font-weight-bold.text-primary 1
              p.mb-0.step.font-weight-bold.text-primary 選擇產品
            div.stepDes.text-white
              p.text-white.stepDesContent.text-dark 我們提供多樣的客製化商品，您的回憶值得更有溫度的保存。
            div.text-dark.d-flex.align-items-center
              p.border.border-primary.num.mb-0.d-flex.justify-content-center.align-items-center.font-weight-bold.text-primary 2
              p.mb-0.step.font-weight-bold.text-primary 上傳照片
            div.stepDes.text-white.stepDesContent
              p.text-white.text-dark 您的回憶有比電腦硬碟更好的去處，交給我們，讓它成為您生活的一部分。
            div.text-dark.d-flex.align-items-center
              p.border.border-primary.num.mb-0.d-flex.justify-content-center.align-items-center.font-weight-bold.text-primary 3
              p.mb-0.step.font-weight-bold.text-primary 編輯完成
            div.stepDes.text-white.stepDesContent
              p.text-white.text-dark 我們的編輯器提供您完美、自由的操作體驗，只有您才能決定您生活的風格。
            .d-flex.try
              router-link(to="/standard/14").btn.btn-primary.btnInPage.py-0.pr-0.text-decoration-none <span class="font-weight-bold">馬上體驗</span> <i class="fas fa-chevron-right fa-xs"></i>
  .container-fluid
    .row.aChance
      h2.eachTitle.text-center.font-weight-bold.w-100 一個機會，讓生活獨特
      p.text-center.w-100.eachSecondTitle.px-2 裝飾你的重要時刻，讓你的日常生活更加快樂
  .container.aChanceBox
    .row.justify-content-center
      .col-sm-6.mb-30(v-for="itm in getHomeCategoryData" :key="itm.categoryId")
        router-link.aChanceInsideBox.d-block(:to="itm.linkUrl" v-if="itm.isLink === 'S'")
          .w-40.wordBox.d-flex.flex-column.align-items-center.justify-content-center.h-100
            p.wordBoxTitle.text-dark {{itm.categoryName}}
            P.wordBoxTitleEn.text-dark {{itm.categoryEName}}
            p.font-weight-bold.standard.text-dark.mb-0(v-for="item in totalProduct" v-if="item.categoryId === itm.categoryId") {{item.productName}}
          img(:src="itm.categoryImg").w-100
        router-link.aChanceInsideBox.d-block(:to="`/productDetail/${itm.categoryId}`" v-if="itm.isLink === 'A'" )
          .w-40.wordBox.d-flex.flex-column.align-items-center.justify-content-center.h-100
            p.wordBoxTitle.text-dark {{itm.categoryName}}
            P.wordBoxTitleEn.text-dark {{itm.categoryEName}}
            p.font-weight-bold.standard.text-dark.mb-0(v-for="item in totalProduct" v-if="item.categoryId === itm.categoryId") {{item.productName}}
          img(:src="itm.categoryImg").w-100
        //- router-link.aChanceInsideBox.d-block(v-if="itm.isLink !== 'Y'" :to="`/standard/${itm.isLink}`")
        //-   .w-40.wordBox.d-flex.flex-column.align-items-center.justify-content-center.h-100
        //-     p.wordBoxTitle.text-dark {{itm.categoryName}}
        //-     P.wordBoxTitleEn.text-dark {{itm.categoryEName}}
        //-     p.font-weight-bold.standard.text-dark.mb-0(v-for="item in totalProduct" v-if="item.categoryId === itm.categoryId") {{item.productName}}
        //-   img(:src="itm.categoryImg").w-100
  .container.px-0
    .row.justify-content-center.w-100.mx-auto.px-0
      h2.eachTitle.text-center.font-weight-bold.w-100 全新的線上編輯器
      p.text-center.w-100.eachSecondTitle.px-2.mb-0 從電腦到手機，讓你隨時隨地編輯都便利
      .bgSetting
        img.mb-30.newEditor(src="../../assets/img/home/3c.jpg")
</template>

<script>
import footerComponent from '../footer.vue'
import copyright from '../copyright'
import navbarhead from '../navbarhead'
import navCustomize from '../navCustomize'
import loginmodal from '../../components/loginmodal'
import enrollmodal from '../../components/enrollmodal'
import homeSwiper from '../../components/homeSwiper'

import {mapState} from 'vuex'
export default {
  components: {
    footerComponent,
    copyright,
    navbarhead,
    loginmodal,
    enrollmodal,
    navCustomize,
    homeSwiper
  },
  data () {
    return {
      showPassword: 'password',
      fullWidth: document.body.clientWidth
    }
  },
  async created () {
    this.$store.commit('sideBarShowEvent', false)
    await this.$store.dispatch('getIndex')
    await this.$store.dispatch('getHomeCategory')
  },
  computed: {
    ...mapState({
      // 取得一個理由下方的資料
      getIndexData: state => state.homeModules.getIndexData,
      getHomeCategoryData: state => state.homeModules.getHomeCategoryData,
      // 從nav 取total product
      totalProduct: state => state.navbarModules.totalProduct
    })
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
    }
  }
}
</script>

<style lang="scss" scoped>
$s14: 14px;
$s20: 20px;
$serif: 'Noto Serif TC', serif;
.eachTitle{
  font-family: $serif;
  letter-spacing: 1px;
  font-size: 24px;
}
.eachSecondTitle{
  font-size: 20px;
}
.home{
  width:100%;
  overflow-x: hidden;
}
.fz14{
  font-size:$s14;
}
// 最上方促銷活動
.campaign{
  font-size: $s20;
  max-width: 100vw;
}
.campaignBox{
  height: 60px;
  box-sizing: border-box;
  color:white;
}
@media(max-width: 640px) {
 .campaign{
   font-size: 5vw;
 }
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
  img.deskTop{
    display: none;
  }
  .firstBanner{
    height: auto;
  }
}
@media(min-width: 640px){
  img.mobile{
    display: none;
  }
}
@media(width: 640px){
  img.mobile{
    display: initial;
  }
}
// 讓照片永存
.letPhotoForever{
  padding-top: 40px;
  padding-bottom: 40px;
}
.letPhotoForeverProduct{
  padding-bottom: 40px;
  box-sizing: border-box;
}
@media(max-width: 640px){
  .letPhotoForeverProduct{
    padding-bottom: 0;
  }
}
.card{
  max-height: 424px;
  max-width: 360px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover{
    .imgBox,.card-body{
      opacity: .5;
    }
  }
}
@media(max-width:640px){
  .card{
    margin-bottom: 46px;
  }
}

// 讓照片永存  相片下方  白色部分
.card-body{
  height: 64px;
  box-sizing: border-box;
  h5{
    margin-bottom: 0;
  }
}
@media(max-width: 640px){
  .card-body{
    height: 40px;
    padding:10px 0;
    font-size: 24px;
    h5{
      display: flex;
      align-items:center;
      justify-content: center;
      height: 100%;
      font-size: .6em;
    }
  }
}

// 讓照片永存 相片部分
.imgBox{
  max-height: 360px;
  max-width: 360px;
  overflow: hidden;
  img{
    max-width: 360px;
    max-height: 360px;
    transform:scale(1,1);
    // transition: all .5s ease-out;
    // &:hover{
    //   opacity: .5;
    // }
  }
}
// 讓照片永存，手機般相片間距
@media(max-width: 640px){
  .col-6:nth-child(2n){
  padding: 0 15px 0 5px;
}
  .col-6:nth-child(2n + 1){
    padding: 0 5px 0 15px;
  }
}

// 調整讓照片永存的container 設定
@media(max-width: 640px){
  .container{
    max-width: 100%;
  }
}

// second banner
.secondBanner{
  img{
    max-height: 600px;
  }
}
@media(max-width: 640px){
  .secondBanner{
    img{
      max-height: 480px;
    }
    height: 480px;
    order:2;
  }
  .secondBannerDesBox{
    order:1;
    max-height: 676px;
    .try{
      justify-content: center;
    }
  }
}
.secondBannerDes{
  box-sizing: border-box;
  display:flex;
  flex-direction: column;
  justify-content: center;
  // height: 600px;
  .title{
    font-size: 32px;
    font-family: $serif;
    letter-spacing: 1px;
  }
  .num{
    width: $s20;
    height: $s20;
    border-radius: 50%;
    display: block;
    font-size: 18px;
    line-height: 18px;
    margin-right: 16px;
  }
  .step{
    font-size: $s20;
  }
  .stepDes{
    margin-left: 36px;
    font-weight:bold;
  }
}
@media(min-width:640px){
  .secondBannerDes{
    height: 600px;
  }
}
@media(max-width: 640px){
  .secondBannerDes{
    box-sizing: border-box;
    padding:16px;
    max-height: 600px;
    .title{
      text-align: center;
      font-size: 6vw;
    }
  }
}
@media(max-width:690px){
  .secondBannerDes{
    .title{
      font-size: 23px;
    }
  }
}
// 一個機會，讓生活獨特
.aChance{
  padding-top: 50px;
  padding-bottom: 40px;
  box-sizing: border-box;
}
.aChanceBox{
  .aChanceInsideBox{
    position:relative;
    .wordBox{
      position: absolute;
      top:0;
      left:0;
      z-index: 100;
      &:hover{
        background: rgba(255,255,255,.4);
      }
      .wordBoxTitle{
        font-size: 20px;
        font-weight: bold;
      }
      .wordBoxTitleEn{
        font-size: 14px;
      }
      .standard{
        font-size:14px;
      }
    }
    img{
      z-index: 1;
      max-width:650px;
    }
  }
}
@media(max-width: 640px) {
  .aChanceBox{
    .aChanceInsideBox{
      .wordBox{
        .wordBoxTitle{
          font-size: 4vw;
          font-weight: bold;
        }
        .wordBoxTitleEn{
          font-size: 2vw;
        }
        .standard{
          font-size:2vw;
        }
      }
    }
  }
}

// 第二個banner產品介紹樣式設定
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
  align-items: center;
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
// new editor 圖片
.bgSetting{
  max-width:800px;
  height:auto;
  box-sizing: border-box;
  display: flex;
  align-items:center;
  justify-content: center;
  img.newEditor{
    width: 90%;
    height: auto;
  }
}
@media(max-width:640px){
  img.newEditor{
    max-width: 90%;
    height: auto;
  }
}
// footer style
.footer{
  background-color : #f4f4f1;
  position: relative;
  margin-top: 50px;
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
@media(max-width: 640px){
  .btnInPage{
    // width: 332px;
    padding-left: 0;
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
