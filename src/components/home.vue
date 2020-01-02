<template lang="pug">
.home
  .container-fluid
    .row.px-0.campaign.py-4.bg-primary
      p.text-center.mb-0.w-100 全商品8折優惠 / 20% OFF．滿499免運費
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
    .row.px-0
      .col-sm-12.px-0
        img.w-100.firstBanner.img-fluid(src="https://picsum.photos/950/700")
    .row.letPhotoForever
      .col-sm-12.px-0.text-center
        h2.font-weight-bold.mb-0.text-secondary 一個理由，讓照片永存
  .container.mb-sm-8
    .row
      .col-md-4.text-center
        .card()
          .imgBox
            img.card-img-top(src='https://picsum.photos/360/360?random=1' alt='test')
          .card-body
            h5.card-title.font-weight-bold.text-secondary 相片書
            p.card-text.text-center.font-weight-bold.text-secondary Photo Book
      .col-md-4.text-center
        .card()
          .imgBox
            img.card-img-top(src='https://picsum.photos/360/360?random=2' alt='test')
          .card-body
            h5.card-title.font-weight-bold.text-secondary 明信片
            p.card-text.text-cneter.font-weight-bold.text-secondary Post Card
      .col-md-4.text-center
        .card()
          .imgBox
            img.card-img-top(src='https://picsum.photos/360/360?random=3' alt='test')
          .card-body
            h5.card-title.font-weight-bold.text-secondary 筆記本
            p.card-text.text-center.font-weight-bold.text-secondary Note Book
  .container-fluid.bg-gray.secondBannerBox(style="position:relative;")
    .row
      .col-md-6.px-0.secondBanner
        //- img.w-100.h-100.img-fluid(src="https://fakeimg.pl/950x600/282828/?text=Hello")
      .container-fluid
        .row.justify-content-end
          .col-md-6.px-0
            .secondBannerDes.pt-md-8.px-md-4
              p.mb-0.title 只需簡單的步驟，
              p.mb-30.title 完成您不簡單的作品
              .glasses
                div.text-dark.d-flex.align-items-center
                  p.border.border-dark.num.mb-0.d-flex.justify-content-center.align-items-center.font-weight-bold 1
                  p.mb-0.step.font-weight-bold 選擇產品
                div.stepDes.text-white
                  p.text-white.stepDesContent 我們提供多樣的客製化商品，您的回憶值得更有溫度的保存。
                div.text-dark.d-flex.align-items-center
                  p.border.border-dark.num.mb-0.d-flex.justify-content-center.align-items-center.font-weight-bold 2
                  p.mb-0.step.font-weight-bold 上傳照片
                div.stepDes.text-white.stepDesContent
                  p.text-white 您的回憶有比電腦硬碟更好的去處，交給我們，讓它成為您生活的一部分。
                div.text-dark.d-flex.align-items-center
                  p.border.border-dark.num.mb-0.d-flex.justify-content-center.align-items-center.font-weight-bold 3
                  p.mb-0.step.font-weight-bold 編輯完成
                div.stepDes.text-white.stepDesContent
                  p.text-white 我們的編輯器提供您完美、自由的操作體驗，只有您才能決定您生活的風格。
                .d-flex
                  button.btn.btn-danger.font-weight-bold.btnInPage 馬上體驗 <i class="fas fa-chevron-right ml-5"></i>
  .container-fluid
    .row.aChance
      h2.text-center.font-weight-bold.w-100 一個機會，讓生活獨特
  .container-fluid(style="position:relative;")
    .row
      .col-md-8.warmPhotoBook.pr-0
      .container-fluid
        .row.justify-content-end.align-items-center
          .col-md-4.px-0
            .warmPhotoBookDes
              p.title 更有溫度的相片書
              .glasses
                p 還在用社群軟體分享照片嗎?
                p 您還有其他的選擇
                .d-flex
                  button.btn.btn-primary.font-weight-bold.btnInPage.mt-5 我要製作 <i class="fas fa-chevron-right ml-5"></i>
  .container-fluid(style="position:relative;")
    .row
      .container-fluid
        .row
          .com-md-4.px-0
            p.title 更有溫度的相片書
              .glasses
                p 還在用社群軟體分享照片嗎?
                p 您還有其他的選擇
                .d-flex
                  button.btn.btn-primary.font-weight-bold.btnInPage.mt-5 我要製作 <i class="fas fa-chevron-right ml-5"></i>
      .col-md-8.valuablePostCard
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
export default {
  data () {
    return {
      showPassword: 'password'
    }
  },
  methods: {
    showDetail () {
      // let dropdownDetail = document.querySelector('.dropdownDetail')
      // dropdownDetail.classList.remove('d-none')
    },
    hideDetail () {
      // let dropdownDetail = document.querySelector('.dropdownDetail')
      // dropdownDetail.classList.add('d-none')
    }
  }
}
</script>

<style lang="scss">
$s14: 14px;
$s20: 20px;
.fz14{
  font-size:$s14;
}
.campaign{
  color:rgb(235,255,255);
  font-size: 24px;
}
@media(max-width:414px){
  .campaign{
    font-size:16px;
  }
  .logo{
    margin-left: 0;
  }
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
@media(max-width:992px){
  .photoBook .dropdownDetail{
    position: relative;
    background:white;
    color:#212529;
    border:1px solid #d9d9d9;
    // display:none;
    top:0px;
    left:0px;
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
.imgBox{
  overflow: hidden;
  img{
    transform:scale(1,1);
    transition: all 1s ease-out;
    &:hover{
      transform:scale(1.2,1.2);
    }
  }
}
.letPhotoForever{
  padding-top: 90px;
  padding-bottom: 40px;
}
@media(max-width:540px){
  .card{
    margin-top: 16px;
  }
}
// second banner
.secondBanner{
  height: 600px;
  background-image: url("https://picsum.photos/950/600");
  background-size:cover;
  background-position: center center;
  position: absolute;
  top: 0;
  bottom: 0;
}
@media(max-width:540px){
  .secondBannerBox{
    margin-top: 16px;
  }
}
.secondBannerDes{
  // background: rgba(193,191,194,.4);
  height: 600px;
  .title{
    font-size: 30px;
    color:rgb(255,253,254)
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
  }
}
@media(max-width:720px){
  .secondBannerDes{
    padding-top: 50px;
    padding-left: 12px;
    padding-right: 12px;
    .title{
      text-align: center;
    }
    .btn{
      width: 100%;
      border:0px;
    }
  }
}
// 一個機會
.aChance{
  padding-top: 90px;
  padding-bottom: 40px;
}
.warmPhotoBook{
  background-image:url("https://picsum.photos/870/600?random=1");
  height: 495px;
  background-repeat: no-repeat;
  background-position:center center;
  position: absolute;
  top: 0;
  bottom: 0;
}
.warmPhotoBookDes{
  padding-top: 140px;
  p.title{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 45px;
  }
  p{
    font-weight: bold;
    margin-bottom: 0;
    line-height: 34px;
    color: #5f5f5f;
  }
}
@media(max-width: 720px){
  .warmPhotoBookDes{
    padding-left: 12px;
    padding-right: 12px;
    p.title{
      color:white;
      font-weight: normal;
      text-align: center;
    }
    p{
      color:white;
    }
  }
}
.valuablePostCard{
  background-image:url("https://picsum.photos/870/600?random=2");
  height: 495px;
  background-repeat: no-repeat;
  background-position:center center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}
@media(min-width: 720px){
  .valuablePostCard{
    // margin-top: 180px;
  }
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
// glasses style
@media(max-width: 720px){
  .glasses{
      background: hsla(0,0%,100%,.5);
      position: relative;
      overflow: hidden;
      z-index: 1;
      padding: 12px;
      box-sizing: border-box;
      .stepDesContent{
        font-size: 14px;
      }
    }
    .glasses::before {
      content: '';
      position: absolute;
      top:0; right:0; bottom:0; left:0;
      filter: blur(50px);
      z-index: -1;
      background: rgba(87, 84, 84, 0.5);
      // margin: -30px;
    }
}
// 頁面中的Btn樣式
.btnInPage{
  border-radius: 2px;
  width: 250px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media(max-width: 720px){
  .btnInPage{
    width:100%;
    border : 0px;
  }
}
</style>
