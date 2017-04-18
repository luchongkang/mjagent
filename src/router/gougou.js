import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/gougou/Login'
import Index from '@/components/gougou/Index'
import Home from '@/components/gougou/Home'
import Menu from '@/components/gougou/Menu'
import Charge from '@/components/gougou/Charge'
import Scale from '@/components/gougou/home/Scale'
import Sell from '@/components/gougou/home/Sell'
import BuyHistory from '@/components/gougou/home/BuyHistory'
import CashHistory from '@/components/gougou/home/CashHistory'
import ChargeUserHistory from '@/components/gougou/home/ChargeUserHistory'
import ChargeUser from '@/components/gougou/home/ChargeUser'
import ChargeHistory from '@/components/gougou/home/ChargeHistory'
import Agent from '@/components/gougou/menu/agent'

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
      component: Index,
      redirect: '/home',
      children: [
        {
          path: '/home/', component: Home
        },
        {
          path: '/menu', component: Menu
        },
        {
          path: '/charge', component: Charge
        },
        {
          path: '/scale', component: Scale
        },
        {
          path: '/sell', component: Sell
        },
        {
          path: '/buyHistory', component: BuyHistory
        },
        {
          path: '/cashHistory', component: CashHistory
        },
        {
          path: '/chargeUserHistory', component: ChargeUserHistory
        },
        {
          path: '/chargeUser', component: ChargeUser
        },
        {
          path: '/agent', component: Agent
        },
        {
          path: '/chargeHistory', component: ChargeHistory
        }
      ]
    }
  ]
})
