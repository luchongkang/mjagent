<template>
  <div>
    <x-header :left-options="{backText: ''}" @on-click-more="showMenus = true" :right-options="{showMore: true}">代理后台</x-header>
    <actionsheet :menus="menus" v-model="showMenus" :cancel-text="text" show-cancel></actionsheet>
    <div>
      <x-icon type="home"  @click="ShowPwd" ></x-icon>
    </div>
    <tabbar class="tabbar">
      <tabbar-item>
        <x-icon size="36" type="home"  @click="ShowPwd" slot="icon"></x-icon>
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <x-icon size="36" type="home"  @click="ShowPwd" slot="icon"></x-icon>
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <x-icon size="36" type="home"  @click="ShowPwd" slot="icon"></x-icon>
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <x-icon size="36" type="home"  @click="ShowPwd" slot="icon"></x-icon>
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
    
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, XHeader, Actionsheet } from 'vux'

export default {
  components: {
    XHeader, Actionsheet, Tabbar, TabbarItem
  },
  data () {
    return {
      text: '取消',
      menus: {
        menu1: '安全退出'
      },
      showMenus: false
    }
  },
  methods: {
    ShowPwd: function () {
      console.log('test')
    }
  }
}
</script>
<style scoped>
  .tabbar {
  background-color: #f7f7fa;
  }
</style>
