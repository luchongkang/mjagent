<style lang="less">
.main {
  padding-top: 46px;
  padding-bottom: 55px;
  // @media screen and (max-width:320px) {
    max-height: 450px;
    overflow: auto;
  // }
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
  width: 100%;
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
.router-view {
  width: 100%;
  top: 46px;
}
</style>
<template>
  <div>
      <x-header @on-click-back="back" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
      验证手机号码
      </x-header>
    <div class="main">
      <group title="发送验证码">
        <x-input title="验证码" class="weui-vcode" v-model="code">
          <x-button slot="right" type="primary" @click.native="send" :disabled="!show" mini>发送验证码 <span v-show="!show">{{time1}} s</span></x-button>
        </x-input>
      </group>
      <Box gap="10px 10px">
        <x-button type="primary"  action-type="button" @click.native="check">提 交</x-button>
      </Box>
    </div>
  </div>
</template>

<script>
import { XHeader, Group, Cell, Countdown, XInput, XButton, Box } from 'vux'
export default {
  components: {
    XHeader, Group, Cell, Countdown, XInput, XButton, Box
  },
  created () {
    if (this.$route.params.mobile.length !== 11) {
      this.$router.push('/')
      return false
    }
    this.mobile = this.$route.params.mobile
    this.openid = this.$route.params.openid
    this.$http.get('/login/check').then(response => {
      if (response.body.code === 1) {
        window.sessionStorage.setItem('isLogin', true)
        this.$router.push('/index')
      } else {
        this.token = response.body.token
      }
    })
  },
  data () {
    return {
      show: true,
      time1: 15,
      token: '',
      code: '',
      openid: '',
      mobile: ''
    }
  },
  methods: {
    send () {
      this.show = false
      let count = setInterval(() => {
        console.log(this.time1)
        this.time1--
        if (this.time1 === 0) {
          this.show = true
          clearInterval(count)
        }
      }, 1000)
      let header = {headers: {'X-CSRF-TOKEN': this.token}}
      this.$http.post('/login/code', {mobile: this.mobile}, header).then(response => {
        this.$vux.loading.hide()
        if (response.body.code === 0) {
          this.$vux.alert.show({content: '发送成功', title: '成功'})
        } else {
          this.$vux.alert.show({content: '发送失败，请稍后再试', title: '错误'})
        }
      }, response => {
        this.$vux.loading.hide()
        this.$vux.alert.show({content: '服务超时，请联系客服', title: '错误'})
      })
    },
    back () {
      this.$router.back()
    },
    check: function () {
      if (!this.code) {
        this.$vux.alert.show({content: '请输入正确的验证码', title: '错误'})
        return false
      }
      let header = {headers: {'X-CSRF-TOKEN': this.token}}
      this.$http.post('/login/checkcode', {code: this.code, mobile: this.mobile, openid: this.openid}, header).then(response => {
        this.$vux.loading.hide()
        if (response.body.code === 0) {
          this.$router.push(response.body.url)
        } else {
          this.$vux.alert.show({content: '绑定失败，请稍后再试', title: '错误'})
        }
      }, response => {
        this.$vux.loading.hide()
        this.$vux.alert.show({content: '服务超时，请联系客服', title: '错误'})
      })
    }
  }
}
</script>

