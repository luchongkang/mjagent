export default {
  methods: {
    check_login () {
      // 检验是否已经登录
      let login = window.sessionStorage.getItem('isLogin')
      console.log('check_login+++:' + login)
      if (!login) {
        console.log('check_login======')
        this.$router.push('/login')
      }
      console.log('check_login-----')
      return login
    },
    http_get: function (url) {
      this.$vux.loading.show({ text: 'loading' })
      return this.$http.get(url).then(response => {
        this.$vux.loading.hide()
        if (response.body.code === -1) {
          return this.$router.push('/login')
        }
        return new Promise((resolve, reject) => {
          resolve(response.body)
        })
      }, error => {
        this.$vux.loading.hide()
        console.log(error)
        this.$vux.alert.show({content: '服务超时，请联系客服', title: '错误'})
      })
    },
    http_post (url, params) {
      this.$vux.loading.show({ text: '提交中' })
      return this.$http.post(url, params).then(response => {
        this.$vux.loading.hide()
        return new Promise((resolve, reject) => {
          resolve(response.body)
        })
      }, error => {
        this.$vux.loading.hide()
        console.log(error)
        this.$vux.alert.show({content: '服务超时，请联系客服', title: '错误'})
      })
    }
  }
}
