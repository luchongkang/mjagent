<template>
  <div class="sell">
    {{ getHome }}
  </div>
</template>

<script>
import Helper from '@/common/helper'

export default {
  name: 'sell',
  created () {
    Helper.$emit('changeTitle', '卖房卡给玩家')
  },
  data () {
    return {
      msg: 'this is Sell Page'
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
