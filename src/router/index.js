import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import productDetail from '@/components/pages/productDetail'
import standard from '@/components/pages/standard'
import modifyEnroll from '@/components/pages/modifyEnroll'
import accountdata from '@/components/accountdata'
import changePassword from '@/components/changepassword'

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
    },
    {
      path: '/modifyEnroll',
      name: '',
      component: modifyEnroll,
      meta: { requiresAuth: true },
      children: [{
        path: '',
        name: 'products',
        component: accountdata
      }, {
        path: 'changePassword',
        name: 'changePassword',
        component: changePassword
      }]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
