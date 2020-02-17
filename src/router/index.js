import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import productDetail from '@/components/pages/productDetail'
import standard from '@/components/pages/standard'

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
    },
    {
      path: '/standard/:id',
      name: 'standard',
      component: standard
    }
  ]
})
