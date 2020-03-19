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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  input {
    width: 75%;
  }
  @media(max-width: 640px){
    input{
      width: 100%;
    }
  }
</style>
