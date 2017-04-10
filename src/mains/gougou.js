// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './gougou.vue'
import router from '../router/gougou.js'
import Weui from 'vue-weui'
import 'weui/dist/style/weui.min.css'
import VueHead from 'vue-head'
import VueResource from 'vue-resource'
import Common from '../common'

Vue.config.productionTip = false
Vue.use(Weui)
Vue.use(VueHead)
Vue.use(VueResource)
Vue.mixin(Common)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
