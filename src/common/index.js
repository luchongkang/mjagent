export default {
  methods: {
    http_get: function () {
      this.$http.get('/login').then(response => {
        console.log(response.body)
      }, response => {
        console.log(response)
      })
    }
  }
}
