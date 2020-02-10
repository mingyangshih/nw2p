import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import productDetail from '@/components/pages/productDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    }
  ]
})
