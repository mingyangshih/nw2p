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
            .d-flex.justify-content-center
              facebook-login( class="button" appId="181285726645214" @login="onLogin" @logout="onLogout"  @sdk-loaded="sdkLoaded")
            //- <v-facebook-login app-id="181285726645214" v-model="model"  version="v7.0" @sdk-init="handleSdkInit" async-delay="1000"></v-facebook-login>
            //- <button v-if="scope.logout && model.connected" @click="scope.logout">
            //-   | Logout @get-initial-status="getUserData"
            //- </button>
            //- button(@click="test") test
            | {{name}}
            img(:src="picture")
            a(data-toggle="modal" data-dismiss="modal" href="#enrollModal" @sdk-init="handleSdkInit").text-primary 註冊會員
</template>
<script>
import facebookLogin from 'facebook-login-vuejs'
import VFacebookLogin from 'vue-facebook-login-component'

export default {
  components: {
    facebookLogin,
    VFacebookLogin
  },
  data () {
    return {
      showPassword: 'password',
      memberId: 'jsps595214@yfp.com.tw',
      password: '12345678',
      // FB: {},
      // model: {},
      // scope: {}
      isConnected: false,
      name: '',
      email: '',
      personalID: '',
      picture: '',
      FB: undefined
    }
  },
  methods: {
    login () {
      let memberId = this.memberId
      let password = this.password
      this.$store.dispatch('LOGIN', {memberId, password})
      this.memberId = ''
      this.password = ''
    },
    // 2020 v-facebook-login
    handleSdkInit ({ FB, scope }) {
      this.FB = FB
      this.scope = scope
      console.log(this.FB.getUserID())
      let UID = this.FB.getUserID()
      console.log(this.FB.api(
        UID,
        {'fields': 'id,name,email'},
        function (response) {
          if (response && !response.error) {
            /* handle the result */
            console.log(response)
          }
        }
      ))
    },
    // v-facebook-login
    test () {
      // console.log(this.FB.getUserID())
      // console.log(this.FB.getAccessToken())
      // console.log(this.FB.getAuthResponse())
      let UID = this.FB.getUserID()
      this.FB.api(
        UID,
        {'fields': 'id,name,email'},
        function (response) {
          if (response && !response.error) {
            /* handle the result */
            console.log(response)
          }
        }
      )
    },
    // 2017 facebookLogin
    getUserData () {
      this.FB.api('/me', 'GET', { fields: 'id,name,email,picture' },
        user => {
          this.personalID = user.id
          this.email = user.email
          this.name = user.name
          this.picture = user.picture.data.url
        }
      )
    },
    sdkLoaded (payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) {
        this.getUserData()
        // console.log(this.FB.getAccessToken())
      }
    },
    onLogin () {
      this.isConnected = true
      this.getUserData()
      location.reload()
    },
    onLogout () {
      this.isConnected = false
      location.reload()
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
