<template>
  <div class="scale">
    <divider>暂无相关记录</divider>
  </div>
</template>

<script>
import { Divider } from 'vux'
import Helper from '@/common/helper'
export default {
  components: {
    Divider
  },
  created () {
    Helper.$emit('changeTitle', '提现记录')
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

</style>
