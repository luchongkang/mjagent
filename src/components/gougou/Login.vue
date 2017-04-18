<template>
  <div class="login">
    <form action="">
        <h2>Login Form</h2>
        <div>
        <group> 
            <x-input title="账 号:" placeholder="请输入代理账号" v-model="name"></x-input>
            <x-input title="密 码:" placeholder="请输入密码" novalidate :type="type"  :show-clear="false"  v-model="pwd">
            <x-icon type="eye-disabled" @click="HidePwd" slot="right" v-bind:class="{ hide: eyeDis}"></x-icon>
            <x-icon type="eye"  @click="ShowPwd" slot="right" v-bind:class="{ hide: eye}"></x-icon>
            </x-input>
        </group>
        <toast v-model="error" width="11em" type="warn">{{ msg }}</toast>
        <box gap="10px 10px">
          <x-button type="primary" action-type="button" @click.native="Login">登 录</x-button>
        </box>
        </div>
    </form>
  </div>
</template>

<script>
import {Toast, Box, Group, XInput, XButton} from 'vux'
export default {
  components: {
    Toast, Box, Group, XInput, XButton
  },
  beforeCreate: function () {
    this.$http.get('/login/check').then(response => {
      if (response.body.code === 1) {
        this.$router.push('/index')
      }
    })
  },
  name: 'login',
  data () {
    return {
      name: '',
      pwd: '',
      tip: '显示密码',
      eye: false,
      eyeDis: true,
      type: 'password',
      error: false,
      msg: '用户名或密码错误'
    }
  },
  methods: {
    ShowPwd: function () {
      this.eye = true
      this.eyeDis = false
      this.type = 'text'
    },
    HidePwd: function () {
      this.eye = false
      this.eyeDis = true
      this.type = 'password'
    },
    Login: function () {
      this.http_get()
      if (!this.name) {
        this.msg = '请输入账号'
        this.error = true
        return false
      }
      if (!this.pwd) {
        this.msg = '请输入密码'
        this.error = true
        return false
      }
      this.$vux.loading.show({
        text: 'loading'
      })
      this.$http.post('/login', {username: this.name, password: this.pwd}).then(response => {
        this.$vux.loading.hide()
        if (response.body.code === 0) {
          this.$router.push('/index')
        } else {
          this.msg = response.body.msg
          this.error = true
        }
      }, response => {
        console.log(response)
      })
    }
  },
  head: {
    title: {
      inner: 'Login'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.hide {
  display: none;
}
form {
  width: 300px;
  margin: 4em auto;  
  padding: 3em 1em 2em 1em;
  background: transparent;
  border: 1px solid #ebebeb;
  box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px;
}
.login h2{
  text-align: center;
  margin: 0;
}
.loginInput{
  margin: 0 2em;
}
</style>
