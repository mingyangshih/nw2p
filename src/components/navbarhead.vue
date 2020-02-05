<template lang="pug">
  .row.justify-content-center
    .col-md-8
        nav.navbar.navbar-expand-md.navbar-light.bg-white.d-flex.py-3
          button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation')
            //- span.navbar-toggler-icon
            <i class="fas fa-bars" style="color:rgb(92,135,167); font-size:16px;"></i>
          a.navbar-brand.d-block.mr-0(href='#')
            img.logo(src="../assets/img/logo.png")
          #navbarNav.collapse.navbar-collapse
            //- sidebar logo
            .d-flex.flex-column.align-items-center.w-100
              .d-flex.justify-content-center.align-items-center.w-75.py-3.logoBox(v-if="viewportWidth < 640")
                img.logo(src="../assets/img/logo.png")
                <i class="fas fa-times" @click.stopPropagation="closeSideBar"></i>
              ul.navbar-nav
                li.nav-item.dropdown.ml-md-5
                  a.nav-link.font-weight-bold(href='#' data-toggle="dropdown") 所有產品
                  .dropdown-menu.py-0(aria-labelledby='navbarDropdown')
                    .row.px-md-3
                      a.dropdown-item.py-md-3.photoBook.font-weight-bold.text-center.col-md-4(href='#')
                        label.d-flex.align-items-center.font-weight-bold.text-left(for="photoBook" :class="{'text-gray':viewportWidth < 640 && sideBarShow.indexOf('photoBook') >= 0}") 相片書 <span class="fz12">Photobook</span><i class="fas fa-chevron-down ml-auto" v-if="viewportWidth < 640 && sideBarShow.indexOf('photoBook') < 0"></i><i class="fas fa-chevron-up ml-auto" v-if="viewportWidth < 640 && sideBarShow.indexOf('photoBook') >= 0"></i>
                        input.d-none(type="checkbox" id="photoBook" value="photoBook" v-model="sideBarShow")
                        ul.pl-3(:class="{'d-none' : viewportWidth < 640 && sideBarShow.indexOf('photoBook') < 0}")
                          li.fz15.mb-2 - 平裝相片書
                          li.fz15.mb-2 - 精裝相片書
                      a.dropdown-item.py-md-3.font-weight-bold.text-center.col-md-4(href='#')
                        label.d-flex.align-items-center.font-weight-bold.text-left(for="daily" :class="{'text-gray':viewportWidth < 640 && sideBarShow.indexOf('daily') >= 0}") 生活雜貨 <span class="fz12">Daily Necessities</span><i class="fas fa-chevron-down ml-auto" v-if="viewportWidth < 640 && sideBarShow.indexOf('daily') < 0"></i><i class="fas fa-chevron-up ml-auto" v-if="viewportWidth < 640 && sideBarShow.indexOf('daily') >= 0"></i>
                        input.d-none(type="checkbox" id="daily" value="daily" v-model="sideBarShow")
                        ul.pl-3(:class="{'d-none' : viewportWidth < 640 && sideBarShow.indexOf('daily') < 0}")
                          li.fz15.mb-2 - 吸水杯墊
                          li.fz15.mb-2 - 馬克杯
                          li.fz15.mb-2 - 鑰匙圈
                      a.dropdown-item.py-md-3.font-weight-bold.text-center.col-md-4(href='#')
                        label.d-flex.align-items-center.font-weight-bold.text-left(for="fabrics" :class="{'text-gray':viewportWidth < 640 && sideBarShow.indexOf('fabrics') >= 0}") 衣料織品 <span class="fz12">Fabrics</span><i class="fas fa-chevron-down ml-auto" v-if="viewportWidth < 640 && sideBarShow.indexOf('fabrics') < 0"></i><i class="fas fa-chevron-up ml-auto" v-if="viewportWidth < 640 && sideBarShow.indexOf('fabrics') >= 0"></i>
                        input.d-none(type="checkbox" id="fabrics" value="fabrics" v-model="sideBarShow")
                        ul.pl-3(:class="{'d-none' : viewportWidth < 640 && sideBarShow.indexOf('fabrics') < 0}")
                          li.fz15.mb-2 - T恤
                          li.fz15.mb-2 - 抱枕
                          li.fz15.mb-2 - 帆布袋
                      a.dropdown-item.py-md-3.font-weight-bold.text-left.col-md-4(href='#')
                        label.d-flex.align-items-center.font-weight-bold(for="cards" :class="{'text-gray':viewportWidth < 640 && sideBarShow.indexOf('cards') >= 0}") 卡片系列 <span class="fz12">Cards</span><i class="fas fa-chevron-down ml-auto" v-if="viewportWidth < 640 && sideBarShow.indexOf('cards') < 0"></i><i class="fas fa-chevron-up ml-auto" v-if="viewportWidth < 640 && sideBarShow.indexOf('cards') >= 0"></i>
                        input.d-none(type="checkbox" id="cards" value="cards" v-model="sideBarShow")
                        ul.pl-3(:class="{'d-none' : viewportWidth < 640 && sideBarShow.indexOf('cards') < 0}")
                          li.fz15.mb-2 - 卡片
                          li.fz15.mb-2 - 明信片
                          li.fz15.mb-2 - 喜帖
                      a.dropdown-item.py-md-3.font-weight-bold.text-left.col-md-4(href='#')
                        label.d-flex.align-items-center.font-weight-bold(for="electronics" :class="{'text-gray':viewportWidth < 640 && sideBarShow.indexOf('electronics') >= 0}") 創意科技 <span class="fz12">Electronics</span><i class="fas fa-chevron-down ml-auto" v-if="viewportWidth < 640 && sideBarShow.indexOf('electronics') < 0"></i><i class="fas fa-chevron-up ml-auto" v-if="viewportWidth < 640 && sideBarShow.indexOf('electronics') >= 0"></i>
                        input.d-none(type="checkbox" id="electronics" value="electronics" v-model="sideBarShow")
                        ul.pl-3(:class="{'d-none' : viewportWidth < 640 && sideBarShow.indexOf('electronics') < 0}")
                          li.fz15.mb-2 - 悠遊卡
                          li.fz15.mb-2 - 一卡通
                          li.fz15.mb-2 - 手機殼
                          li.fz15.mb-2 - 行動電源
                li.nav-item.pr-lg-5.ml-md-5(@click="closeSideBar")
                  a.nav-link.font-weight-bold(href='#') 幫助中心
                li.nav-item.boder-sm-left.ml-md-auto
                  a.nav-link.font-weight-bold(href='#') <span class="text-primary bar" v-if="viewportWidth > 640">|</span> 註冊
                li.nav-item.font-weight-bold
                  a.nav-link.font-weight-bold(href='#' data-toggle="modal" data-target="#exampleModal") <span class="text-primary" v-if="viewportWidth > 640">|</span> <i class="fas fa-user-circle mr-2 text-primary" v-if="viewportWidth > 812"></i>登入
</template>

<script>
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
    }
  },
  mounted () {
    $('.dropdown-menu').on('click', function (event) {
      event.stopPropagation()
    })
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
.navbar{
  height: 80px;
  box-sizing: border-box;
}
@media(min-width: 640px){
  .navbar-nav{
    width: 100%;
  }
}
@media(max-width: 640px){
  .navbar-nav{
    width: 75%;
    .nav-item{
      padding: 8px 0;
      border-bottom: 1px solid #c1bfc1;
      cursor: pointer;
    }
  }
}
.navbar-brand{
  padding:0;
}
.logo{
  height: 40px;
}
@media(min-width: 640px){
  .nav-link{
    text-align: center;
  }
}
@media(max-width: 640px){
  .nav-link{
    text-align: left;
    height: 50px;
    display: flex;
    align-items: center;
  }
}
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
}
@media(max-width: 640px){
  .dropdown-item{
    border-bottom:1px solid #c1bfc1;
    label{
      margin-top: 8px;
    }
  }
  .dropdown-item:last-child{
    border-bottom:0px solid #c1b1f1;
  }
}
.dropdown-item:hover{
  background: none;
  color:black;
}

@media(max-width : 640px ){
  // 側邊下拉設定
  .navbar-collapse{
    position: fixed;
    top: 0;
    left: 0px;
    width: 75%;
    z-index: 1000;
    background: white;
    height: 100vh;
    overflow-y:scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    &::-ms-scrollbar{
      display: none;
    }
    .logoBox{
      border-bottom: 2px solid #333333;
      position: relative;
    }
    .fa-times{
      position: absolute;
      right:-40px;
      top:10px;
      border: 1px solid gray;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover{
        background: #000;
        color: white;
      }
    }
  }
}
.dropdown-menu{
  min-width: 35rem;
  padding: 0 16px;
  box-sizing: border-box;
  // 設定下拉位置
  left: -220px;
  top: calc( 100% + 16px);
  ul{
    padding-left: 0;
  }
  li{
    list-style-type: none;
    margin:0px;
    text-align: left;
  }
}
@media(max-width : 640px) {
  .dropdown-menu{
    min-width: auto;
    border-width: 0;
  }
}
</style>
