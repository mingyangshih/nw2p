<template lang="pug">
  .row.justify-content-between(v-if="viewportWidth > 640")
        nav.navbar.navbar-expand-md.navbar-light.bg-white.d-flex.w-100(:class="{'py-0' : viewportWidth > 640, 'py-3' : viewportWidth <= 640}")
          button.navbar-toggler.border-0.p-0(type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation')
            //- span.navbar-toggler-icon
            .icon-bar
            .icon-bar
            .icon-bar
            //- <i class="fas fa-bars" style="color:rgb(92,135,167); font-size:16px;"></i>
          router-link.navbar-brand.d-block.mr-0(to="/")
            img.logo(src="../assets/img/logo.png")
          img.cart(src="../assets/img/home/supermarket.svg" v-if="viewportWidth <= 640")
          #navbarNav.collapse.navbar-collapse(:class="{'h-100' : viewportWidth > 640}")
            //- sidebar logo
            .d-flex.align-items-center.w-100(:class="{'flex-column' : viewportWidth <= 640, 'h-100' : viewportWidth > 640}")
              .d-flex.justify-content-center.align-items-center.w-75.py-3.logoBox(v-if="viewportWidth <= 640")
                img.logo(src="../assets/img/logo.png")
                <i class="fas fa-times" @click.stopPropagation="closeSideBar"></i>
              ul.navbar-nav(:class="{'h-100' : viewportWidth > 640, 'align-items-center' : viewportWidth > 640}")
                li.nav-item.pr-lg-5.ml-md-5(@click="closeSideBar" v-if="viewportWidth <= 640")
                  router-link.nav-link.font-weight-bold(to="/") 首頁
                li.nav-item.dropdown.ml-md-5(:class="{'d-flex' : viewportWidth > 640,'h-100' : viewportWidth > 640,'align-items-center' : viewportWidth > 640}")
                  a.nav-link.font-weight-bold(href='#' data-toggle="dropdown") 所有產品
                  .dropdown-menu.py-0(aria-labelledby='navbarDropdown')
                    .row.px-md-3
                      a.dropdown-item.py-md-3.font-weight-bold.text-center.col-md-4(href='#' v-for="(item,idx) in totalCategory")
                        label.d-flex.align-items-center.font-weight-bold.text-left(:for="item" :class="{'text-gray':viewportWidth <= 640 && sideBarShow.indexOf(item) >= 0}") <router-link to="/productDetail" class="text-decoration-none">{{item}}</router-link><i class="fas fa-chevron-down ml-auto" v-if="viewportWidth <= 640 && sideBarShow.indexOf(item) < 0"></i><i class="fas fa-chevron-up ml-auto" v-if="viewportWidth <= 640 && sideBarShow.indexOf(item) >= 0"></i>
                        input.d-none(type="checkbox" :id="item" :value="item" v-model="sideBarShow")
                        ul.pl-3(:class="{'d-none' : viewportWidth <= 640 && sideBarShow.indexOf(item) < 0}")
                          li.fz15.mb-2(v-for="item1 in totalProduct" v-if="item1.productCategory === item")
                            router-link.text-decoration-none.text-dark(:to="'/standard/'+item1.productId") - {{item1.productName}}
                li.nav-item.pr-lg-5.ml-md-5(@click="closeSideBar")
                  a.nav-link.font-weight-bold(href='#') 幫助中心
                li.nav-item.pr-lg-5.ml-md-5(@click="closeSideBar" v-if="viewportWidth <= 640")
                  a.nav-link.font-weight-bold(href='#') 關於我們
                li.nav-item.pr-lg-5.ml-md-5(@click="closeSideBar" v-if="viewportWidth <= 640")
                  a.nav-link.font-weight-bold(href='#') 售後服務
                li.nav-item.pr-lg-5.ml-md-5(@click="closeSideBar" v-if="viewportWidth <= 640")
                  a.nav-link.font-weight-bold(href='#') 聯絡我們
                //- 沒註冊前顯示
                li.nav-item.boder-sm-left.ml-md-auto(v-if="!nw2pMemberData.token")
                  //- a.nav-link.font-weight-bold(href='#' data-toggle="modal" data-target="#enrollModal") <span class="text-primary bar" v-if="viewportWidth > 640">|</span> 註冊
                  a.nav-link.font-weight-bold(href='#' @click="tpxHighLevelRegisterInitControl") <span class="text-primary bar" v-if="viewportWidth > 640">|</span> 註冊
                li.nav-item.font-weight-bold(v-if="!nw2pMemberData.token")
                  a.nav-link.font-weight-bold(href='#' data-toggle="modal" data-target="#loginModal") <span class="text-primary" v-if="viewportWidth > 640">|</span> <i class="fas fa-user-circle mr-2 text-primary" v-if="viewportWidth > 913"></i>登入
                //- 註冊後顯示
                li.nav-item.boder-sm-left.ml-md-auto(v-if="nw2pMemberData.token && viewportWidth > 640")
                  a.nav-link.font-weight-bold(href='#') Hi {{nw2pMemberData.UDNAME}} !
                li.nav-item.boder-sm-left.h-100.d-flex.align-items-center.myAccount(v-if="nw2pMemberData.token && viewportWidth > 640")
                  router-link.nav-link.font-weight-bold.px-md-2(to="/modifyEnroll") <span class="text-primary bar">|</span> 我的帳戶
                  .myAccountBox
                    ul
                      li.font-weight-bold.py-2
                        router-link(to="/modifyEnroll").text-decoration-none 我的帳戶
                      li.py-2
                        router-link(to="/modifyEnroll").text-decoration-none -資料修改
                      li.py-2
                        router-link(to="/modifyEnroll/changePassword").text-decoration-none -變更密碼
                      li.py-2 -我的訂單
                li.nav-item.font-weight-bold(v-if="nw2pMemberData.token" @click.prevent="logOut")
                  a.nav-link.font-weight-bold(href="#") <span class="text-primary" v-if="viewportWidth > 640">|</span> <i class="fas fa-user-circle mr-2 text-primary" v-if="viewportWidth > 913"></i>登出
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default{
  props: ['viewportWidth'],
  data () {
    return {
      sideBarShow: []
    }
  },
  methods: {
    closeSideBar () {
      const showStatus = $('#navbarNav').hasClass('show')
      if (showStatus) {
        $('#navbarNav').removeClass('show')
      }
    },
    ...mapActions(['logOut', 'getNavBarList', 'checkToken'])
  },
  computed: {
    ...mapState({
      totalCategory: state => state.navbarModules.totalCategory,
      totalProduct: state => state.navbarModules.totalProduct,
      nw2pMemberData: state => state.navbarModules.nw2pMemberData
    })
  },
  mounted () {
    $('.dropdown-menu').on('click', function (event) {
      event.stopPropagation()
    })
    $('.dropdown-item').on('click', function (event) {
      event.stopPropagation()
    })
  },
  created () {
    const vm = this
    // 取下拉選單內容
    vm.getNavBarList()
    // 檢查local storage 是否有內容，登入過會有內容，有登入過navbar 上方顯示方式直接顯示
    vm.checkToken()
    // tpxHighLevelBasketInitialise()
  }
}
</script>

<style lang="scss" scoped>
.fz12{
  font-size: 12px;
}
.fz15{
  font-size: 15px;
}
.icon-bar{
  height: 2px;
  background: #333333;
  width: 16px;
  &:nth-child(2){
    margin-top: 4px;
  }
  &:nth-child(3){
    margin-top: 4px;
  }
}
.navbar{
  height: 80px;
  box-sizing: border-box;
}
.navbar-nav{
  font-family: Arial, Helvetica,'Microsoft JhengHei', sans-serif !important;
}
@media(min-width: 640px){
  .navbar-nav{
    width: 100%;
  }
}
// @media(max-width: 640px){
//   .navbar-nav{
//     width: 75%;
//     .nav-item{
//       padding: 8px 0;
//       border-bottom: 1px solid #c1bfc1;
//       cursor: pointer;
//     }
//   }
// }
.navbar-brand{
  padding:0;
}
.logo{
  height: 40px;
}
.cart{
  height: 16px;
}
@media(min-width: 640px){
  .nav-link{
    text-align: center;
  }
}
// @media(max-width: 640px){
//   .nav-link{
//     text-align: left;
//     height: 50px;
//     display: flex;
//     align-items: center;
//   }
// }
// hamburger style
.navbar-light .navbar-toggler {
  border-color: rgb(92,135,167);
  border-width: 2px;
}
.navbar-light .navbar-nav{
  .nav-link{
    font-weight: bold;
    color:#000;
    padding: 0;
    min-width: 64px;
  }
}
.dropdown-item{
  padding: .25rem 0px;
  label{
    cursor:pointer;
  }
  li a {
    &:hover{
      opacity: .5;
    }
  }
}
// @media(max-width: 640px){
//   .dropdown-item{
//     border-bottom:1px solid #c1bfc1;
//     label{
//       margin-top: 8px;
//     }
//   }
//   .dropdown-item:last-child{
//     border-bottom:0px solid #c1b1f1;
//   }
// }
.dropdown-item:hover{
  background: none;
  color:black;
}
@media (width: 640px){
  .pl-md-3, .px-md-3 {
      padding-left: 0rem !important;
  }
}
// @media (max-width : 640px){
//   // 側邊下拉設定
//   .navbar-collapse{
//     position: fixed;
//     top: 0;
//     left: 0px;
//     width: 75%;
//     z-index: 1000;
//     background: white;
//     height: 100vh;
//     overflow-y:scroll;
//     scrollbar-width: none;
//     -ms-overflow-style: none;
//     &::-moz-scrollbar{
//       display: none;
//     }
//     &::-webkit-scrollbar {
//       display: none;
//     }
//     .logoBox{
//       border-bottom: 2px solid #333333;
//       position: relative;
//     }
//     .fa-times{
//       position: absolute;
//       right:-15%;
//       top:10px;
//       border: 1px solid gray;
//       border-radius: 50%;
//       width: 16px;
//       height: 16px;
//       font-size: 14px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       cursor: pointer;
//       &:hover{
//         background: #000;
//         color: white;
//       }
//     }
//   }
// }

.dropdown-menu{
  min-width: 35rem;
  padding: 0 16px;
  box-sizing: border-box;
  // 設定下拉位置
  left: -222px;
  top: calc( 100% - 2px);
  ul{
    padding-left: 0;
  }
  li{
    list-style-type: none;
    margin:0px;
    text-align: left;
  }
}
.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0; // remove the gap so it doesn't close
  background: #fefefe;
}
@media(min-width: 640px){
  .dropdown:hover .dropdown-menu::before {
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
  .dropdown:hover .dropdown-menu::after {
    display:block;
    content: "";
    width: 20px;
    height: 20px;
    border-bottom: solid 11px rgba(0,0,0,0.15);
    border-left: solid 11px transparent;
    border-right: solid 11px transparent;
    position: absolute;
    top: -21px;
    left: calc(50% - 17px);
    z-index: 1;
  }
}

// @media(max-width : 640px) {
//   .dropdown-menu{
//     min-width: auto;
//     border-width: 0;
//   }
// }
// for 640px
@media(width : 640px){
  .navbar-expand-md .navbar-collapse{
    display:none !important;
  }
  .navbar-expand-md .navbar-collapse.show{
    display:block !important;
  }
  .navbar-nav{
    display: flex;
    flex-direction: column;
  }
  .nav-item.ml-md-5,.nav-item.ml-md-auto{
    margin-left: 0 !important;
  }
  .dropdown-menu.show .row {
    flex-direction: column;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: static;
  }
  .navbar{
   justify-content: space-between;
  }
  // show hamburger button
  .navbar-expand-md .navbar-toggler {
    display: block;
  }
  //
  .dropdown-item.col-md-4{
    max-width: none;
  }
}
// --------------------------------------------我的帳號 樣式-------------------------------------
.myAccount{
  position: relative;
}
.myAccountBox{
  display: none;
}
.myAccount{
  &:hover{
    .myAccountBox{
      display: block;
      position: absolute;
      width: 200px;
      top:100%;
      left: -50%;
      z-index: 100000;
      background: white;
      border:2px solid black;
      a{
        color: black;
        &:hover{
          color: rgba(0,0,0,.5);
        }
      }
      ul{
        list-style: none;
        padding-left: 0;
        text-align: center;
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
        left: calc(50% - 16px);
        z-index: 100000;
      }
      &::after{
        display:block;
        content: "";
        width: 20px;
        height: 20px;
        border-bottom: solid 11px rgb(0,0,0);
        border-left: solid 11px transparent;
        border-right: solid 11px transparent;
        position: absolute;
        top: -21px;
        left: calc(50% - 17px);
        z-index: 1;
      }
    }
  }
}
</style>
