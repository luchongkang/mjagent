// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './gougou.vue'
import router from '../router/gougou.js'
import Vuex from 'vuex'
// import 'weui/dist/style/weui.min.css'
import VueHead from 'vue-head'
import VueResource from 'vue-resource'
import { LoadingPlugin, AlertPlugin } from 'vux'
import Common from '../common'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(AlertPlugin)
// Vue.use(ToastPlugin)
Vue.use(VueHead)
Vue.use(LoadingPlugin)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.mixin(Common)

let store = new Vuex.Store()

store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
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
  store.commit('updateLoadingStatus', {isLoading: true})
  if (to.path === '/charge') {
    store.commit('updateDirection', {direction: 'reverse'})
    console.log('to:charge')
  } else {
    store.commit('updateDirection', {direction: 'forward'})
    console.log('to:' + to.path)
  }
  // console.log('to:' + to.path + '----from:' + from.path)
  next()
})
router.afterEach((to) => {
  store.commit('updateLoadingStatus', {isLoading: false})
})
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
