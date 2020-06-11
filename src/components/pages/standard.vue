<template lang="pug">
  .standard
    .container.d-flex.my-3
      router-link(to="/" v-if="categoryName").mb-0.text-gray.text-decoration-none 首頁
      p.mb-0.text-gray.mx-2(v-if="categoryName") /
      router-link.mb-0.text-gray.mx-2.categoryLink.text-decoration-none(:to="'/productDetail/' + categoryId") {{categoryName}}
      p.mb-0.text-gray.mx-2(v-if="categoryName") /
      p.mb-0 {{standardTitle}}
    .container
      .row
        .col-md-6
          swiper(:viewportWidth="fullWidth")
        .col-md-6
          p.productTitle(:class="{'mt-3':fullWidth <= 640}") {{standardTitle}}
          p.text-primary.font-weight-bold.secondTitle 選擇規格/尺寸
          p.font-weight-bold 規格
          .d-flex.align-items-end.mb-3
            .d-flex.flex-column.align-items-center.schematic(v-for="(item,idx) in productSpec" @click.prevent="direction = item.specName; specId =item.specId;")
              img.mb-2(:src="item.specThumbnail" :class="{'selected' : item.specName === direction}")
              span.fz12 {{item.specName}}
          .d-flex.align-items-center.mb-3
            label.mb-0(for="") 尺寸
            select#size.form-control.w-75.ml-3(v-model="sizeId")
              option(v-for="item in productSize" :value = "item.sizeId")  {{item.sizeDesc}}
          hr
          p.text-primary.font-weight-bold.secondTitle 產品資訊
            .row
              .col-4
                p 規格
              .col-8
                p {{direction}}
            .row(v-for="(itm, idx) in specId_sizeId_info.productIntroLeftCol")
              .col-4
                p {{itm}}
              .col-8
                p(v-if="specId_sizeId_info.productIntroId[idx] === '6'") 付款後{{specId_sizeId_info.productIntroRightCol[idx]}}個工作天寄出
                p(v-else) {{specId_sizeId_info.productIntroRightCol[idx]}}
          hr.mt-0
          div(:class="{ 'flex-column' : fullWidth <= 640, 'align-items-center' : fullWidth <= 640}").text-primary.d-flex.font-weight-bold.my-3 周年慶活動，相片全面85折優惠!<p class="mb-0" :class="{'ml-auto' : fullWidth > 640}"><span class="fz26" >NT {{specId_sizeId_info.price | currency}}</span><span class="fz26 ml-2" v-if="specId_sizeId_info.priceRange">起</span></p>
          .d-flex.btnBox.flex-wrap(:class="{'justify-content-center' : fullWidth <= 640}")
            router-link(to="/serviceContent").btn.btn-outline-primary.font-weight-bold.btnInPage(:class="[{'w-100' : fullWidth <= 640},{'mb-2' : fullWidth <= 640},{'mr-2' : fullWidth > 640}]") 編輯教學
            a(:href="specId_sizeId_info.link" :class="{'w-100' : fullWidth <= 640}").btn.btn-primary.font-weight-bold.btnInPage.py-0.text-white 開始製作
    .container.mt-5.mt-md-0
      .row.justify-content-center.py-4
        h2.font-weight-bold.mb-0.text-secondary.secondTitle 產品特性
      hr(v-if="fullWidth > 640").mt-0.mb-5
    .container.specialEffectRight(v-for="(item,idx) in productFeature" :class="{'mb-8' : idx === (productFeature.length - 1) && (subProducts.length <= 1)}")
      .row.justify-content-center(:class="{'flex-row-reverse': idx%2 !== 0}")
        .col-md-5
          .under_second_banner_des_box_left
            .glasses
              p.font-weight-bold.text-dark.under_secondbanner_des_title(:class="{'mb-3' : fullWidth <= 640}") {{item.featureTitle}}
              p.under_secondbanner_des.mb-0(:class="{'text-justify' : fullWidth <= 640}" v-html="item.featureDesc")
              //- {{item.featureDesc}}
        .col-md-7.bgSetting
          img(:src="$store.state.imgPath+item.featurePicture")
      hr.my-5(:class="{'d-none' : idx === (productFeature.length - 1) && (subProducts.length <= 1)}")
    //- 網友推薦文章
    .container-fluid.mt-4(v-if="productRecommend.length > 0")
      .row.border-top.border-bottom.py-4.align-items-center.recommendArticle.flex-column
        h2.font-weight-bold.text-secondary.secondTitle.mb-4 網友推薦文章
        .eachSuggest.mb-3.py-2.px-4.bg-white.d-flex.flex-column.justify-content-center(v-for="item in productRecommend")
          .d-flex
            p.mb-0.font-weight-bold {{item.recommendName}}
            p.date.ml-auto {{item.recommendDate}}
          a(:href="item.recommendLink" target="_blank").mb-0.text-dark {{item.recommendTitle}}
    .container(v-if = "subProducts.length > 1")
      .row.py-5.justify-content-center
        h2.font-weight-bold.mb-0.text-secondary.secondTitle 您還有更多選擇
      .row.pb-5.moreChoicePicBox
        div(@click.prevent="standard(itm.productId)" v-for="itm in subProducts" v-if="itm.productId !== productId" :key="itm.productId").col-md-3.col-6.d-flex.justify-content-center.mb-md-3.text-decoration-none
          .card
            .imgBox
              img.card-img-top(:src='itm.subMenuSmallImg')
            .card-body
              h5.card-title.font-weight-bold.text-secondary.text-center {{itm.productName}}
</template>

<script>
import navbarhead from '../navbarhead'
import navCustomize from '../navCustomize'
import swiper from '../swiperComponent'
import footerComponent from '../footer.vue'
import copyright from '../copyright'
import tpxNavbarhead from '../../components/tpxNavbarhead'
import {mapState, mapGetters} from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    navbarhead,
    navCustomize,
    swiper,
    footerComponent,
    copyright,
    tpxNavbarhead
  },
  data () {
    return {
      fullWidth: document.body.clientWidth,
      categoryId: null
    }
  },
  computed: {
    // 從Vuex取出資料
    ...mapState({
      productSpec: state => state.standardModules.productSpec,
      productInfo: state => state.standardModules.productInfo,
      productFeature: state => state.standardModules.productFeature,
      standardTitle: state => state.standardModules.standardTitle,
      productIntroDesc: state => state.standardModules.productIntroDesc,
      categoryName: state => state.standardModules.categoryName,
      productId: state => state.standardModules.productId,
      productRecommend: state => state.standardModules.productRecommend,
      // productDetail modules的data
      subProducts: state => state.productDetailModules.subProducts
    }),
    // like v-model
    ...mapFields([
      'direction',
      'specId',
      'sizeId'
    ]),
    ...mapGetters(['productSize', 'specId_sizeId_info'])
  },
  methods: {
    getSubMenu () {
      let categoryId = this.$store.state.standardModules.categoryId
      this.$router.push(`/productDetail/${categoryId}`)
      // window.location.reload()
    },
    standard (id) {
      this.$router.push(`/standard/${id}`)
      window.location.reload()
    }
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
  async created () {
    const vm = this
    // 取資料
    const id = this.$route.params.id
    await vm.$store.dispatch('getStandardData', {id})
    let categoryId = this.$store.state.standardModules.categoryId
    vm.categoryId = categoryId
    // call productDetail.js 內的actions
    vm.$store.dispatch('getSubMenu', {categoryId})
    // 切換畫面重載
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
  .categoryLink{
    cursor: pointer;
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
    img{
      max-width: 50%;
      opacity: .5;
      &.selected{
        opacity: 1;
      }
    }
    cursor: pointer;
    &:hover{
      opacity: .5;
    }
    // &:not(:nth-child(1)){
    //   margin-left: 16px;
    // }
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
    border-top: 1px solid rgba(0,0,0,0.5);
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
    align-items: flex-start;
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
    &:hover{
      .imgBox, .card-body{
        opacity: .5;
      }
    }
  }
  @media(max-width:640px){
    .card{
      margin-bottom: 46px;
    }
  }
  // 設定col-md-4的寬度
  @media(min-width: 640px) {
    .moreChoicePicBox{
      justify-content: center;
      .col-md-4{
        max-width: 28%;
      }
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
      // transition: all 1s ease-out;
      // &:hover{
      //   transform:scale(1.2,1.2);
      // }
    }
  }
  @media(max-width: 640px){
    .col-6:nth-child(2n){
    padding: 0 15px 0 5px;
  }
    .col-6:nth-child(2n + 1){
      padding: 0 5px 0 15px;
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
  // 網友推薦
  .eachSuggest{
    height: 120px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px;
    width: 100%;
    .date{
      font-size: 14px;
      color: rgba(0,0,0,.4)
    }
    a{
      height: 20px;
      overflow:hidden;
    }
  }
  @media(min-width: 640px){
    .eachSuggest{
      width: 50%;
    }
  }
  // footer
  .footer{
    background-color : #f4f4f1;
    position: relative;
    margin-top: 40px;
  }
</style>
