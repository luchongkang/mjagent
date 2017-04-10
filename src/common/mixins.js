// import VueResource from 'vue-resource'
export default {
  get () {
  	this.$http.get('/login')
    console.log('test')
  }
}
