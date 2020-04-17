import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import productDetail from '@/components/pages/productDetail'
import standard from '@/components/pages/standard'
import modifyEnroll from '@/components/pages/modifyEnroll'
import accountdata from '@/components/accountdata'
import changePassword from '@/components/changepassword'
import loading from '@/components/pages/loading'

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
        component: accountdata,
        meta: { requiresAuth: true }
      }, {
        path: 'changePassword',
        name: 'changePassword',
        component: changePassword
      }]
    },
    {
      path: '/loading',
      name: loading,
      component: loading
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
