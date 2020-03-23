<template lang="pug">
  //- modal
  #loginModal.modal.fade(tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true')
      .modal-dialog(role='document')
        .modal-content.border-0.px-3.py-3
          .modal-header.border-bottom-0
            button.close(type='button' data-dismiss='modal' aria-label='Close')
              span(aria-hidden='true') &times;
          .modal-body.px-0.py-0
            P#exampleModalLabel.modal-title.font-weight-bold.text-center 登入
            p.mb-1.font-weight-bold.fz14 會員帳號*
            input(type="text" v-model="memberId").form-control.fz14
            p.mb-0.font-weight-bold.fz14 帳號範例(w2p@gmail.com)
            .form-group.mb-0
              p.mb-1.mt-3.font-weight-bold.fz14 密碼*
              input(:type="showPassword" v-model="password").form-control.mb-2.fz14
              span.fz14.showPassword(v-if="showPassword === 'password'" @click="showPassword = 'text'") 顯示
              span.fz14.showPassword(v-if="showPassword === 'text'" @click="showPassword = 'password'") 隱藏
            .d-flex.justify-content-between.align-items-center.mb-3
              .form-group.mb-0.d-flex.align-items-center
                input(type="checkbox" id="keepLogin")
                label.mb-0(for="keepLogin") 保持我的登入狀態(公用或共用電腦請勿勾選)
              a(href="#").fz14.text-primary.text-decoration-none 忘記密碼?
          .modal-footer.flex-column.px-0.py-0.border-top-0
            button.btn.btn-primary.w-100.ml-0.font-weight-bold(type='button' data-dismiss='modal' @click="login") 登入
            p.my-2.text-secondary.font-weight-bold.fz14 你也可以用Facebook或其他方式登入
            button.btn.btn-fb.w-100.ml-0.font-weight-bold.mb-30(type='button') Facebook帳號登入
            a(data-toggle="modal" data-dismiss="modal" href="#enrollModal").text-primary 註冊會員
</template>

<script>
export default {
  data () {
    return {
      showPassword: 'password',
      memberId: 'jckychen@gmail.com',
      password: '660822'
    }
  },
  methods: {
    login () {
      let memberId = this.memberId
      let password = this.password
      this.$store.dispatch('LOGIN', {memberId, password})
      this.memberId = ''
      this.password = ''
    }
  }
}
</script>

<style lang="scss" scoped>
$s20: 20px;
.fz14{
  font-size: 14px;
}
  // modal
.modal-dialog{
  max-width: 579px;
  margin: 100px auto;
  box-shadow: 3px 3px 5px rgba(58, 58, 58, 0.2);
}
.modal-content{
  z-index:100;
}

.modal-title{
  font-size: $s20;
  font-family: "Noto Serif TC",serif;
  margin-bottom: 30px;
}

.modal-body{
  .form-control{
    background: #e8f0fe;
    border:1px solid #c6bdbc;
  }
}
#keepLogin{
& ~ label {
 font-size: 13px;
 line-height: 13px;
}
}
.showPassword{
  position:relative;
  float:right;
  z-index: 2;
  margin-top: -34px;
  margin-right: 16px;
  cursor: pointer;
}
</style>
