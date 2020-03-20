<template lang="pug">
  .changepassword
    h4.font-weight-bold 變更密碼
    hr.mb-5
    p.font-weight-bold.fz14.mb-0 原密碼*
    input(type="text").form-control.rounded-0.border-dark.mb-3
    p.font-weight-bold.fz14.mb-0 新密碼*
    input(type="text").form-control.rounded-0.border-dark.mb-3
    p.font-weight-bold.fz14.mb-0 重新輸入密碼*
    input(type="text").form-control.rounded-0.border-dark
    .row.justify-content-center.my-5.buttonBox.mx-0
      button.btn.btn-primary.btnInPage.py-0.px-0 <span class="font-weight-bold">更新</span>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  input {
    width: 75%;
  }
  .buttonBox{
    width: 75%;
  }
  @media(max-width: 640px){
    input{
      width: 100%;
    }
    .buttonBox{
      width: 100%;
    }
  }
  // 頁面中的Btn樣式
  .btnInPage{
    border-radius:3px;
    width: 150px;
    height: 39px;
    font-size: 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    // .fa-chevron-right{
    //   margin-left: 37px;
    // }
  }
</style>
