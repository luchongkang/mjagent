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
      page: 1,
      pageCount: 0,
      footer: {
        title: '查看更多'
      }
    }
  },
  methods: {
    init (page = 1) {
      this.http_get('/home/charge-list?page=' + page).then((res) => {
        if (res.data.list.length === 0 && page === 1) {
          this.hide = true
        } else {
          this.list.push.apply(this.list, res.data.list)
          this.pageCount = res.data.pageCount
        }
      })
    },
    getMore () {
      ++this.page
      if (this.page <= this.pageCount) {
        this.init(this.page)
      } else {
        this.$vux.toast.show({text: '没有更多了'})
      }
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
