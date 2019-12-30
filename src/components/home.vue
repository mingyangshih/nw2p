<template lang="pug">
  .container-fluid
    .row.px-0.campaign.py-4.bg-primary
      p.text-center.mb-0.w-100 全商品8折優惠 / 20% OFF．滿499免運費
    .row.justify-content-center
      .col-sm-8
        nav.navbar.navbar-expand-lg.navbar-light.bg-white.d-flex.py-3
          a.navbar-brand.d-block.mr-0(href='#')
            img(src="../assets/img/logo.png")
          button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation')
            //- span.navbar-toggler-icon
            <i class="fas fa-bars" style="color:rgb(92,135,167); font-size:16px;"></i>
          #navbarNav.collapse.navbar-collapse
            ul.navbar-nav.w-100
              li.nav-item.pl-lg-5
                a.nav-link.font-weight-bold.text-center(href='#') 首頁
              li.nav-item.pl-lg-5
                a.nav-link.font-weight-bold.text-center(href='#') 所有產品
              li.nav-item.pl-lg-5
                a.nav-link.font-weight-bold.text-center(href='#') 幫助中心
              li.nav-item.boder-sm-left.ml-lg-auto
                a.nav-link.font-weight-bold.text-center(href='#') <span class="text-primary bar">|</span> 註冊
              li.nav-item.font-weight-bold
                a.nav-link.font-weight-bold.text-center(href='#' data-toggle="modal" data-target="#exampleModal") <span class="text-primary">|</span> <i class="fas fa-user-circle mr-2 text-primary"></i>登入
    .row.px-0
      .col-sm-12.px-0
        img.w-100.firstBanner(src="https://fakeimg.pl/950x700/282828/")

    //- modal
    #exampleModal.modal.fade(tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true')
      .modal-dialog(role='document')
        .modal-content.border-0.px-30
          .modal-header.border-bottom-0
            P#exampleModalLabel.modal-title.mb-0.font-weight-bold 登入帳號
            button.close(type='button' data-dismiss='modal' aria-label='Close')
              span(aria-hidden='true') &times;
          .modal-body.px-0
            input(type="text").form-control
            .form-group.mb-0
              input(type="password").form-control.my-3
              span.fz14.showPassword 顯示
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
    return {}
  }
}
</script>

<style lang="scss">
.fz14{
  font-size:14px;
}
.campaign{
  color:rgb(235,255,255);
  font-size: 24px;
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
      color:rgb(92,135,167);
    }
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
}
// first banner
.firstBanner{
  height: 700px;
}

@media(max-width:414px){
  .campaign{
    font-size:16px;
  }
  .logo{
    margin-left: 0;
  }
}
</style>
