<template lang="pug">
  .alert-bg(v-if = "message")
    .alert(v-if = "message")
      p.h-100.message.d-flex.align-items-center.justify-content-center.text-justify(:class="{'text-primary': theme == 'primary', 'text-danger': theme == 'danger'}") {{message}}
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      message: state => state.alertModules.message,
      theme: state => state.alertModules.theme
    })
  }
}
</script>

<style lang="scss" scoped>
  .alert-bg{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom:0;
    z-index: 999;
    background: rgba(0,0,0,.4);
  }
  .alert{
    width: 450px;
    height: 200px;
    position: fixed;
    left: calc(50% - 225px);
    top: 30%;
    z-index: 1000;
    background: white;
    box-shadow: 0px 0px 10px #00000029;
    border: 1px solid #EFECEC;
    border-radius: 10px;
  }
  .message{
    font-size: 20px;
    font-weight: bold;
  }
</style>
