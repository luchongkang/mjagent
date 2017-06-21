import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/gougou/Login'
import Index from '@/components/gougou/Index'
import Check from '@/components/gougou/Check'
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
import Agent from '@/components/gougou/menu/Agent'
import EditAgent from '@/components/gougou/menu/EditAgent'
import Grade from '@/components/gougou/menu/Grade'
import UpdatePwd from '@/components/gougou/menu/UpdatePwd'
import Inviter from '@/components/gougou/menu/Inviter'
import Contact from '@/components/gougou/menu/Contact'

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
      path: '/check/:mobile/:openid',
      component: Check
    },
    {
      path: '/index',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: '/inviter', component: Inviter
        },
        {
          path: '/contact', component: Contact
        },
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
        },
        {
          path: '/editAgent', component: EditAgent
        },
        {
          path: '/grade', component: Grade
        },
        {
          path: '/updatePwd', component: UpdatePwd
        }
      ]
    }
  ]
})
