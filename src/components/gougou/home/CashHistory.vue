<template>
  <div class="scale">
    <divider v-bind:class="{hide: !hide}">暂无相关记录</divider>
    <panel v-bind:class="{hide:hide}" header="提现记录列表" @on-click-footer="getMore" :footer="footer" :list="list" type="2"></panel>
  </div>
</template>

<script>
import { Divider, Panel } from 'vux'
export default {
  components: {
    Divider, Panel
  },
  created () {
    this.init()
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$store.commit('updateHeaderTitle', {headerTitle: '提现记录'})
      vm.init()
    })
  },
  name: 'scales',
  data () {
    return {
      hide: false,
      list: [],
      footer: {
        title: '查看更多'
      }
    }
  },
  methods: {
    init () {
      this.http_get('/home/cash-list').then((res) => {
        if (res.data.length === 0) {
          this.hide = true
        } else {
          this.list = res.data
        }
      })
    },
    getMore () {
      this.$vux.toast.show({text: '没有更多了'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hide {
  display: none;
}
</style>
