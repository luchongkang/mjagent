<style scoped>
.main {
  padding-top: 46px;
  padding-bottom: 55px;
}
.header {
  position: fixed;
}
.menu-icon {
  fill: green;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
<template>
  <div>
      <x-header style="position: fixed;left: 0;top: 0;right: 0;z-index: 100;" :left-options="{backText: ''}" @on-click-more="showMenus = true" :right-options="{showMore: true}">
      {{ headerTitle }}
      </x-header>
    <actionsheet :menus="menus" v-model="showMenus" :cancel-text="text" @on-click-menu="menuClick" show-cancel></actionsheet>
    <div class="main">
      <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
        <router-view></router-view>
      </transition>
    </div>
      <tabbar style="position: fixed;">
        <tabbar-item selected link="/home">
          <x-icon size="30" type="person"   slot="icon"></x-icon>
          <x-icon size="30" type="person" class="menu-icon"  slot="icon" slot="icon-active"></x-icon>
          <span slot="label">我的账户</span>
        </tabbar-item>
        <tabbar-item link="/charge">
          <x-icon size="30" type="social-usd" slot="icon"></x-icon>
          <x-icon size="30" type="social-usd" class="menu-icon" slot="icon" slot="icon" slot="icon-active"></x-icon>
          <span slot="label">充值</span>
        </tabbar-item>
        <tabbar-item link="/menu">
          <x-icon size="30" type="navicon" slot="icon"></x-icon>
          <x-icon size="30" type="navicon" class="menu-icon" slot="icon" slot="icon" slot="icon-active"></x-icon>
          <span slot="label">其它</span>
        </tabbar-item>
      </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, XHeader, Actionsheet } from 'vux'
import { mapState } from 'vuex'
import Helper from '@/common/helper'

export default {
  components: {
    XHeader, Actionsheet, Tabbar, TabbarItem
  },
  beforeCreated () {
    this.$vux.loading.show({text: 'loading'})
  },
  computed: {
    ...mapState({
      direction: state => state.vux.direction
    })
  },
  mounted () {
    this.$vux.loading.hide()
  },
  created: function () {
    Helper.$on('changeTitle', (title) => {
      this.headerTitle = title
    })
  },
  data () {
    return {
      text: '取消',
      headerTitle: '代理后台',
      menus: {
        exit: '安全退出'
      },
      showMenus: false
    }
  },
  methods: {
    menuClick: function (key) {
      if (key === 'exit') {
        this.$router.push('/')
        // this.$http.get('/login/exit').then(response => {
        //   if (response.body.code === 0) {
        //     this.$router.push('/')
        //   }
        // })
      } else if (key === 'change') {
        console.log('pwd')
      }
    }
  }
}
</script>

