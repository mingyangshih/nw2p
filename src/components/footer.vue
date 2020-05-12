<template lang="pug">
  .container
    .row.py-8.justify-content-cneter
      .col-md-3.col-6.footerContent
        p.footerTitle.font-weight-bold 商品資訊
        p.link(v-for="(itm,idx) in totalCategory" @click="getSubMenu(categoryId[idx])") {{itm}}
      .col-md-6.col-6.d-flex(:class="{'flex-column':viewportWidth<=640}")
        .aboutUs.w-100.w-md-50
          p.footerTitle.font-weight-bold 關於我們
          p 關於永豐
          router-link.mb-3.text-decoration-none.d-block.text-dark(to="/serviceterm") 服務使用條款
          router-link.mb-3.text-decoration-none.d-block.text-dark(to="/privacyterm") 隱私保護條款
        .saledServiceBox.w-100.w-md-50
          p.footerTitle.font-weight-bold 售後服務
          p 常見問題
          p 退貨須知
          p 付款與運費說明
      .col-md-3.px-0.mx-0(:class="{'row':viewportWidth <= 640,'flex-column':viewportWidth <= 640,'align-items-center':viewportWidth <= 640, 'mt-5':viewportWidth <= 640}")
        p.footerTitle.font-weight-bold(v-if="viewportWidth > 640") 聯絡我們
        p 週一至週五 9:00~18:00
        p 電子郵件 <span class="w2pemail">services@cloudw2p.com</span>
        button(v-if="viewportWidth <= 640").btn.btn-primary.font-weight-bold.btnInPage.pr-0.py-0.mt-3 聯絡我們 <i class="fas fa-chevron-right fa-xs"></i>
        <i class="fab fa-facebook-square fa-lg mt-3"></i>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: ['viewportWidth'],
  computed: {
    ...mapState({
      // combineNav js為了連到Category頁面
      totalCategory: state => state.navbarModules.totalCategory,
      categoryId: state => state.navbarModules.categoryId
    })
  },
  methods: {
    getSubMenu (id) {
      let categoryId = id
      // 用catch err來解決重複路徑的問題
      this.$router.push(`/productDetail/${categoryId}`).catch(err => {
        if (err.name === 'NavigationDuplicated') window.location.reload()
      })
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
</style>
