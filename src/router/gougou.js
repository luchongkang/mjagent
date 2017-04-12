import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/gougou/Login'
import Index from '@/components/gougou/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: Index
    }
  ]
})
