<template>
  <div class="home">
    <!-- <router-link to="/index/home">home</router-link> -->
    {{ getHome }}
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'this is Home Page'
    }
  },
  computed: {
    getHome: function () {
      return this.msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {

}
</style>
