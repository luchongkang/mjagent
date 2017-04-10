<template>
  <div class="login">
    <form action="">
        <h2>Login Form</h2>
        <div class="loginInput">
            {{ msg }}
          </mu-dialog>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      name: '',
      pwd: '',
      dialog: false,
      msg: '用户名或密码错误'
    }
  },
  methods: {
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
    },
    close: function () {
      this.dialog = false
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
<style scoped lange="scss">
form {
  width: 380px;
  margin: 4em auto;  
  padding: 3em 2em 2em 2em;
  background: #fafafa;
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
