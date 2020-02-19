<template lang="pug">
  .standard
    .container-fluid
      .row.px-0.campaign.campaignBox.bg-primary(v-if="fullWidth >= 640")
        p.mb-0.w-100.campaignDes 全商品8折優惠 / 20% OFF．滿499免運費
      //- navbar
    .container
      navbarhead(:viewportWidth="fullWidth")
      .row.px-0.campaign.campaignBox.bg-primary(v-if="fullWidth < 640")
        p.mb-0.w-100.campaignDes 全商品8折優惠 / 20% OFF．滿499免運費
    .container
      .row
        .col-md-6
          swiper(:viewportWidth="fullWidth")
        .col-md-6
          p.productTitle(:class="{'text-center':fullWidth <= 640}") 平裝相片書
          p.text-primary.font-weight-bold.secondTitle(:class="{'text-center':fullWidth <= 640}") 選擇裝訂/尺寸
          p.font-weight-bold(:class="{'text-center':fullWidth <= 640}") 尺寸
          .d-flex.align-items-end.mb-3
            .d-flex.flex-column.schematic(v-for="(item,idx) in productSpec" @click.prevent="size = item.specName; specId = idx + 1")
              img(:src="item.specThumbnail")
              span.fz12.w-100.text-center {{item.specName}}
          .d-flex.align-items-center
            label.mb-0(for="pageNumber") 頁數
            select#pageNumber.form-control.w-75.ml-3(v-model="pages" @change="shippingDayChange")
              option(v-for="item in productPages" :value = "item")  {{item}}
          hr
          p.text-primary.font-weight-bold.secondTitle.mb-0 產品資訊
            .row
              .col-4
                  p 尺寸
              .col-8
                p {{size}}
              .col-4
                p 頁數
              .col-8
                p {{pages}}
              .col-4
                p 紙張
              .col-8
                p 特銅200p
              .col-4
                p 翻頁方式
              .col-8
                p 左翻
              .col-4
                p 出貨天數
              .col-8
                p 付款後{{shippingDay}}個工作天寄出
              .col-4
                p 郵寄方式
              .col-8
                p 宅配
          hr.mt-0
          p(:class="{'justify-content-between' : fullWidth > 640, 'flex-column' : fullWidth <= 640, 'align-items-center' : fullWidth <= 640}").text-primary.d-flex.font-weight-bold 周年慶活動，相片全面85折優惠!<span class="fz26">NT$300</span>
          .d-flex.btnBox(:class="{'justify-content-center' : fullWidth <= 640}")
            a(:href="designLink" target="_blank" :class="{'w-100' : fullWidth <= 640}").btn.btn-primary.font-weight-bold.btnInPage.py-0.text-white 開始製作
    .container
      .row.justify-content-center.py-4
        h2.font-weight-bold.mb-0.text-secondary.secondTitle 產品特性
      hr(v-if="fullWidth > 640").mt-0
    .container.specialEffectRight
      .row.justify-content-center
        .col-md-5
          .under_second_banner_des_box_left
            .glasses
              p.font-weight-bold.text-dark.under_secondbanner_des_title(:class="{'mb-3' : fullWidth <= 640}") 裝訂 ‧ 膠裝成冊，一體成型
              p.under_secondbanner_des.mb-0(:class="{'text-justify' : fullWidth <= 640}") 書封完整貼覆內頁，不建議使用跨頁編排方式，避免將重要圖文編排至中央部分。
              p.under_secondbanner_des.mb-0(:class="{'text-justify' : fullWidth <= 640}") 平裝的膠裝方式，無法攤平，會有些許影像為裝訂邊，所以會損失跨頁交接處部分影像，如需完整跨頁影像請選擇蝴蝶裝之裝訂方式。
        .col-md-7.bgSetting
          img(src="../../assets/img/standard/c01.jpg")
    .container
      hr
    .container.mt-4.specialEffectleft
      .row.justify-content-center
        .col-md-7.bgSetting
          img(src="../../assets/img/standard/c02.jpg")
        .col-md-5
          .under_second_banner_des_box_right
            .glasses
              p.font-weight-bold.text-dark.under_secondbanner_des_title(:class="{'mb-3' : fullWidth <= 640}") 封面 ‧ 霧面防水處理
              p.under_secondbanner_des.mb-0(:class="{'text-justify' : fullWidth <= 640}") 照片、書名搭配，封面封底採用特殊印刷效果。
              p.under_secondbanner_des.mb-0(:class="{'text-justify' : fullWidth <= 640}") 相片書內頁與封面是以不同紙張與印刷機台印製，且封面均有上膜保護，和紙張吸墨性不同的變數，故會讓同一張照片產生正負10%的色彩差異。
    .container
      hr
    .container.specialEffectRight
      .row.justify-content-center
        .col-md-5
          .under_second_banner_des_box_left
            .glasses
              p.font-weight-bold.text-dark.under_secondbanner_des_title(:class="{'mb-3' : fullWidth <= 640}") 書背 ‧ 書名與作者
              p.under_secondbanner_des.mb-0(:class="{'text-justify' : fullWidth <= 640}") 書寫方向任意變化，(半形)英數字、符號，書寫方向將自動轉為橫向，(全形)為直向書寫。
              p.under_secondbanner_des.mb-0(:class="{'text-justify' : fullWidth <= 640}") 編輯器書背字體固定為華康楷書體(系統自動產出固定大小)，目前無法依個人喜好自訂大小。
              p.under_secondbanner_des.text-primary(:class="{'text-justify' : fullWidth <= 640}") 小提醒：平裝書頁數較少時，若書背(小於5mm以下)字體易產生過小且裝訂偏斜不美觀的情況，故少於5mm時不印製書背喔！
        .col-md-7.bgSetting
          img(src="../../assets/img/standard/c03.jpg")
    .container-fluid.mt-4
      .row.border-top.border-bottom.py-4.justify-content-center.recommendArticle
        h2.font-weight-bold.mb-0.text-secondary.secondTitle 網友推薦文章
    .container
      .row.py-5.justify-content-center
        h2.font-weight-bold.mb-0.text-secondary.secondTitle 您還有更多選擇
      .row.pb-5
        .col-md-4.col-6.d-flex.justify-content-center
          .card
            .imgBox
              img.card-img-top(src='../../assets/img/standard/d01.jpg')
            .card-body
              h5.card-title.font-weight-bold.text-secondary.text-center 精裝
        .col-md-4.col-6.d-flex.justify-content-center
          .card
            .imgBox
              img.card-img-top(src='../../assets/img/standard/d01.jpg')
            .card-body
              h5.card-title.font-weight-bold.text-secondary.text-center 薄蝴蝶裝
        .col-md-4.col-6.d-flex.justify-content-center
          .card
            .imgBox
              img.card-img-top(src='../../assets/img/standard/d01.jpg')
            .card-body
              h5.card-title.font-weight-bold.text-secondary.text-center 厚蝴蝶裝
    .container-fluid.border-top.px-0
      footerComponent(:viewportWidth="fullWidth")
    copyright(:viewportWidth="fullWidth")
</template>

<script>
import navbarhead from '../navbarhead'
import swiper from '../swiperComponent'
import footerComponent from '../footer.vue'
import copyright from '../copyright'
import {mapState, mapActions} from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    navbarhead,
    swiper,
    footerComponent,
    copyright
  },
  data () {
    return {
      fullWidth: document.body.clientWidth
    }
  },
  computed: {
    // 從Vuex取出資料
    ...mapState({
      productSpec: state => state.standardModules.productSpec,
      productPages: state => state.standardModules.productPages,
      productAlbum: state => state.standardModules.productAlbum,
      productInfo: state => state.standardModules.productInfo,
      shippingDay: state => state.standardModules.shippingDay
    }),
    // like v-model
    ...mapFields([
      'size',
      'pages',
      'shippingDay',
      'specId',
      'designLink'
    ])
  },
  methods: {
    ...mapActions(['shippingDayChange'])
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
  },
  created () {
    const vm = this
    // vm.$store.dispatch('loadingStatus', true)
    // 取資料
    const id = this.$route.params.id
    vm.$store.dispatch('getStandardData', {id})
  }
}
</script>

<style lang="scss" scoped>
  $s14: 14px;
  $s20: 20px;
  $serif: 'Noto Serif TC', serif;
  .fz12{
    font-size: 12px;
  }
  .fz26{
    font-size: 26px;
  }
  .standard{
    width: 100%;
    // overflow-x: hidden;
  }
  // 促銷活動樣式
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
  // 產品規格設定
  .productTitle{
    font-size: 24px;
    font-weight: bold;
  }
  .secondTitle{
    font-size: 18px;
  }
  .schematic{
    cursor: pointer;
    &:hover{
      opacity: .5;
    }
    &:not(:nth-child(1)){
      margin-left: 16px;
    }
  }
  // 頁面中的Btn樣式
  .btnBox{
    justify-content: flex-end;
  }
  .btnInPage{
    border-radius: 5px;
    width: 203px;
    height: 39px;
    font-size: 21px;
    // padding-left: 50px;
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
  // hr 樣式
  hr{
    border-top: 2px solid rgba(0,0,0,0.5);
  }
  // 下方內容樣式
  .secondTitle{
    font-size: 24px;
    font-family: $serif;
    letter-spacing: 1px;
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
  @media(max-width:823px){
    .under_secondbanner_des_title{
      font-size: 22px;
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
    max-width: 520px;
    height: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
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
  // 網友推薦文章
  .recommendArticle{
    background: #f4f4f4;
  }
  // 您還有更多選擇
  .card{
    max-height: 320px;
    max-width: 258px;
    box-sizing: border-box;
    cursor: pointer;
  }
  @media(max-width:640px){
    .card{
      margin-bottom: 46px;
    }
  }

  // 您還有更多選擇  相片下方  白色部分
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

  // 您還有更多選擇 相片部分
  .imgBox{
    max-height: 258px;
    max-width: 258px;
    overflow: hidden;
    img{
      max-width: 258px;
      max-height: 258px;
      transform:scale(1,1);
      transition: all 1s ease-out;
      &:hover{
        transform:scale(1.2,1.2);
      }
    }
  }
  // 您還有更多選擇的container 設定
  @media(max-width: 640px){
    .container{
      max-width: 100%;
    }
  }
  @media(max-width: 640px){
    .specialEffectRight{
      .col-md-5{
        order:2;
      }
      .col-md-7{
        order:1;
      }
    }
  }
</style>
