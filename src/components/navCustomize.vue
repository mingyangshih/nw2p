<template lang="pug">
  .px-3.py-2(v-if="viewportWidth <= 640" id="tpx-basket-bar")
    .topBox.d-flex.align-items-center.justify-content-between(id="tpx-basket-bar-inner")
      label.hamburger(for="hamburger")
      router-link.d-block(to="/")
        img.logo(src="../assets/img/logo.png")
      img.cart(src="../assets/img/home/supermarket.svg" v-if="viewportWidth <= 640")
    input#hamburger.d-none(type="checkbox")
    //- 點hambur才會秀出來
    .sidebarBox
      .sidebar.d-flex.flex-column.align-items-center.pt-3.px-3
        label(for="hamburger")
          <i class="fas fa-times"></i>
        img.logo.mb-3(src="../assets/img/logo.png")
        .hr
        router-link(to="/").navItem.text-decoration-none.text-dark.font-weight-bold 首頁
        <input type="checkbox" id="allProd" class="d-none">
        label(for="allProd").navItem.font-weight-bold.align-items-center.mb-0 所有產品<i class="fas fa-chevron-down ml-auto"></i><i class="fas fa-chevron-up ml-auto"></i>
        .allProdItemBox
          .navItem.font-weight-bold.allProdItem( v-for="(item,idx) in totalCategory" )
            input.allProdItemDetail.d-none(type="checkbox" :id="idx")
            label.d-flex(:for="idx").mb-0 {{item}} <i class="fas fa-chevron-down ml-auto"></i><i class="fas fa-chevron-up ml-auto"></i>
            router-link(to="/productDetail").font-weight-bold.pl-3.py-2.allProdItemDetailItem.fz14.text-decoration.none.text-dark {{item}}
            router-link.font-weight-bold.pl-3.py-2.allProdItemDetailItem.fz14.text-decoration-none.text-dark( v-for="(item1,idx1) in totalProduct" :key="idx1" v-if="item1.productCategory === item" :to="'/standard/'+item1.productId") - {{item1.productName}}
        .navItem.font-weight-bold 幫助中心
        .navItem.font-weight-bold 關於我們
        .navItem.font-weight-bold 售後服務
        .navItem.font-weight-bold 聯絡我們
        .navItem
          a.font-weight-bold.text-decoration-none(href="#" onClick="tpxHighLevelRegisterInitControl()" id="tpx-register")
            <span class="text-primary bar">|</span> Register
        .navItem
          a.font-weight-bold.text-decoration-none(href='#' id="tpx-signIn" onClick="tpxHighLevelSignInInitControl()") Sign In
        .navItem(id="tpx-projectslinkli")
          a.font-weight-bold(href="#" id="tpx-projectslist" onClick="tpxMyProjectsOnClick()") My Projects
        .navItem(id="tpx-basketButtonWrapper")
          a.tpx.tpx-button.tpx-basketButton(href="#" id="tpx-basketlink" onClick="tpxBasketOnClick()")
            span.tpx.tpx-basketCount(id="tpx-basketButtonCount") 0
            span.tpx.tpx-basketLabel Basket

        //- <!-- Basket pop out panel -->
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
        //- router-link(to="/modifyEnroll").navItem.font-weight-bold.text-decoration-none.text-dark(v-if="nw2pMemberData.token") 我的帳戶
        //- .navItem.font-weight-bold( v-if="nw2pMemberData.token" @click.prevent="logOut") 登出
        //- .navItem.font-weight-bold( data-toggle="modal" data-target="#loginModal" v-if="!nw2pMemberData.token") 登入
        //- .navItem.font-weight-bold(data-toggle="modal" data-target="#enrollModal" v-if="!nw2pMemberData.token") 註冊
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  props: ['viewportWidth'],
  computed: {
    ...mapState({
      totalCategory: state => state.navbarModules.totalCategory,
      totalProduct: state => state.navbarModules.totalProduct,
      nw2pMemberData: state => state.navbarModules.nw2pMemberData
    })
  },
  methods: {
    ...mapActions(['logOut', 'getNavBarList', 'checkToken'])
  },
  created () {
    const vm = this
    vm.getNavBarList()
  }
}
</script>

<style lang="scss" scoped>
  .fz14{
    font-size: 14px;
  }
// 漢堡選單按鈕
  label.hamburger{
    display: block;
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
  .cart{
    height: 16px;
  }
  .sidebarBox{
    transform: translateX(-1000px);
    height: 0;
    transition: transform 2s, background 5s;
    .logo{
      display: none;
    }
    .hr{
      display: none;
    }
    .fa-times{
      display: none;
    }
    .navItem, label.navItem{
      display: none;
    }
    .sidebar{
      display: none;
    }
  }
  // 點了秀出側邊攔
  input[type="checkbox"]:checked{
    &~.sidebarBox{
      transform: translateX(0);
      display: block;
      width: 100vw;
      background:rgba(0,0,0,.5);
      height: 100vh;
      position:fixed;
      top:0;
      left:0;
      z-index: 10;
        .sidebar{
          display:inherit;
          width: 80vw;
          height: 100vh;
          background: white;
          overflow-y: scroll;
          .logo{
            display: inherit;
            max-width: 60%;
          }
        }
        .navItem{
          display: inherit;
        }
        label.navItem{
          display: flex;
        }
        .fa-times{
          position: absolute;
          top: 2px;
          left: 75%;
          border: 1px solid black;
          width: 18px;
          height: 18px;
          display: flex;
          align-items:center;
          justify-content:center;
          border-radius: 50%;
          &:hover{
            background:black;
            color:white;
          }
        }
    }
  }
  // 水平線
  .hr{
    width: 100%;
    border-top: 2px solid black;
    display: inherit;
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
  // taopix
  @media only screen and (max-width: 780px){
    #tpx-projectlistcontents .tpx-shopping-cart, .tpx-projectlist {
        width: 100%;
        position:fixed;
        margin: 0 auto;
        left: 0 !important;
    }
  }
</style>
