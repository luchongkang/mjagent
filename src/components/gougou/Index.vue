<template>
  <div style="height:100%">
    <div style="header">
      <x-header :left-options="{backText: ''}" @on-click-more="showMenus = true" :right-options="{showMore: true}">代理后台</x-header>
    </div>
    
    <actionsheet :menus="menus" v-model="showMenus" :cancel-text="text" @on-click-menu="menuClick" show-cancel></actionsheet>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="botton">
      <tabbar>
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
  </div>
</template>

<script>
import { Tabbar, TabbarItem, XHeader, Actionsheet } from 'vux'

export default {
  components: {
    XHeader, Actionsheet, Tabbar, TabbarItem
  },
  created: function () {
    console.log('index create')
  },
  data () {
    return {
      text: '取消',
      menus: {
        exit: '安全退出'
      },
      showMenus: false
    }
  },
  methods: {
    menuClick: function (key) {
      if (key === 'exit') {
        this.$http.get('/login/exit').then(response => {
          if (response.body.code === 0) {
            this.$router.push('/')
          }
        })
      } else if (key === 'change') {
        console.log('pwd')
      }
    }
  }
}
</script>
<style scoped>
.header {
  position: fixed;
}
.menu-icon {
  fill: green;
}
</style>
