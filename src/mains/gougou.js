// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './gougou.vue'
import router from '../router/gougou.js'
import Vuex from 'vuex'
import VueHead from 'vue-head'
import VueResource from 'vue-resource'
import { LoadingPlugin, AlertPlugin, ToastPlugin } from 'vux'
import Common from '../common'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(VueHead)
Vue.use(LoadingPlugin)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.mixin(Common)

let store = new Vuex.Store()

store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isBack: false,
    direction: 'forward',
    headerTitle: '代理后台'
  },
  mutations: {
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateBackStatus (state, payload) {
      state.isBack = payload.back
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    },
    updateHeaderTitle (state, payload) {
      state.headerTitle = payload.headerTitle
    }
  },
  actions: {
    updateDemoPosition ({commit}, top) {
      commit({type: 'updateDemoPosition', top: top})
    }
  }
})
Vue.use(store)

router.beforeEach((to, from, next) => {
  const swit = {
    '/home>/charge': false,
    '/charge>/home': true,
    '/home>/menu': false,
    '/charge>/menu': false,
    '/menu>/home': true,
    '/menu>/charge': true
  }
  let isBack = store.state.vux.isBack
  if (isBack) {
    store.commit('updateDirection', {direction: 'reverse'})
    store.commit('updateBackStatus', {back: false})
  } else if (swit[from.path + '>' + to.path]) {
    store.commit('updateDirection', {direction: 'reverse'}) // 左
  } else {
    store.commit('updateDirection', {direction: 'forward'})// 右
  }
  next()
})
router.afterEach((to) => {
  // store.commit('updateLoadingStatus', {isLoading: false})
})
Vue.http.interceptors.push((request, next) => {
  if (request.url === '/login') {
    next()
  } else {
    next((response) => {
      // 预处理 response
      if (response.body.code === -1) {
        router.push('/login')
      }
    })
  }
})
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
