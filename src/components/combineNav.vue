<template lang="pug">
  #tpx-basket-bar.row.justify-content-between.align-items-center.tpx.mx-0.py-0.border-bottom-0.topNavBox
    label.hamburger(for="hamburger" @click="sideBarShowEvent(true)")
    router-link.logoBox(to="/")
      img.logo(src="../assets/img/logo.png")
    //- 大於 640 秀的畫面
    .darkBg(v-if="sideBarShow")
    div.tpx.tpx-bar-container.tpx-clearfix.topNav(id="tpx-basket-bar-inner" :class="{'show' : sideBarShow}")
      div.xBox(@click="sideBarShowEvent(false)")
        i.fas.fa-times
      router-link(to="/").home
        img(src="../assets/img/logo.png")
      //- desk top 所有產品
      div.item.allProd.mb-0.align-items-center.deskTop 所有產品
        .dropDownMenu.bg-white.px-3
          .text-decoration-none.row
            .col-md-4.py-3(v-for="(item,idx) in totalCategory")
              .d-flex.flex-column
               p( @click.prevent="productdetail(categoryId[idx])").text-decoration-none.mb-2.itemHover {{item}} {{productEnCategory[idx]}}
               p.text-decoration-none.pl-3.mb-2.itemHover(v-for="item1 in totalProduct" v-if="item1.productCategory === item" :key="item1.productId" @click.prevent="standard(item1.productId)") - {{item1.productName}}
      //- mobile 所有產品
      .sidebarBox.w-100
        .sidebar.d-flex.flex-column.align-items-center.pt-3
          .hr
          router-link(to="/").item.text-decoration-none.text-dark.font-weight-bold 首頁
          <input type="checkbox" id="allProd" class="d-none">
          label(for="allProd").navItem.font-weight-bold.align-items-center.mb-0.d-flex 所有產品<i class="fas fa-chevron-down ml-auto"></i><i class="fas fa-chevron-up ml-auto"></i>
          .allProdItemBox
            .navItem.font-weight-bold.allProdItem( v-for="(item,idx) in totalCategory" )
              input.allProdItemDetail.d-none(type="checkbox" :id="idx")
              label.d-flex(:for="idx").mb-0 {{item}} <i class="fas fa-chevron-down ml-auto"></i><i class="fas fa-chevron-up ml-auto"></i>
              p(@click.prevent="productdetail(categoryId[idx])").font-weight-bold.pl-3.py-2.mb-0.allProdItemDetailItem.fz14.text-decoration.none.text-dark <span @click="sideBarShowEvent">{{item}}</span>
              p.mb-0.font-weight-bold.pl-3.py-2.allProdItemDetailItem.fz14.text-decoration-none.text-dark( v-for="(item1,idx1) in totalProduct" :key="idx1" v-if="item1.productCategory === item" @click.prevent="standard(item1.productId)") - <span >{{item1.productName}}</span>
      label.item.helpCenter.mb-0.align-items-center 幫助中心
      router-link(to="/aboutYFP").text-dark.item.aboutUs.mb-0.align-items-center.text-decoration-none 關於我們
      label.item.saledHelp.mb-0.align-items-center 售後服務
      label.item.contactUs.mb-0.align-items-center 聯絡我們
      label.item.register.mb-0.align-items-center
        a.font-weight-bold.text-decoration-none(onClick="tpxHighLevelRegisterInitControl()" id="tpx-register")
      label.item.login.mb-0.align-items-center
        a.font-weight-bold.text-decoration-none(id="tpx-signIn" onClick="tpxHighLevelSignInInitControl()")
      label.item.myItem.mb-0.align-items-center.tpx.tpx-accountLinkItem(id="tpx-projectslinkli")
        span(id="tpx-projectslist" onClick="tpxMyProjectsOnClick()")
      div.item.myItem.mb-0.align-items-center.tpx
        .tpx(id="tpx-basketButtonWrapper")
          p.mb-0.tpx.tpx-button.tpx-basketButton(id="tpx-basketlink" onClick="tpxBasketOnClick()")
            span.tpx.tpx-basketCount(id="tpx-basketButtonCount")
    //- 小於640秀的畫面
    //- <!-- My Projects pop out panel -->
    <div id="tpx-projectlistcontents" class="tpx tpx-projectlist">
        <div id="tpx-projectsItemListContainer" class="tpx tpx-projectlist-items-container">
            <ul id="tpx-projectsItemList" class="tpx tpx-shopping-cart-items"></ul>
            <div id="tpx-projectloadingspinnercontainer" class="tpx tpx-loadingspinnercontainer">
                <span id="tpx-projectloadingspinner" class="tpx tpx-loading-spinner"></span>
            </div>
            <div id="tpx-empty-state">
                <p id="tpx-empty-project-text">You don't have any saved projects.</p>
            </div>
        </div>
    </div>
    //- Basket pop out panel
    <div id="tpx-shoppingcartcontents" class="tpx tpx-shopping-cart">
      <div class="tpx tpx-shopping-cart-header tpx-clearfix">
          <span id="tpx-basketcountbadgeinner" class="tpx tpx-badge">0</span>
          <a href="#" id="tpx-emptyBasketButton" onClick="tpxHighLevelEmptyBasketControl()" class="tpx tpx-button tpx-emptycartbutton">Empty Basket</a>
      </div>
      <div id="tpx-basketItemListContainer" class="tpx tpx-shopping-cart-items-container">
          <ul id="tpx-basketItemList" class="tpx tpx-shopping-cart-items"></ul>
          <div id="tpx-loadingspinnercontainer" class="tpx tpx-loadingspinnercontainer"></div>
          <div id="tpx-empty-cart">
              <p id="tpx-empty-cart-text">Your basket is currently empty</p>
          </div>
      </div>
      <a href="#" id="tpx-checkoutbutton" onClick="tpxHighLevelCheckoutControl()" class="tpx tpx-button tpx-checkout-button">Checkout</a>
  </div>

</template>

<script>
import {mapState, mapActions} from 'vuex'
export default{
  props: ['viewportWidth'],
  data () {
    return {
      // sideBarShow: false,
      pJsonResponseObject: {}
    }
  },
  methods: {
    closeSideBar () {
      const showStatus = $('#navbarNav').hasClass('show')
      if (showStatus) {
        $('#navbarNav').removeClass('show')
      }
    },
    ...mapActions(['getNavBarList']),
    // 在store/index.js
    sideBarShowEvent (status) {
      this.$store.commit('sideBarShowEvent', status)
    },
    productdetail (id) {
      // catch error 判斷是否點到同一頁 true reload
      let categoryId = id
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
  },
  computed: {
    ...mapState({
      totalCategory: state => state.navbarModules.totalCategory,
      categoryId: state => state.navbarModules.categoryId,
      totalProduct: state => state.navbarModules.totalProduct,
      sideBarShow: state => state.sideBarShow,
      productEnCategory: state => state.navbarModules.productEnCategory
    })
  },
  created () {
    const vm = this
    // 取下拉選單內容
    vm.getNavBarList()
    // 檢查local storage 是否有內容，登入過會有內容，有登入過navbar 上方顯示方式直接顯示
    // vm.checkToken()
  }
}
</script>

<style lang="scss" scoped>
  .topNav{
    height: 80px;
    align-items:center;
    background: white;
    width: 100%;
    display: flex;
    .xBox{
      display: none;
    }
  }
  @media(max-width: 641px){
    label.hamburger{
      display: initial;
    }
    .topNav{
      display: none;
      flex-direction: column;
      height: 100vh;
      width: 50vw;
      align-items: flex-start;
      padding: 16px;
      box-sizing: border-box;
      position: fixed;
      top:0;
      left:0;
      background: white;
      &.show{
        display: flex;
      }
      a.home{
        width: 100%;
        text-align: center;
      }
      img{
        max-width: 60%;
      }
      .xBox{
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid black;
        position:absolute;
        display: flex;
        justify-content:center;
        align-items:center;
        right:10px;
        top: 10px;
      }
    }
    #tpx-basket-bar .tpx-bar-container{
      width: 80vw;
      overflow: scroll;
      height: 100vh;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    #tpx-basket-bar .darkBg{
      width: 20vw;
      background: rgba(0,0,0,.4);
      height: 100vh;
      position: absolute;
      top:0;
      bottom:0;
      right:0;
    }
  }
  // item 設定
  .item{
    color:black;
    font-weight: bold;
    margin-left: 45px;
    font-size: 15px;
    &.register,&.login,&.myItem{
      cursor: pointer;
      display: flex;
    }
    &.register{
      margin-left: auto;
    }
    &.allProd{
      position:relative;
      cursor: pointer;
      height: 100%;
    }
    &.saledHelp,&.aboutUs,&.contactUs{
      display: none;
    }
    &.allProd.deskTop{
      display: flex;
    }
  }
  @media(max-width: 641px){
    .item.register{
      margin-left: 0;
    }
    .item.allProd{
      height: auto;
    }
    .item{
      margin-left: 0;
      padding-top : 16px;
      padding-bottom: 16px;
      box-sizing: border-box;
      width: 100%;
      border-bottom: 2px solid hsla(0,0%,50.2%,.4);
      &.saledHelp,&.aboutUs,&.contactUs{
        display: initial;
      }
      &.allProd.deskTop{
        display: none;
      }
      &.register,&.login,&.myItem{
        display: initial;
      }
    }
  }
  .dropDownMenu{
    position: absolute;
    top: 100%;
  }
  .item.allProd:hover{
    .dropDownMenu{
      display: block;
    }
  }
  .dropDownMenu{
    display: none;
    min-width: 35rem;
    padding: 0 16px;
    box-sizing: border-box;
    left: -222px;
    top: calc(100% - 2px);
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
    color: black;
    &::before{
      display:block;
      content: "";
      width: 20px;
      height: 20px;
      border-bottom: solid 10px #fefefe;
      border-left: solid 10px transparent;
      border-right: solid 10px transparent;
      position: absolute;
      top: -20px;
      left: calc(50% - 16px);
      z-index: 100000;
    }
    &::after{
      display:block;
      content: "";
      width: 20px;
      height: 20px;
      border-bottom: solid 11px rgba(0,0,0,.3);
      border-left: solid 11px transparent;
      border-right: solid 11px transparent;
      position: absolute;
      top: -21px;
      left: calc(50% - 17px);
      z-index: 1;
    }
    .itemHover{
      color:black;
    }
    .itemHover:hover{
      color: rgba(0,0,0,.3);
    }
  }
  // 漢堡選單按鈕
  label.hamburger{
    display: none;
    width: 15px;
    height: 0;
    border-top: 2px solid black;
    position: relative;
    margin-bottom: 0;
    &::before{
      content:'';
      display:block;
      width: 15px;
      position: absolute;
      top:-8px;
      border-top:2px solid black;
    }
    &::after{
      content:'';
      display:block;
      width: 15px;
      position: absolute;
      top: 5px;
      border-top: 2px solid black;
    }
  }
  .logoBox{
    display: none;
  }
  @media(max-width: 640px){
    label.hamburger{
      display: initial;
      position: absolute;
      left: 10px;
      top: 50%;
      height: 30px;
      margin-top: 0;
    }
    .logoBox{
      display: initial;
      text-align: center;
      width: 100%;
      padding: 16px 0;
      background : white;
    }
  }
  // 側邊欄項目樣式
  .navItem{
    display:block;
    width: 100%;
    padding: 16px 0;
    border-bottom: 2px solid rgba(128,128,128, .4);
    box-sizing: border-box;
  }

  .fa-chevron-up{
    display: none;
  }
  .allProdItemBox{
    display: none;
  }
  #allProd:checked~label[for="allProd"]{
    &>.fa-chevron-up{
      display: initial;
      color:rgba(128,128,128, .4);
    }
    &>.fa-chevron-down{
      display: none;
    }
    &~.allProdItemBox{
      display: block;
      width: 100%;
    }
  }
  .allProdItemDetailItem{
    display:none;
  }
  .allProdItemDetail:checked{
    &~label{
      color: rgba(128,128,128, .4);
      &>.fa-chevron-down{
        display: none;
      }
      &>.fa-chevron-up{
        display: block;
      }
    }
    &~.allProdItemDetailItem{
      display:block;
    }
  }
  // sidebarbox
  @media(min-width: 641px){
    .sidebarBox{
      display: none;
    }
  }
</style>
