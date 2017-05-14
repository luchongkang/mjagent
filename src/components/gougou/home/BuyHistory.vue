<template>
  <div class="scale">
    <divider v-bind:class="{hide: !hide}">暂无相关记录</divider>
    <panel v-bind:class="{hide:hide}" header="购买记录列表" @on-click-footer="getMore" :footer="footer" :list="list" type="2"></panel>
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
      vm.$store.commit('updateHeaderTitle', {headerTitle: '玩家购买记录'})
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
      this.$http.get('/home/charge-list').then((response) => {
        console.log(response.body)
        if (response.body.data.length === 0) {
          this.hide = true
        } else {
          this.list = response.body.data
          console.log(response.body)
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
