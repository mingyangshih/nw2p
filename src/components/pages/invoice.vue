<template lang="pug">
  .invoice.mt-30
    .container
      .row
        .col-md-2
          .d-flex.flex-column
            router-link(to="/invoice").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span >發票查詢</span> <i class="fas fa-chevron-right"></i>
        .col-md-10
          router-view
</template>

<script>
export default{

}
</script>

<style lang='scss' scoped>
  .router-link-active{
    color: #5c87a6;
  }
</style>
