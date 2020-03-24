<template lang="pug">
  .alert
    p {{message}}
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  created () {
    const vm = this
    this.$bus.$on('alert', (message, status = 'danger') => {
      vm.message = message
      // vm.status = status
      // vm.showAlert()
    })
  }
}
</script>

<style lang="scss" scoped>
  .alert{
    width: 100px;
    height: 50px;
    position: fixed;
    left: 50%;
    top: 50%;
    border: 2px solid red;
    z-index: 1000000;
    background: white;
  }
</style>
