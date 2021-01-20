<template lang="pug">
  #tpx-basket-bar.row.justify-content-between.align-items-center.tpx.mx-0.py-0.border-bottom-0.topNavBox
    label.hamburger(for="hamburger" @click="sideBarShowEvent(true)") <i class="fas fa-bars"></i>
    router-link.logoBox(to="/")
      img.logo(src="../assets/img/logo-big.png")
    //- 大於 640 秀的畫面
    .darkBg(v-if="sideBarShow" @click="sideBarShowEvent(false)"  @touchmove.prevent="")
    div.tpx.tpx-bar-container.tpx-clearfix.topNav(id="tpx-basket-bar-inner" :class="{'show' : sideBarShow}")
      //- div.xBox(@click="sideBarShowEvent(false)")
      //-   i.fas.fa-times
      router-link(to="/").home
        img(src="../assets/img/logo-big.png")
      //- desk top 所有產品
      div.item.allProd.mb-0.align-items-center.deskTop 所有產品
        .dropDownMenu.bg-white.px-3
          .text-decoration-none.row
            .col-md-4.py-3(v-for="(item,idx) in totalCategory")
              .d-flex.flex-column
               p( @click.prevent="productdetail(categoryId[idx])" v-if="eachCategoryNumber[idx] > 1").text-decoration-none.mb-2.itemHover {{item}} {{productEnCategory[idx]}}
               p(v-else @click.prevent="standard(eachCategoryProduct[idx][0])").text-decoration-none.mb-2.itemHover {{item}} {{productEnCategory[idx]}}
               p.text-decoration-none.pl-3.mb-2.itemHover(v-for="item1 in totalProduct" v-if="item1.productCategory === item" :key="item1.productId" @click.prevent="standard(item1.productId)") - {{item1.productName}}
      div.item.allProd.mb-0.align-items-center.deskTop(v-if="styleOpen") 設計品牌館
        .styleDropDownMenu.bg-white.px-3
          .text-decoration-none.row
            .col-12.py-3(v-for="(item,idx) in totalDesignCategory")
              .d-flex.flex-column
                //- p.text-decoration-none.mb-2.itemHover {{item}}
                router-link.text-decoration-none.pl-3.mb-2.itemHover(v-for="item1 in totalDesign" v-if="item1.groupcode === item" :key="item1.productId" :to="'/designer/' + item1.id + '/' + item1.designerId") - {{item1.designerName}}

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
              p(@click.prevent="productdetail(categoryId[idx])" v-if="eachCategoryNumber[idx] > 1").font-weight-bold.pl-3.py-2.mb-0.allProdItemDetailItem.fz14.text-decoration.none.text-dark <span @click="sideBarShowEvent">{{item}}</span>
              p(v-else @click.prevent="standard(eachCategoryProduct[idx][0])").font-weight-bold.pl-3.py-2.mb-0.allProdItemDetailItem.fz14.text-decoration.none.text-dark <span @click="sideBarShowEvent">{{item}}</span>
              p.mb-0.font-weight-bold.pl-3.py-2.allProdItemDetailItem.fz14.text-decoration-none.text-dark( v-for="(item1,idx1) in totalProduct" :key="idx1" v-if="item1.productCategory === item" @click.prevent="standard(item1.productId)") - <span >{{item1.productName}}</span>
          //- 設計師品牌館
          <input type="checkbox" id="designer" class="d-none">
          label(for="designer").navItem.font-weight-bold.align-items-center.mb-0.d-flex 設計品牌館<i class="fas fa-chevron-down ml-auto"></i><i class="fas fa-chevron-up ml-auto"></i>
          .allProdItemBoxDesigner.w-100
            .navItem.font-weight-bold.allProdItem( v-for="(item,idx) in totalDesignCategory" )
              .flex-column.allProdItemDetailItem
                span.text-decoration-none.pl-3.mb-2.itemHover.text-dark(v-for="item1 in totalDesign" v-if="item1.groupcode === item" :key="item1.productId" :to="'/designer/' + item1.id + '/' + item1.designerId" @click="designer(item1.id,item1.designerId)") - {{item1.designerName}}
      label(@click="$router.push('/serviceContent'); $store.state.sideBarShow = false").item.helpCenter.mb-0.align-items-center 幫助中心
      label(@click="$router.push(`/activity/${activityId}`); $store.state.sideBarShow = false" v-if="activityOpen").item.helpCenter.mb-0.align-items-center.activity 抽獎活動
      //- label.mb-0.ml-3(data-toggle="modal" data-target="#loginModal") SSO登入測試
      router-link(to="/aboutYFP").text-dark.item.aboutUs.mb-0.align-items-center.text-decoration-none 關於我們
      label(@click="$router.push('/serviceContent/contactus'); $store.state.sideBarShow = false").item.contactUs.mb-0.align-items-center 聯絡我們

      //- taopix 自動帶字 登入測試中
      //- 登入後
      //- 桌機
      //- label.mb-0.align-items-center.login.h-100.afterLoginBox(v-if="mawebhlbr")
      //-   .font-weight-bold.text-decoration-none.justify-content-center.align-items-center.afterLogin
      //-     span.memberCenter 會員中心
      //-     .w-100.afterLoginDropDown.flex-column.align-items-center
      //-       a.font-weight-bold.text-decoration-none.mb-3.itemHover.myAccount(onClick="tpxHighLevelRegisterInitControl(); return false;" id="tpx-register")
      //-       a(@click="$router.push('/invoice'); $store.state.sideBarShow = false").text-decoration-none.itemHover.invoiceSearch 發票查詢
      //- //- 登入前
      //- label.item.register.mb-0.align-items-center(v-else)
      //-   a.font-weight-bold.text-decoration-none(onClick="tpxHighLevelRegisterInitControl(); return false;" id="tpx-register")
      //- label.item.login.mb-0.align-items-center
      //-   a.font-weight-bold.text-decoration-none(id="tpx-signIn" onClick="tpxHighLevelSignInInitControl(); return false;")
      //- label.item.myItem.mb-0.align-items-center.tpx.tpx-accountLinkItem(id="tpx-projectslinkli")
      //-   span(id="tpx-projectslist" onclick="tpxMyProjectsOnClick(); return false;")
      //- div.item.myItem.mb-0.align-items-center.tpx
      //-   .tpx(id="tpx-basketButtonWrapper")
      //-     p.mb-0.tpx.tpx-button.tpx-basketButton(id="tpx-basketlink" onclick="tpxBasketOnClick(); return false;")
      //-       span.tpx.tpx-basketCount(id="tpx-basketButtonCount")

      //- taopix 自動帶字 登入測試中
      //- 登入後
      //- 桌機
      label.mb-0.align-items-center.login.h-100.afterLoginBox(v-if="mawebhlbr")
        .font-weight-bold.text-decoration-none.justify-content-center.align-items-center.afterLogin
          span.memberCenter 會員中心
          .w-100.afterLoginDropDown.flex-column.align-items-center
            a.font-weight-bold.text-decoration-none.mb-3.itemHover.myAccount(onClick="tpxHighLevelRegisterInitControl(); return false;" id="tpx-register")
            a(@click="$router.push('/invoice'); $store.state.sideBarShow = false").text-decoration-none.itemHover.invoiceSearch 發票查詢
      //- 登入前
      label.item.register.mb-0.align-items-center(v-else)
        a.font-weight-bold.text-decoration-none(onClick="tpxHighLevelRegisterInitControl(); return false;" id="tpx-register")

      //- 登入登出Taopix按鈕
      label.item.login.mb-0.align-items-center()
        a.font-weight-bold.text-decoration-none(id="tpx-signIn" @click="signInControl")
      //- 我的作品
      label.item.myItem.mb-0.align-items-center.tpx.tpx-accountLinkItem(id="tpx-projectslinkli")
        span(id="tpx-projectslist" onclick="tpxMyProjectsOnClick(); return false;")
      //- 購物車
      div.item.myItem.mb-0.align-items-center.tpx
        .tpx(id="tpx-basketButtonWrapper")
          p.mb-0.tpx.tpx-button.tpx-basketButton(id="tpx-basketlink" onclick="tpxBasketOnClick(); return false;")
            span.tpx.tpx-basketCount(id="tpx-basketButtonCount")

    //- <!-- My Projects pop out panel -->
    //- loginmodal
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
        button.btn.btn-secondary(onClick="tpxMyProjectsOnClick()") X
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
      a(onclick="tpxBasketOnClick()" class="tpx tpx-button tpx-checkout-button bg-secondary mt-1 text-light" id="tpx-checkoutbutton") 關閉
    </div>

</template>

<script>
import loginmodal from './loginmodal'
import {mapState, mapActions} from 'vuex'
export default{
  components: {
    loginmodal
  },
  props: ['viewportWidth'],
  data () {
    return {
      // sideBarShow: false,
      pJsonResponseObject: {},
      login: null,
      mawebhlbr: null,
      activityId: null,
      styleOpen: null,
      activityOpen: null
    }
  },
  methods: {
    signInControl () {
      let vm = this
      if (vm.mawebhlbr) {
        // 登出
        vm.mawebhlbr = !vm.mawebhlbr
        window.tpxDeleteCookie('mawebhlbr')
      } else {
        // 登入
        window.tpxHighLevelSignInInitControl()
      }
    },
    closeSideBar () {
      const showStatus = $('#navbarNav').hasClass('show')
      if (showStatus) {
        $('#navbarNav').removeClass('show')
      }
    },
    ...mapActions(['getNavBarList', 'getBrandList']),
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
      this.$store.commit('sideBarShowEvent', false)
    },
    standard (id) {
      // catch error 判斷是否點到同一頁 true reload
      this.$router.push(`/standard/${id}`).catch(err => {
        if (err.name === 'NavigationDuplicated') window.location.reload()
      })
      this.$store.commit('sideBarShowEvent', false)
      // window.location.reload()
    },
    designer (id, designerId) {
      this.$router.push(`/designer/${id}/${designerId}`).catch(err => {
        if (err.name === 'NavigationDuplicated') window.location.reload()
      })
      this.$store.commit('sideBarShowEvent', false)
    }
  },
  computed: {
    ...mapState({
      totalCategory: state => state.navbarModules.totalCategory,
      eachCategoryNumber: state => state.navbarModules.eachCategoryNumber,
      categoryId: state => state.navbarModules.categoryId,
      totalProduct: state => state.navbarModules.totalProduct,
      sideBarShow: state => state.sideBarShow,
      productEnCategory: state => state.navbarModules.productEnCategory,
      eachCategoryProduct: state => state.navbarModules.eachCategoryProduct,
      // 設計品牌館
      totalDesign: state => state.navbarModules.totalDesign,
      totalDesignCategory: state => state.navbarModules.totalDesignCategory
    })
  },
  created () {
    const vm = this
    // 取下拉選單內容
    vm.getNavBarList()
    vm.getBrandList()
    // 活動畫面埋時間判斷id
    let d = Date.now()
    let activityDueDate = window.activity_due_date
    let date = new Date(activityDueDate).getTime()

    if (d < date) {
      vm.activityId = 1
    } else {
      vm.activityId = 2
    }
    // 設計師品牌館是否開啟
    vm.styleOpen = window.style_open
    vm.activityOpen = window.activity_open
  },
  mounted () {
    let vm = this
    let newPromise = new Promise((resolve, reject) => {
      // 傳入 resolve 與 reject，表示資料成功與失敗
      let ran = window.tpxHighLevelBasketInitialise() // 隨機成功或失敗
      if (ran) {
        resolve(ran)
      }
    })
    newPromise.then(data => {
      if (data === 'finish') {
        let ca = document.cookie.split(';')
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i]
          if (c.charAt(0) === ' ') {
            c = c.substring(1, c.length)
          }
          if (c.indexOf('mawebhlbr') < 0) {
            vm.login = false
          } else {
            vm.mawebhlbr = true
            break
          }
        }
      }
    })
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
    font-family: 'Noto Serif TC', serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;;
    .xBox{
      display: none;
    }
  }
  .home{
    max-width:220px;
    img{
      width:100%;
    }
  }
  @media(max-width: 641px){
    label.hamburger{
      display: initial;
      font-size: 20px;
    }
    .topNav{
      // display: none;
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
      transform: translateX(-80vw);
      &.show{
        display: flex;
      }
      a.home{
        width: 100%;
        text-align: center;
      }
      img{
        max-width: 100%;
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
      transform: translateX(-80vw);
      &::-webkit-scrollbar {
        display: none;
      }
      &.show{
        transform: translateX(0vw);
        transition: transform 1s;
        z-index: 49;
        padding-bottom: 80px;
      }
    }
    #tpx-basket-bar .darkBg{
      width: 100%;
      background: rgba(0,0,0,.4);
      height: 100vh;
      position: absolute;
      top:0;
      bottom:0;
      right:0;
      z-index:48;
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
    &.helpCenter{
      cursor: pointer;
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
    .styleDropDownMenu{
      display:block;
    }
  }
  .dropDownMenu{
    display: none;
    min-width: 41rem;
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
      left: calc(50% - 90px);
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
      left: calc(50% - 91px);
      z-index: 1;
    }
    .itemHover{
      color:black;
      font-family: 'Noto Serif TC', serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    }
    .itemHover:hover{
      color: rgba(0,0,0,.3);
    }
  }
  .styleDropDownMenu{
    position: absolute;
    top: 100%;
  }
  .styleDropDownMenu{
    display: none;
    min-width: 11rem;
    max-width: 42rem;
    padding: 0 16px;
    box-sizing: border-box;
    left: -50%;
    top: calc(100% - 2px);
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
    color: black;
    white-space: nowrap;
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
      left: calc(50% - 11px);
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
      left: calc(50% - 12px);
      z-index: 1;
    }
    .itemHover{
      color:black;
      font-family: 'Noto Serif TC', serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;;
    }
    .itemHover:hover{
      color: rgba(0,0,0,.3);
    }
  }
  // 漢堡選單按鈕
  label.hamburger{
    display: none;
    width: 20px;
    height: 0;
    // border-top: 2px solid black;
    position: relative;
    margin-bottom: 0;
  }
  .logoBox{
    display: none;
  }
  @media(max-width: 640px){
    label.hamburger{
      display: initial;
      position: absolute;
      left: 10px;
      top: 35%;
      height: 30px;
      margin-top: 0;
    }
    .logoBox{
      display: initial;
      text-align: center;
      width: 100%;
      padding: 16px 0;
      background : white;
      // z-index:98;
      img{
        max-width: 220px;
      }
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
  // 設計師
  .allProdItemBoxDesigner{
    display:none;
    .allProdItemDetailItem{
      display:flex;
    }
  }
  #designer:checked~label[for="designer"]{
    &>.fa-chevron-up{
      display: initial;
      color:rgba(128,128,128, .4);
    }
    &>.fa-chevron-down{
      display: none;
    }
    &~.allProdItemBoxDesigner{
      display: block;
      width: 100%;
    }
  }
  // sidebarbox
  @media(min-width: 641px){
    .sidebarBox{
      display: none;
    }
  }
  // 活動
  .activity{
    color:#f24f55;
  }

  // 登入後的夏拉
  @media(max-width:641px){
    .afterLogin{
      .memberCenter{
        display: none;
      }
    }
    .afterLoginBox{
      margin-left: 0;
      padding-top : 16px;
      padding-bottom: 16px;
      box-sizing: border-box;
      width: 100%;
      border-bottom: 2px solid hsla(0,0%,50.2%,.4);
      justify-content: flex-start;
    }
  }

  @media(max-width: 641px){
    .afterLoginDropDown{
      display:block;
      a{
        display: block;
        color:black;
      }
      .myAccount{
        padding-bottom: 16px;
        border-bottom: 2px solid hsla(0,0%,50.2%,.4);
      }
      .invoiceSearch{
        margin-top: 16px;
      }
    }
  }
  @media(min-width: 640px){
    .afterLogin{
      min-width: 122px;
      position:relative;
      display:flex;
      height:100%;
      cursor: pointer;
      &:hover{
        .afterLoginDropDown{
          display: flex;
          padding:16px;
        }
      }
    }
    .afterLoginBox{
      display: flex;
      margin-left: auto;
      justify-content: center;
    }
    .afterLoginDropDown{
      display:none;
      position:absolute;
      left:0;
      background: white;
      top: calc(100% - 2px);
      border: 1px solid rgba(0,0,0,.15);
      border-radius: .25rem;
      .itemHover{
        color:black;
        cursor:pointer;
      }
      .itemHover:hover{
        color: rgba(0,0,0,.3);
      }
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
        left: calc(50% - 10px);
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
        left: calc(50% - 11px);
        z-index: 1;
      }
    }
  }

</style>
