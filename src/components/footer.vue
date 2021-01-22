<template lang="pug">
  .container
    .row.py-8.justify-content-cneter
      .col-md-3.col-6.footerContent
        p.footerTitle.font-weight-bold 商品資訊
        p.link( @click="getSubMenu(categoryId[idx])" v-for="(itm,idx) in totalCategory" v-if="eachCategoryProduct[idx].length > 1") {{itm}}
        p.link(v-else @click="standard(eachCategoryProduct[idx][0])") {{itm}}
        router-link(to="/exchange").link.text-decoration-none.text-dark 兌換專區
      .col-md-6.col-6.d-flex(:class="{'flex-column':viewportWidth<=640}")
        .aboutUs.w-100.w-md-50
          p.footerTitle.font-weight-bold 認識我們
          router-link.mb-3.text-decoration-none.d-block.text-dark.link(to="/aboutYFP") 關於我們
          router-link.mb-3.text-decoration-none.d-block.text-dark.link(to="/serviceterm") 服務使用條款
          router-link.mb-3.text-decoration-none.d-block.text-dark.link(to="/privacyterm") 隱私保護條款
        .saledServiceBox.w-100.w-md-50
          p.footerTitle.font-weight-bold 服務內容
          div.mb-3.text-decoration-none.d-block.text-dark.link(@click="$router.push('/serviceContent'); $store.state.serviceContentDrop = '#/serviceContent'") 編輯教學
          div.mb-3.text-decoration-none.d-block.text-dark.link(@click="$router.push('/serviceContent/aboutMember'); $store.state.serviceContentDrop = '#/serviceContent/aboutMember'") 關於會員
          div.mb-3.text-decoration-none.d-block.text-dark.link(@click="$router.push('/serviceContent/workslayout'); $store.state.serviceContentDrop = '#/serviceContent/workslayout'") 作品編排須知
          div.mb-3.text-decoration-none.d-block.text-dark.link(@click="$router.push('/serviceContent/buyAndTake'); $store.state.serviceContentDrop = '#/serviceContent/buyAndTake'") 訂購與取貨
          div.mb-3.text-decoration-none.d-block.text-dark.link(@click="$router.push('/serviceContent/invoiceAndSaledService'); $store.state.serviceContentDrop = '#/serviceContent/invoiceAndSaledService'") 發票與售後服務
      .col-md-3.px-0.mx-0(:class="{'row':viewportWidth <= 640,'flex-column':viewportWidth <= 640,'align-items-center':viewportWidth <= 640, 'mt-5':viewportWidth <= 640}")
        p.footerTitle.font-weight-bold(v-if="viewportWidth > 640") 聯絡我們
        router-link(to="/serviceContent/contactus").d-block.mb-3.text-decoration-none.link.text-dark 客服信箱
        p(v-if="viewportWidth > 640") 週一至週五 ( 非例假日 )
        p(v-if="viewportWidth > 640") 10:00 ~ 12:00 及 13:00 ~ 17:00
        p(v-if="viewportWidth <= 640") 週一至週五 ( 非例假日 )
        p(v-if="viewportWidth <= 640") 10:00 ~ 12:00 及 13:00 ~ 17:00
        p 電子郵件 <span class="w2pemail">services@cloudw2p.com</span>
        button(v-if="viewportWidth <= 640" @click="$router.push('/serviceContent/contactus'); $store.state.serviceContentDrop = '#/serviceContent/contactus'").btn.btn-primary.font-weight-bold.btnInPage.pr-0.py-0.mt-3.text-decoration-none 聯絡我們 <i class="fas fa-chevron-right fa-xs"></i>
        .d-flex.align-items-center.socialIconBox
          a(href="https://www.facebook.com/cloudw2p.tw" target="_blank") <img src="../../static/fb.svg" class="fb">
          a(href="https://www.instagram.com/cloudw2p/" target="_blank").ml-2 <img src="../../static/ig.png" class="ig">
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: ['viewportWidth'],
  computed: {
    ...mapState({
      // combineNav js為了連到Category頁面
      totalCategory: state => state.navbarModules.totalCategory,
      categoryId: state => state.navbarModules.categoryId,
      eachCategoryNumber: state => state.navbarModules.eachCategoryNumber,
      eachCategoryProduct: state => state.navbarModules.eachCategoryProduct
    })
  },
  methods: {
    getSubMenu (id) {
      let categoryId = id
      // 用catch err來解決重複路徑的問題
      this.$router.push(`/productDetail/${categoryId}`).catch(err => {
        if (err.name === 'NavigationDuplicated') window.location.reload()
      })
    },
    standard (id) {
      // catch error 判斷是否點到同一頁 true reload
      this.$router.push(`/standard/${id}`).catch(err => {
        if (err.name === 'NavigationDuplicated') window.location.reload()
      })
      window.location.reload()
    }
  }
}
</script>
<style lang="scss" scoped>
.footerContent{
  font-size: 17px;
}
.footerTitle{
  font-size: 21px;
}
@media(max-width:640px){
  .footerContent{
    p{
      padding-left: 16px;
    }
  }
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
// footer container 窄一點
@media (min-width: 1200px){
  .container{
    max-width: 960px;
  }
}
.link{
  cursor: pointer;
  &:hover{
    opacity: .4;
  }
}
.w2pemail{
  font-size: 14px;
}

@media(max-width: 641px){
  .socialIconBox{
    margin-top: 16px;
  }
}

.ig{
  width: 22px;
}
.fb{
  width: 24px;
}
</style>
