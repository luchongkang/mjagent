<template>
  <div class="index">
    <div class="bar" v-bind:class="{ show: status}">
      <mu-appbar title="Title">
        <mu-icon-button icon='menu' @click="MenuHide" slot="left"/>
        <mu-icon-menu icon="expand_more" slot="right">
          <mu-menu-item title="安全退出" leftIcon="power_settings_new" />
        </mu-icon-menu>
      </mu-appbar>
    </div>
    <div v-bind:class="{ hide_menu: status}" class="menu">
       <mu-appbar title="Home">
       </mu-appbar>
        <mu-list v-for="val in getMenuData" :key="val.id" class="left-menu border_shadow">
            <mu-list-item :title="val.name">
              <mu-icon slot="left" value="person"/>
            </mu-list-item>
          <!-- <mu-list-item title="Drafts" toggleNested :open='false'>
            <mu-icon slot="left" value="drafts"/>
            <mu-list-item slot="nested" title="Starred">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
          </mu-list-item> -->

        </mu-list>
    </div>
    <div class="content" v-bind:class="{ content_show: status}">
      <router-view></router-view>
    </div>
    <div @click="MenuHide" class="overlay" v-bind:class="{ hide: overlay_status}">
    </div>
  </div>
</template>

<script>
import Hello from '@/components/Hello'

export default {
  name: 'index',
  data () {
    return {
      status: false,
      overlay_status: true
    }
  },
  computed: {
    getMenuData: function () {
      this.http_get()
      return [{name: '用户管理', id: 1}]
    }
  },
  methods: {
    MenuHide: function () {
      this.status = !this.status
      this.overlay_status = !this.overlay_status
    }
  },
  components: {
    Hello
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mobile: screen and (max-width:700px);
$menuWidth: 256px;
@mixin hideMenu {
  top:0;
  bottom: 0;
  left: 0;
  visibility: hidden;
  transition-duration: .45s;
  transition-property: transform,visibility,-webkit-transform;
  transform: translate3d(-100%,0,0);
}
.hide_menu {
  @include hideMenu;
  @media #{$mobile} {
    visibility: visible !important;
    left: $menuWidth !important;
    transition: all .15s !important;
    z-index: 7;
  }
}
@mixin showBar {
  left: 0;
  transition: all .45s;
}
@mixin showContent {
  padding-left: 0 ;
  transition: all .45s;
}
.bar {
  position: fixed;
  right: 0;
  left: $menuWidth;
  transition: all .45s;
  @media #{$mobile} {
    @include showBar;
  }
}
.show {
  @include showBar;
}
.menu {
  position: fixed;
  width: $menuWidth;
  transition: all .45s;
  @media #{$mobile} {
    @include hideMenu;
    transition: all .45s !important;
  }
}
.content {
  padding: 64px 0 0 256px;  
  transition: all .45s;
  @media #{$mobile} {
    @include showContent;
  }
}
.content_show {
  @include showContent;
}
.left-menu{
  background-color: white;
}
.border_shadow{
  box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
}
.hide {
  display:none;
}
.overlay {
  @media #{$mobile} {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    opacity: .4;
    z-index: 6;
  }
}
</style>
