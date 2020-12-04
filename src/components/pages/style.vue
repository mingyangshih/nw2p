<template lang="pug">
  .style(:class="{'overFlowHidden':modalShow}")
    .container.d-flex.my-3
      router-link(to="/").mb-0.text-gray.text-decoration-none 首頁
      .mb-0.text-gray.mx-2 /
      router-link(:to="'/productDetail/' + categoryId").mb-0.text-gray.mx-2.categoryLink.text-decoration-none {{categoryName}}
      p.mb-0.text-gray.mx-2 /
      .mb-0.mx-2.categoryLink.text-decoration-none(@click="$router.go(-1)") {{productName}}
    .container
      .row
        .col-12
          p.pageTitle.text-center.mb-5 挑選你喜愛的風格
          .d-flex.align-items-center.justify-content-center
            p.mb-0.mr-3 風格
            select.form-control.rounded-0.w-50.chooseStyleClass(v-model="changeStyleId" @change="dispatchChangeStyle")
              option(v-for="(itm,idx) in getStyleClass" :value="itm.styleId") {{itm.styleName}}
          hr.w-100.hr.mt-4.mb-5
      .row
        .col-md-3.col-6.mb-5(v-for="item in productItemRender" v-if="item.page_no === activePage").d-flex.justify-content-center(@click="modalShow = !modalShow; $store.state.openStyleModal = true; modalBigImg = item.imgcover; modalRightOne = item.img1; modalRightTwo = item.img2; editLink = item.editLink; templateName = item.templateName")
          .card.rounded-0
            .imgBox
              img.card-img-top.rounded-0.img-fluid(:src="item.imgcover")
            .card-body
              h6.text-center.card-title.text-secondary {{item.templateName}}
      //- pagination
      .row.justify-content-center
        nav(aria-label='Page navigation example')
          ul.pagination
            li.page-item(v-if="activePage !== 1" @click="prev")
              .page-link(href='#' aria-label='Previous')
                span(aria-hidden='true') &laquo;
                span.sr-only Previous
            li.page-item(v-for="itm in pagination" @click="changePage(itm)")
              .page-link {{itm}}
            li.page-item(v-if="activePage !== pagination[pagination.length - 1]" @click="next")
              .page-link(href='#' aria-label='Next')
                span(aria-hidden='true') &raquo;
                span.sr-only Next
    //-  點擊圖片後顯示的lightbox(三張圖的lightbox)
    .lightBox.d-flex.justify-content-center.align-items-center(v-if="modalShow && templateImgCount === 3" @click.stop="modalShow = !modalShow; $store.state.openStyleModal = false")
      .border.border-dark.modalBox.p-3
        p.modalTitle.mb-4.text-center {{templateName}}
        .d-flex.align-items-center
          .d-flex.justify-content-center.align-items-center.flex-column.coverImgBox
            p 封面
            .lightBoxImgBox(style="max-width:100%;")
              //- img.img-fluid(src="../../../static/A01-1.jpg" style="width: auto; max-height: 500px;")
              img.img-fluid(:src="modalBigImg" style="width: auto; max-height: 500px;")
          .d-flex.flex-column.h-100
            .d-flex.flex-column.justify-content-center.align-items-center(style="width: 40%").h-50.w-100
              p 日期頁
              img.img-fluid(:src="modalRightOne" style="width: auto; max-height: 300px;")
              //- img.img-fluid(src="../../../static/A01-2.jpg" style="width: auto; max-height: 300px;")
            .d-flex.flex-column.justify-content-center.align-items-center(style="width: 40%").h-50.w-100
              p 照片頁
              img.img-fluid(:src="modalRightTwo" style="width: auto; max-height: 300px;")
              //- img.img-fluid(src="../../../static/A01-3.jpg" style="width: auto; max-height: 300px;")
        .d-flex.justify-content-center.mt-5
          a(:href="editLink").btn.btn-primary.btnInPage.text-decoration-none 開始製作
    //- 兩張圖的lightbox
    .lightBox.d-flex.justify-content-center.align-items-center(v-if="modalShow && templateImgCount === 2" @click.stop="modalShow = !modalShow; $store.state.openStyleModal = false")
      .border.border-dark.modalBox.p-3
        p.modalTitle.mb-4.text-center {{templateName}}
        .d-flex
          .d-flex.justify-content-center.align-items-center.flex-column(style="width: 50%")
            p 封面
            .lightBoxImgBox(style="max-width:100%;")
              img.img-fluid(:src="modalBigImg" style="max-width: 100%")
          .d-flex.flex-column.justify-content-center.align-items-center(style="width: 50%")
            p 日期照片頁
            img.img-fluid(:src="modalRightOne" style="max-width: 100%").mb-3
        .d-flex.justify-content-center.mt-5
          a(:href="editLink").btn.btn-primary.btnInPage.text-decoration-none 開始製作
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      modalShow: false,
      modalBigImg: null,
      modalRightOne: null,
      modalRightTwo: null,
      editLink: null,
      changeStyleId: null,
      templateName: null
    }
  },
  computed: {
    ...mapState({
      productItemRender: state => state.styleModules.productItemRender,
      getStyleClass: state => state.styleModules.getStyleClass,
      styleId: state => state.styleModules.styleId,
      productName: state => state.styleModules.productName,
      categoryName: state => state.styleModules.categoryName,
      categoryId: state => state.styleModules.categoryId,
      pagination: state => state.styleModules.pagination,
      activePage: state => state.styleModules.activePage,
      templateImgCount: state => state.styleModules.templateImgCount
    })
  },
  methods: {
    dispatchChangeStyle () {
      let vm = this
      let changeStyleId = vm.changeStyleId
      vm.$store.dispatch('changeStyle', {changeStyleId})
    },
    changePage (itm) {
      this.$store.state.styleModules.activePage = itm
    },
    prev () {
      this.$store.state.styleModules.activePage -= 1
    },
    next () {
      this.$store.state.styleModules.activePage += 1
    }
  },
  async created () {
    const vm = this
    let id = vm.$route.params.id
    let specId = vm.$route.params.specid
    let sizeId = vm.$route.params.sizeid
    let styleId = vm.$route.params.styleId
    await vm.$store.dispatch('getStyle', {id, specId, sizeId, styleId})
    await vm.$store.dispatch('getStyleClass', {id})
    vm.changeStyleId = vm.styleId
  }
}
</script>

<style lang="scss" scoped>
  $s14: 14px;
  $s20: 20px;
  $pageTitle: 24px;
  $serif: 'Noto Serif TC', serif;
  .categoryLink{
    cursor: pointer;
  }
  .pageTitle{
    font-family: $serif;
    font-size: $pageTitle;
    font-weight: bold;
  }
  .chooseStyleClass{
    border-width:3px;
    border-color: rgb(189, 186, 186);
  }
  .hr{
    border-width: 2px;
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
  // lightBox
  .lightBox{
    width: 100vw;
    background: rgba(0,0,0,.5);
    height: 100vh;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index: 901;
    overflow-y: scroll;
  }
  // 頁面中的Btn樣式
  .btnInPage{
    border-radius: 5px;
    width: 203px;
    height: 39px;
    font-size: 21px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight:bold;
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
  .modalBox{
    background: #ededed;
    width: 50%;
  }
  .coverImgBox{
    width: 60%;
  }
  @media(max-width:651px){
    .modalBox{
      width: 100%;
    }
    .coverImgBox{
      width: auto;
    }
  }
  .modalTitle{
    font-size: 24px;
    font-family:$serif;
    font-weight:bold;
  }
</style>
