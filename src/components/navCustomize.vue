<template lang="pug">
  .row.align-items-center.px-3.py-2(v-if="viewportWidth <= 640")
    label(for="hamburger")
    input#hamburger.d-none(type="checkbox")
    router-link.navbar-brand.d-block.mx-auto(to="/")
      img.logo(src="../assets/img/logo.png")
    .cartBox
      img.cart(src="../assets/img/home/supermarket.svg" v-if="viewportWidth <= 640")

    //- 點hambur才會秀出來
    .sidebarBox
      .sidebar.d-flex.flex-column.align-items-center.pt-3.px-3
        <i class="fas fa-times"></i>
        img.logo.mb-3(src="../assets/img/logo.png")
        .hr
        .navItem.text-decoration-none.text-dark.font-weight-bold 首頁
        label(for="allProd").navItem.font-weight-bold.d-flex.align-items-center.mb-0 所有產品<input type="checkbox" id="allProd" class="d-none"><i class="fas fa-chevron-down ml-auto"></i><i class="fas fa-chevron-up ml-auto"></i>
        .navItem.font-weight-bold 幫助中心
        .navItem.font-weight-bold 關於我們
        .navItem.font-weight-bold 售後服務
        .navItem.font-weight-bold 聯絡我們
        .navItem.font-weight-bold 我的帳戶
        .navItem.font-weight-bold 登出
        .navItem.font-weight-bold 登入
        .navItem.font-weight-bold 註冊
</template>

<script>
export default {
  props: ['viewportWidth']
}
</script>

<style lang="scss" scoped>
// 漢堡選單按鈕
  label[for="hamburger"]{
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
    display:none;
  }
  // 點了秀出側邊攔
  input[type="checkbox"]:checked{
    &~.sidebarBox{
      display: block;
      width: 100vw;
      background:rgba(0,0,0,.5);
      height: 100vh;
      overflow-y: scroll;
      position:fixed;
      top:0;
      left:0;
      z-index: 100000;
        .sidebar{
          width: 80vw;
          height: 100vh;
          background: white;
          .logo{
            max-width: 60%;
          }
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
  }
  // 側邊欄項目樣式
  .navItem{
    display:block;
    width: 100%;
    padding: 16px 0;
    border-bottom: 2px solid rgba(128,128,128, .4);
    box-sizing: border-box;
  }
  [class~='navItem']:nth-child(8) {
    border-color: black;
  }
  // 所有產品樣式切換
  input#allProd{
    &~.fa-chevron-up{
      display: none;
    }
  }
  input#allProd:checked{
    &~.fa-chevron-up{
      display: initial;
      color:rgba(128,128,128, .4);
    }
    &~.fa-chevron-down{
      display: none;
    }
  }
</style>
