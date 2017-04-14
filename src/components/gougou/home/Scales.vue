<template>
  <div class="scale">
    <divider>我的提成</divider>
    <div class="box">
      <p>本月收益: {{number}}</p>
      <router-link to="/home/scale">test</router-link>
  <transition name="slide-fade">
    <router-view></router-view>
  </transition>
    </div>
  </div>
</template>

<script>
import { Divider } from 'vux'
export default {
  components: {
    Divider
  },
  name: 'scales',
  data () {
    return {
      number: 0,
      show: true
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
.slide-fade-enter-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
