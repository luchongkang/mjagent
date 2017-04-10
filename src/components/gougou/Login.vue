<template>
  <div class="login">
    <form action="">
        <h2>Login Form</h2>
        <div>
        <group>
            <x-input title="用户名:" v-model="name"></x-input>
            <x-input title="密 码:" :type="type"  v-model="pwd">
              <x-button @click.native="ShowPwd" slot="right" type="primary" mini>{{ tip }}</x-button>
            </x-input>
        </group>
        <box gap="10px 10px">
          <x-button type="primary" action-type="button" @click.native="Login">登 录</x-button>
        </box>
        </div>
    </form>
  </div>
</template>

<script>
import {Box, Group, XInput, XButton} from 'vux'
export default {
  components: {
    Box, Group, XInput, XButton
  },
  name: 'login',
  data () {
    return {
      name: '',
      pwd: '',
      tip: '显示密码',
      type: 'password',
      msg: '用户名或密码错误'
    }
  },
  methods: {
    ShowPwd: function () {
      if (this.type === 'text') {
        this.tip = '显示密码'
        this.type = 'password'
      } else {
        this.tip = '隐藏秘密'
        this.type = 'text'
      }
    },
    Login: function () {
      this.$http.get('/login').then(response => {
        if (response.body.status === 1) {
          this.$router.push('/index')
        } else {
          this.msg = response.body.msg
          this.dialog = true
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

form {
  width: 300px;
  margin: 4em auto;  
  padding: 3em 2em 2em 2em;
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
