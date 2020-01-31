<template lang="pug">
.home
  .container-fluid
    .row.px-0.campaign.campaignBox.bg-primary
      p.mb-0.w-100.campaignDes 全商品8折優惠 / 20% OFF．滿499免運費
    .row.justify-content-center
      .col-sm-10
        nav.navbar.navbar-expand-lg.navbar-light.bg-white.d-flex.py-3
          a.navbar-brand.d-block.mr-0(href='#')
            img(src="../assets/img/logo.png")
          button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation')
            //- span.navbar-toggler-icon
            <i class="fas fa-bars" style="color:rgb(92,135,167); font-size:16px;"></i>
          #navbarNav.collapse.navbar-collapse
            ul.navbar-nav.w-100
              li.nav-item.px-lg-5
                a.nav-link.font-weight-bold.text-center(href='#') 首頁
              li.nav-item.dropdown.pr-lg-5
                a.nav-link.font-weight-bold.text-center(href='#' data-toggle="dropdown") 所有產品
                .dropdown-menu.py-0(aria-labelledby='navbarDropdown')
                  a.dropdown-item.py-3.photoBook.font-weight-bold.text-center(href='#') 相片書
                    .dropdownDetail
                      a.nav-link.w-100.px-4.py-3(href='#') 精裝相片書
                      .dropdown-divider.my-0
                      a.nav-link.w-100.px-4.py-3(href='#') 平裝相片書
                  .dropdown-divider.my-0
                  a.dropdown-item.py-3.font-weight-bold.text-center(href='#') 卡片類
                  .dropdown-divider.my-0
                  a.dropdown-item.py-3.font-weight-bold.text-center(href='#') 筆記本
              li.nav-item.pr-lg-5
                a.nav-link.font-weight-bold.text-center(href='#') 幫助中心
              li.nav-item.boder-sm-left.ml-lg-auto
                a.nav-link.font-weight-bold.text-center(href='#') <span class="text-primary bar">|</span> 註冊
              li.nav-item.font-weight-bold
                a.nav-link.font-weight-bold.text-center(href='#' data-toggle="modal" data-target="#exampleModal") <span class="text-primary">|</span> <i class="fas fa-user-circle mr-2 text-primary"></i>登入
    //- banner
    .row.px-0
      .col-sm-12.px-0
        img.w-100.firstBanner.img-fluid(src="../assets/img/home/banner.jpg")
    //- 第一層產品TITLE
    .row.letPhotoForever
      .col-sm-12.px-0.text-center
        h2.font-weight-bold.mb-0.text-secondary 一個理由，讓照片永存
  //- 首頁第一層產品介紹
  .container.letPhotoForeverProduct
    .row
      .col-lg-4.col-md-6.text-center
        .card()
          .imgBox
            img.card-img-top(src='../assets/img/home/a01.jpg' alt='相片書')
          .card-body
            h5.card-title.font-weight-bold.text-secondary 相片書
      .col-lg-4.col-md-6.text-center
        .card()
          .imgBox
            img.card-img-top(src='../assets/img/home/a02.jpg' alt='帆布袋')
          .card-body
            h5.card-title.font-weight-bold.text-secondary 帆布袋
      .col-lg-4.col-md-6.text-center
        .card()
          .imgBox
            img.card-img-top(src='../assets/img/home/a03.jpg' alt='T-shirt')
          .card-body
            h5.card-title.font-weight-bold.text-secondary T恤
      .col-lg-4.col-md-6.text-center.mt-lg-2
        .card()
          .imgBox
            img.card-img-top(src='../assets/img/home/a04.jpg' alt='T-shirt')
          .card-body
            h5.card-title.font-weight-bold.text-secondary 馬克杯
      .col-lg-4.col-md-6.text-center.mt-lg-2
        .card()
          .imgBox
            img.card-img-top(src='../assets/img/home/a05.jpg' alt='T-shirt')
          .card-body
            h5.card-title.font-weight-bold.text-secondary 明信片
      .col-lg-4.col-md-6.text-center.mt-lg-2
        .card()
          .imgBox
            img.card-img-top(src='../assets/img/home/a06.jpg' alt='T-shirt')
          .card-body
            h5.card-title.font-weight-bold.text-secondary 手機殼
  .container-fluid.bg-gray.secondBannerBox(style="position:relative;")
    .row
      .col-md-6.px-0.secondBanner
      .container-fluid
        .row.justify-content-end
          .col-md-6.px-0
            .secondBannerDes.pt-md-8.px-md-4
              p.mb-0.title.text-primary 只需簡單的步驟，
              p.mb-30.title.text-primary 完成您不簡單的作品
              .glasses.stepDesBox
                div.text-dark.d-flex.align-items-center
                  p.border.border-primary.num.mb-0.d-flex.justify-content-center.align-items-center.font-weight-bold.text-primary 1
                  p.mb-0.step.font-weight-bold.text-primary 選擇產品
                div.stepDes.text-white
                  p.text-white.stepDesContent.text-dark 我們提供多樣的客製化商品，您的回憶值得更有溫度的保存。
                div.text-dark.d-flex.align-items-center
                  p.border.border-primary.num.mb-0.d-flex.justify-content-center.align-items-center.font-weight-bold.text-primary 2
                  p.mb-0.step.font-weight-bold.text-primary 上傳照片
                div.stepDes.text-white.stepDesContent
                  p.text-white.text-dark 您的回憶有比電腦硬碟更好的去處，交給我們，讓它成為您生活的一部分。
                div.text-dark.d-flex.align-items-center
                  p.border.border-primary.num.mb-0.d-flex.justify-content-center.align-items-center.font-weight-bold.text-primary 3
                  p.mb-0.step.font-weight-bold.text-primary 編輯完成
                div.stepDes.text-white.stepDesContent
                  p.text-white.text-dark 我們的編輯器提供您完美、自由的操作體驗，只有您才能決定您生活的風格。
                .d-flex
                  button.btn.btn-primary.btnInPage.py-0.pr-0 <span class="font-weight-bold">馬上體驗</span> <i class="fas fa-chevron-right fa-xs"></i>
  .container-fluid
    .row.aChance
      h2.title.text-center.font-weight-bold.w-100.mb-0 一個機會，讓生活獨特
  .container-fluid
    .row
      .col-md-7.warmPhotoBook.bgSetting
      .col-md-4
        .under_second_banner_des_box_right
          .glasses
            p.font-weight-bold.text-dark.under_secondbanner_des_title 更有溫度的相片書
            p.under_secondbanner_des 還在用社群軟體分享照片嗎?
            p.under_secondbanner_des 您還有其他的選擇
            .d-flex
              button.btn.btn-primary.font-weight-bold.btnInPage.mt-5.pr-0.py-0 我要製作 <i class="fas fa-chevron-right fa-xs"></i>
  .container-fluid.mt-4
    .row
      .col-md-4
        .under_second_banner_des_box_left
          .glasses
            p.font-weight-bold.text-dark.under_secondbanner_des_title 更值得收藏的卡片
             p.under_secondbanner_des 寄一張您留戀的街道，
            p.under_secondbanner_des 給旅行時最惦記的人。
            .d-flex
              button.btn.btn-primary.font-weight-bold.btnInPage.mt-5.pr-0.py-0 我要製作 <i class="fas fa-chevron-right fa-xs"></i>
      .col-md-7.valuablePostCard.bgSetting
  .container-fluid.mt-4
    .row
      .col-md-7.lifeStuff.bgSetting
      .col-md-4
        .under_second_banner_des_box_right
          .glasses
            p.font-weight-bold.text-dark.under_secondbanner_des_title 生活雜貨
            p.under_secondbanner_des 花一整天在逛街找最滿意的馬克杯，
            p.under_secondbanner_des 不如花一小時做一件屬於自己的！
            .d-flex
              button.btn.btn-primary.font-weight-bold.btnInPage.mt-5.pr-0.py-0 我要製作 <i class="fas fa-chevron-right fa-xs"></i>
  .container-fluid.mt-4
    .row
      .col-md-4
        .under_second_banner_des_box_left
          .glasses
            p.font-weight-bold.text-dark.under_secondbanner_des_title 創意科技
            p.under_secondbanner_des 花一整天在逛街找最滿意的手機殼，
            p.under_secondbanner_des 不如花一小時做一件屬於自己的！
            .d-flex
              button.btn.btn-primary.font-weight-bold.btnInPage.mt-5.pr-0.py-0 我要製作 <i class="fas fa-chevron-right fa-xs"></i>
      .col-md-7.creativityTech.bgSetting
  .container-fluid.mt-4
    .row
      .col-md-7.clothes.bgSetting
      .col-md-4
        .under_second_banner_des_box_right
          .glasses
            p.font-weight-bold.text-dark.under_secondbanner_des_title 衣料織品
            p.under_secondbanner_des 花一整天在逛街找最滿意的T恤，
            p.under_secondbanner_des 不如花一小時做一件屬於自己的！
            .d-flex
              button.btn.btn-primary.font-weight-bold.btnInPage.mt-5.pr-0.py-0 我要製作 <i class="fas fa-chevron-right fa-xs"></i>
  .container-fluid.border-top.mt-30.footer
    footerComponent
  .container-fluid.bg-dark
    copyright
  //- modal
  #exampleModal.modal.fade(tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true')
      .modal-dialog(role='document')
        .modal-content.border-0.px-30
          .modal-header.border-bottom-0
            P#exampleModalLabel.modal-title.mb-0.font-weight-bold 登入帳號
            button.close(type='button' data-dismiss='modal' aria-label='Close')
              span(aria-hidden='true') &times;
          .modal-body.px-0
            input(type="text").form-control.fz14
            .form-group.mb-0
              input(:type="showPassword").form-control.my-3.fz14
              span.fz14.showPassword(v-if="showPassword === 'password'" @click="showPassword = 'text'") 顯示
              span.fz14.showPassword(v-if="showPassword === 'text'" @click="showPassword = 'password'") 隱藏
            .d-flex.justify-content-end
              a(href="#").fz14.text-secondary 忘記密碼?
          .modal-footer.flex-column.px-0.py-0.border-top-0
            button.btn.btn-primary.w-100.ml-0.font-weight-bold(type='button' data-dismiss='modal') 登入
            p.mb-0.text-secondary.font-weight-bold or
            button.btn.btn-fb.w-100.ml-0.font-weight-bold.mb-30(type='button') fb帳號登入

</template>

<script>
import footerComponent from './footer.vue'
import copyright from './copyright'
import {scroll} from '../assets/scroll'
export default {
  components: {
    footerComponent,
    copyright
  },
  mixins: [scroll],
  data () {
    return {
      showPassword: 'password'
    }
  },
  mounted () {
    // let el = this.scroll('warmPhotoBook')
    // alert(window.scrollY)
    window.addEventListener('scroll', function (e) {
      if (window.scrollY === 50) {
        alert('hello')
      }
    })
  }
}
</script>

<style lang="scss">
$s14: 14px;
$s20: 20px;
$serif: 'Noto Serif TC', serif;
.fz14{
  font-size:$s14;
}
.campaign{
  font-size: 20px;
  font-weight: bold;
  max-width: 1920px;
}
.campaignBox{
  height: 60px;
  box-sizing: border-box;
  color:white;
}
.campaignDes{
  display: flex;
  justify-content: center;
  align-items: center;
}

// hamburger style
.navbar-light .navbar-toggler {
    border-color: rgb(92,135,167);
    border-width: 2px;
}
// nav bar.
.navbar-light .navbar-nav{
  .nav-link{
    font-weight: bold;
    color:#000;
    &:hover{
      background: rgb(92,135,167);
      color:white;
    }
  }
}
.dropdown-item:hover{
  background: rgb(92,135,167);
  color:white;
}
.photoBook{
  position: relative;
  .dropdownDetail{
    position: absolute;
    top:16px;
    left:158px;
    background:white;
    color:#212529;
    border:1px solid #d9d9d9;
    display:none;
    width: 100%;
  }
}
.photoBook{
  &:hover{
    .dropdownDetail{
      display: block;
    }
  }
  &:active{
    .dropdownDetail{
      display: block;
    }
  }
}
// first banner
.firstBanner{
  height: 700px;
}
// 讓照片永存
.card{
  height: 424px;
  box-sizing: border-box;
  cursor: pointer;
}
.card-body{
  height: 64px;
  box-sizing: border-box;
}
.imgBox{
  height: 360px;
  overflow: hidden;
  img{
    max-width: 100%;
    height: 360px;
    transform:scale(1,1);
    transition: all 1s ease-out;
    &:hover{
      transform:scale(1.2,1.2);
    }
  }
}
.letPhotoForever{
  padding-top: 40px;
  padding-bottom: 40px;
  h2{
    font-family: $serif;
    letter-spacing: 1px;
    font-size: 24px;
  }
}
.letPhotoForeverProduct{
  padding-bottom: 40px;
  box-sizing: border-box;
}
// second banner
.secondBanner{
  height: 600px;
  background-image: url("../assets/img/home/Experience_1.jpg");
  background-size:cover;
  background-position: center center;
  position: absolute;
  top: 0;
  bottom: 0;
}
.secondBannerDes{
  height: 600px;
  .title{
    font-size: 32px;
    font-family: $serif;
    letter-spacing: 1px;
  }
  .num{
    width: $s20;
    height: $s20;
    border-radius: 50%;
    display: block;
    font-size: 18px;
    line-height: 18px;
    margin-right: 16px;
  }
  .step{
    font-size: $s20;
  }
  .stepDes{
    margin-left: 36px;
    font-weight:bold;
  }
}
// 一個機會
.aChance{
  padding-top: 40px;
  padding-bottom: 40px;
  box-sizing: border-box;
  .title{
    font-family: $serif;
    font-size: 24px;
    letter-spacing: 1px;
  }
}

// 第二個banner產品介紹樣式設定
.under_secondbanner_des_title{
  font-size: 27px;
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
  margin-left: 40px;
}
// 第二個banner產品--右邊圖片--樣式設定
.under_second_banner_des_box_left{
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
  align-items: flex-end;
  // margin-right: 60px;
}
// 背景圖片樣式設定
.bgSetting{
  background-repeat: no-repeat;
  background-size: 880px 493px;
}
// 第二個banner產品--左邊圖片--樣式設定
.warmPhotoBook{
  background-image:url("../assets/img/home/b01.jpg");
  height: 493px;
  // margin-left: 45px;
  box-sizing: border-box;
  background-position: right center;
}
.valuablePostCard{
  background-image: url('../assets/img/home/b02.jpg');
  height: 493px;
  background-position: 50px center;
  // margin-left: 12px;
}
.lifeStuff{
  background-image: url('../assets/img/home/b03.jpg');
  height: 493px;
  // margin-left: 45px;
  box-sizing: border-box;
  background-position: right center;
}
.creativityTech{
  background-image: url('../assets/img/home/b04.jpg');
  height: 493px;
  background-position: 50px center;
}
.clothes{
  background-image: url('../assets/img/home/b05.jpg');
  height: 493px;
  background-position: right center;
}
// footer style
.footer{
  background-color : #f4f4f1;
  height: 384px;
}
// modal
.modal-dialog{
  max-width: 320px;
  margin: 100px auto;
  box-shadow: 3px 3px 5px rgba(58, 58, 58, 0.2);
}
.modal-header{
  .modal-title{
    border-bottom : 2px solid black;
  }
}
.modal-body{
  .form-control{
    background: #e8f0fe;
    border:1px solid #c6bdbc;
  }
}
.showPassword{
  position:relative;
  float:right;
  z-index: 2;
  margin-top: -43px;
  margin-right: 16px;
  cursor: pointer;
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
</style>
