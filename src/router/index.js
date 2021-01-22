import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import productDetail from '@/components/pages/productDetail'
import standard from '@/components/pages/standard'
import stylePage from '@/components/pages/style'
import designer from '@/components/pages/designer'
import designerItem from '@/components/pages/designerItem'
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
import homeSwipertest from '@/components/homeSwipertest'
import activity from '@/components/pages/activity'
import invoice from '@/components/pages/invoice'
import invoiceSearch from '@/components/invoiceSearch'
import paperMaterial from '@/components/pages/paperMaterial'
import exchange from '@/components/pages/exchange'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/homeswipertest',
      name: 'swipertest',
      component: homeSwipertest
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
      path: '/stylePage/:id/:specid/:sizeid/:styleId',
      name: 'stylePage',
      component: stylePage
    },
    {
      path: '/designer/:id/:designerId',
      name: 'designer',
      component: designer
    },
    {
      path: '/designerItem/:designerItemId',
      name: 'designerItem',
      component: designerItem
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
      path: '/invoice',
      name: '',
      component: invoice,
      children: [{
        path: '',
        name: 'invoiceSearch',
        component: invoiceSearch
      }]
    },
    {
      path: '/activity/:id',
      name: 'activity',
      component: activity
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
    },
    {
      path: '/paperMaterial',
      name: 'paperMaterial',
      component: paperMaterial
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: exchange
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
