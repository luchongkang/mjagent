<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  head: {
    meta: [
      { name: 'http-equiv', content: 'IE=edge' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'format-detection', content: 'email=no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'full-screen', content: 'yes' },
      { name: 'browsermode', content: 'application' },
      { name: 'x5-orientation', content: 'portrait' },
      { name: 'x5-fullscreen', content: 'true' },
      { name: 'x5-page-mode', content: 'app' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=0' }
    ],
    link: [
      { rel: 'stylesheet', href: '//cdn.bootcss.com/material-design-icons/3.0.0/iconfont/material-icons.min.css?v=123' }
    ]
  }
}
</script>

<style lang="scss">
body {
    font-family: Roboto,Lato,sans-serif;
    line-height: 1.5;
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    background-color: #fff;
    color: rgba(0,0,0,.87);
}
</style>
