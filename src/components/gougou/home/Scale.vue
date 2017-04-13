<template>
  <div class="scale">
    <divider>我的提成</divider>
    <div class="box">
      <p>本月收益: {{number}}</p>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      number: 0
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
