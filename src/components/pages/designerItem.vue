<template lang="pug">
  .designerItem
    .container.d-flex.my-3
      router-link(to="/" v-if="categoryName").mb-0.text-gray.text-decoration-none 首頁
      p.mb-0.text-gray.mx-2 /
      p.mb-0.text-gray.mx-2.categoryLink.text-decoration-none 聯名系列
      p.mb-0.text-gray.mx-2(v-if="categoryName") /
      p.mb-0.text-gray.backToDesigner(@click="$router.go(-1)") {{designerName}}
      p.mb-0.text-gray.mx-2(v-if="categoryName") /
      p.mb-0 {{productName}}-{{templateName}}
    .container
      .row
        .col-md-6
          swiperdesigner(:viewportWidth = fullWidth)
        .col-md-6
          p.productTitle(:class="{'mt-3':fullWidth <= 640}") {{productName}}-{{templateName}}
          .d-flex.align-items-center.mb-3
            <i class="fas fa-bullhorn productNotes mr-3"></i>
            p(v-html="productNotes").productNotes.mb-0
          p.text-primary.font-weight-bold.secondTitle 產品資訊
          .row(v-for="item in productIntroDesc")
            .col-4
              p {{item.introName}}
            .col-8
              p(v-html="item.productIntroDesc")
          .row(v-if="productPattern.length > 0")
            .col-4
              p 選擇款式
            .col-8
              .d-flex.flex-wrap
                .p-1.border.mx-1.patterenImgBox(v-for="item in productPattern" :class="{'border-dark': choosedPatterenID === item.Id}" @click="changePatteren(item.Id, item.editLink)")
                  img( :src="item.imgcover").mx-1.patterenImg
          hr.mt-3
          div(:class="{ 'flex-column' : fullWidth <= 640, 'align-items-center' : fullWidth <= 640}").text-primary.d-flex.font-weight-bold.my-3 <span v-html="standardPageNotify"></span><p class="mb-0" :class="{'ml-auto' : fullWidth > 640}"><span class="price" >NT {{price | currency}}</span></p>
          .d-flex.btnBox.flex-wrap(:class="{'justify-content-center' : fullWidth <= 640}")
            a(:href="editLink" :class="{'w-100' : fullWidth <= 640}").btn.btn-primary.font-weight-bold.btnInPage.py-0.text-white 我要購買
    designerItemSwiper
    .container.mt-5.mt-md-0
      .row.justify-content-center.py-4
        h2.font-weight-bold.mb-0.text-secondary.secondTitle 產品特性
      hr(v-if="fullWidth > 640").mt-0.mb-5
    .container(v-for="(item,idx) in productItemFeature" )
      .row.justify-content-center(:class="{'flex-row-reverse': idx%2 == 0}")
        .col-md-5
          .under_second_banner_des_box_left
            .glasses
              p.font-weight-bold.text-dark.under_secondbanner_des_title(:class="{'mb-3' : fullWidth <= 640}") {{item.featureTitle}}
              p.under_secondbanner_des.mb-0(:class="{'text-justify' : fullWidth <= 640}" v-html="item.featureDesc")
        .col-md-7.bgSetting
          img(:src="item.featurePicture")
      hr.my-5
    .container(v-for="(item,idx) in productFeature" )
      .row.justify-content-center(:class="{'flex-row-reverse': idx%2 !== 0}")
        .col-md-5
          .under_second_banner_des_box_left
            .glasses
              p.font-weight-bold.text-dark.under_secondbanner_des_title(:class="{'mb-3' : fullWidth <= 640}") {{item.featureTitle}}
              p.under_secondbanner_des.mb-0(:class="{'text-justify' : fullWidth <= 640}" v-html="item.featureDesc")
        .col-md-7.bgSetting
          img(:src="item.featurePicture")
      hr.my-5
    .container.mt-5.mt-md-0
      .row.justify-content-center.py-4
        h2.font-weight-bold.mb-0.text-secondary.secondTitle 購物須知
      .d-flex.justify-content-center
        .purchaseNotice(v-html="purchaseNotice" :class="{'w-75' : fullWidth > 640}")
    designerItemRecommendSwiper
</template>

<script>
import {mapState} from 'vuex'
import swiperdesigner from '../swiperComponentDesigner'
import designerItemSwiper from '../designerItemSwiper'
import designerItemRecommendSwiper from '../designerItemRecommendSwiper'
export default {
  components: {
    swiperdesigner,
    designerItemSwiper,
    designerItemRecommendSwiper
  },
  data () {
    return {
      fullWidth: document.body.clientWidth,
      categoryId: null,
      categoryName: '',
      standardTitle: '',
      standardPageNotify: ''
    }
  },
  methods: {
    changePatteren (Id, editLink) {
      let vm = this
      vm.$store.commit('choosedPatteren', {Id, editLink})
    }
  },
  async created () {
    const vm = this
    let {designerItemId} = vm.$route.params
    await this.$store.dispatch('getDesignerItem', {designerItemId})
    vm.categoryName = vm.productItem[0].categoryName
    vm.categoryId = vm.productItem[0].categoryId
    // 取得apiPath內standard 畫面行銷文字 standardPageNotify
    vm.standardPageNotify = window.standardPageNotify
  },
  computed: {
    ...mapState({
      productItem: state => state.designerItemModules.productItem,
      productName: state => state.designerItemModules.productName,
      templateName: state => state.designerItemModules.templateName,
      designerName: state => state.designerItemModules.designerName,
      price: state => state.designerItemModules.price,
      productIntroDesc: state => state.designerItemModules.productIntroDesc,
      productNotes: state => state.designerItemModules.productNotes,
      productPattern: state => state.designerItemModules.productPattern,
      productFeature: state => state.designerItemModules.productFeature,
      purchaseNotice: state => state.designerItemModules.purchaseNotice,
      choosedPatterenID: state => state.designerItemModules.choosedPatterenID,
      editLink: state => state.designerItemModules.editLink,
      productItemFeature: state => state.designerItemModules.productItemFeature
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
    async '$route' (to, from) {
      const vm = this
      let {designerItemId} = vm.$route.params
      if (to.params.designerItemId !== from.params.designerItemId) {
        await this.$store.dispatch('getDesignerItem', {designerItemId})
      }
    },
    fullWidth (val) {
      this.fullWidth = val
    }
  }
}
</script>

<style lang="scss" scoped>
  $serif: 'Noto Serif TC', serif;
  .backToDesigner{
    cursor: pointer;
  }
  // 產品規格設定
  .productTitle{
    font-size: 24px;
    // font-weight: bold;
  }
  .productNotes{
    color: #ad8046;
  }
  .secondTitle{
    font-size: 24px;
    font-family: $serif;
    letter-spacing: 1px;
  }
  // hr 樣式
  hr{
    border-top: 1px solid rgba(0,0,0,0.5);
  }
  // 金額樣式
  .price{
    font-size: 26px;
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
  .patterenImgBox{
    margin-bottom: 8px;
    cursor: pointer;
  }
  @media(max-width:640px){
    .patterenImgBox{
      margin-bottom: 8px;
    }
  }
  .patterenImg{
    max-width: 30px;
    height: auto;
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
  // 購物須知
  .purchaseNotice{
    font-size: 16px;
  }
  @media(max-width: 640px){
    .purchaseNotice{
      margin-left: -16px;
    }
  }
</style>
