import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import productDetail from '@/components/pages/productDetail'
import standard from '@/components/pages/standard'
import stylePage from '@/components/pages/style'
import designer from '@/components/pages/designer'
import modifyEnroll from '@/components/pages/modifyEnroll'
import accountdata from '@/components/accountdata'
import changePassword from '@/components/changepassword'
import loading from '@/components/pages/loading'
import serviceterm from '@/components/pages/serviceterm'
import privacyterm from '@/components/pages/privacyterm'
import aboutYFP from '@/components/pages/aboutYFP'
import contactus from '@/components/contactus'
import workslayout from '@/components/workslayout'
import serviceContent from '@/components/pages/serviceContent'
import aboutMember from '@/components/aboutMember'
import buyAndTake from '@/components/buyAndTake'
import invoiceAndSaledService from '@/components/invoiceAndSaledService'
import teachEdit from '@/components/teachEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/productDetail/:id',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/standard/:id',
      name: 'standard',
      component: standard
    },
    {
      path: '/stylePage/:id/:specid/:sizeid',
      name: 'stylePage',
      component: stylePage
    },
    {
      path: '/designer/:licensorId/:designerId',
      name: 'stylePage',
      component: designer
    },
    {
      path: '/serviceterm',
      name: 'serviceterm',
      component: serviceterm
    },
    {
      path: '/privacyterm',
      name: 'privacyterm',
      component: privacyterm
    },
    {
      path: '/aboutYFP',
      name: 'aboutYFP',
      component: aboutYFP
    },
    {
      path: '/serviceContent',
      name: '',
      component: serviceContent,
      children: [
        {
          path: '',
          name: 'teachEdit',
          component: teachEdit
        },
        {
          path: 'contactus',
          name: 'contactus',
          component: contactus
        },
        {
          path: 'workslayout',
          name: 'workslayout',
          component: workslayout
        },
        {
          path: 'aboutMember',
          name: 'aboutMember',
          component: aboutMember
        },
        {
          path: 'buyAndTake',
          name: 'buyAndTake',
          component: buyAndTake
        },
        {
          path: 'invoiceAndSaledService',
          name: 'invoiceAndSaledService',
          component: invoiceAndSaledService
        }
      ]
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
