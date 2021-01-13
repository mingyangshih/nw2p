<template lang="pug">
  .disigner
    .container-fluid
      .row.px-0
        .col-sm-12.px-0
          img.w-100.firstBanner.img-fluid(:src="designerMaster[0].designerBannerImg" v-if="designerMaster")
    .container.mt-3
      .row.align-items-center
        .col-md-3.h-100
          .d-flex.justify-content-center.h-100.align-items-center
            img(:src="designerMaster[0].designerIcon").img-fluid.rounded-circle
        .col-md-9.h-100.d-flex.flex-column.justify-content-center
          p.titleFont {{designerMaster[0].designerName}}
          p.designerDesc(v-html="designerMaster[0].designerDesc")
      hr
      p.titleFont.text-center.my-5 主題精選
      //- 篩選大類
      .d-flex.justify-content-center.mb-3
        .d-flex.flex-column.align-items-center.mx-4.categoryItem(v-for="item in designerProductCategory"  :class="{'opacity' : selectedCategoryId !== item.categoryId}" @click="changeCategory(item.categoryName, item.categoryId)")
          img(:src="item.categoryIcon")
          p.mb-0 {{item.categoryName}}
      .d-flex.justify-content-between.align-items-center
        p.mb-0.font-weight-bold.categoryText(@click="badgeShowOrnot = !badgeShowOrnot") {{selectedCategoryItem}} <i class="fas fa-angle-down" v-if="!badgeShowOrnot"></i> <i class="fas fa-angle-up" v-if="badgeShowOrnot"></i>
        p.mb-0.font-weight-bold 共<span class="text-primary">{{renderProductItem.length}}</span>件商品
      hr
      //- badge 篩選Content
      .d-flex.align-items-center.mb-3(v-if="badgeShowOrnot")
        .badgeContent.text-center.mx-1(v-for="item in designerProducts" v-if="selectedCategoryId === '' || selectedCategoryId === item.categoryId" @click="selectedProductId = item.productId") {{item.productName}}
      //- designer product item
      .row.pb-5.moreChoicePicBox.justify-content-start
        router-link(v-for="item in renderProductItem" :to="'/designerItem/' + item.Id" :key="item.Id").col-md-3.col-6.d-flex.justify-content-center.mb-md-4.text-decoration-none
          .card
            .imgBox
              img.card-img-top(:src="item.imgcover")
            .card-body
              p.mb-0.productName.text-center {{item.productName}}
              h5.card-title.font-weight-bold.text-secondary.text-center {{item.templateName}}
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      selectedCategoryItem: '全部商品',
      selectedCategoryId: '',
      selectedProductId: '',
      renderProductItem: [],
      badgeShowOrnot: false
    }
  },
  async created () {
    const vm = this
    let id = vm.$route.params.id
    let designerId = vm.$route.params.designerId
    await vm.$store.dispatch('getDesignerDetail', {id, designerId})
    vm.renderProductItem = vm.designerProductItem
  },
  computed: {
    ...mapState({
      designerMaster: state => state.designerModules.designerMaster,
      designerProductItem: state => state.designerModules.designerProductItem,
      designerProducts: state => state.designerModules.designerProducts,
      designerProductCategory: state => state.designerModules.designerProductCategory
    })
  },
  watch: {
    // 當url改變時可重複render同一個component
    async '$route' (to, from) {
      const vm = this
      let id = vm.$route.params.id
      let designerId = vm.$route.params.designerId
      if (to.params.id !== from.params.id || to.params.designerId !== from.params.designerId) {
        await vm.$store.dispatch('getDesignerDetail', {id, designerId})
        // vm.selectedProductId = vm.designerProducts[0].productId
        vm.selectedCategoryItem = '全部商品'
        vm.renderProductItem = vm.designerProductItem
        vm.selectedCategoryId = ''
        vm.selectedProductId = ''
      }
    },
    // 選大類重新render
    selectedCategoryId () {
      let vm = this
      let renderProductItem = []
      if (vm.selectedCategoryId === '') {
        renderProductItem = vm.designerProductItem
      } else {
        vm.designerProductItem.forEach(item => {
          if (vm.selectedCategoryId === item.categoryId) {
            renderProductItem.push(item)
          }
        })
      }
      vm.renderProductItem = renderProductItem
    },
    // 選product重新render
    selectedProductId () {
      let vm = this
      let renderProductItem = []
      if (vm.selectedProductId !== '') {
        vm.designerProductItem.forEach(item => {
          if (item.productId === vm.selectedProductId) {
            renderProductItem.push(item)
          }
        })
      } else {
        renderProductItem = vm.designerProductItem
      }

      vm.renderProductItem = renderProductItem
    }
  },
  methods: {
    changeCategory (categoryName, categoryId) {
      let vm = this
      vm.selectedCategoryItem = categoryName
      vm.selectedCategoryId = categoryId
    }
  }
}
</script>

<style lang="scss" scoped>
  $s20: 20px;
  $serif: 'Noto Serif TC', serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  .titleFont{
    font-size: 24px;
    font-family: $serif;
    font-weight: bold;
  }
  hr{
    border-color: black;
  }
  .designerDesc{
    line-height: 26px;
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
  .categoryItem{
    cursor:pointer;
    &.opacity{
      opacity: .4;
    }
    img{
      max-width: 90px;
    }
  }
  .categoryText{
    cursor: pointer;
  }
  .badgeContent{
    border: 2px solid black;
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
  }
  // template
  .card{
    max-height: 320px;
    max-width: 258px;
    box-sizing: border-box;
    cursor: pointer;
    .productName{
      font-size: 14px;
    }
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
  @media(max-width: 640px) {
    .moreChoicePicBox{
      justify-content: center;
    }
  }

  // template  相片下方  白色部分
  .card-body{
    height: 64px;
    box-sizing: border-box;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h5{
      margin-bottom: 0;
    }
  }
  @media(max-width: 640px){
    .card-body{
      height: 40px;
      padding:0px 0;
      font-size: 24px;
      h5{
        display: flex;
        align-items:center;
        justify-content: center;
        font-size: .6em;
      }
    }
  }
</style>
