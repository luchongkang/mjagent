<template>
  <div>
      <Box gap="10px 10px">
      <x-button type="primary" action-type="button" @click.native="give">给用户发卡</x-button>
    </Box>
    <!-- <p>我的下级代理  0 人</p> -->
     <table class="tab">
          <thead>
              <tr>
                  <th>UID</th>
                  <th>用户名</th>
                  <th>开通时间</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="i in list">
                <td>{{ i.id }}</td>
                <td>{{ i.un }}</td>
                <td>{{ i.time }}</td>
              </tr>
          </tbody>
      </table>
      <p class="more" v-bind:class="{hide : isHide}" @click="getMore">查看更多</p>
  </div>
</template>

<script>
import { Box, XButton } from 'vux'
export default {
  components: {
    Box, XButton
  },
  created () {
    this.init()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('updateHeaderTitle', {headerTitle: '我的邀请人'})
    })
  },
  name: 'scales',
  data () {
    return {
      isHide: true,
      page: 1,
      pageCount: 0,
      list: []
    }
  },
  methods: {
    give: function () {
      this.$router.push('/GiveCard')
    },
    init (page = 1) {
      this.http_get('/user/list?page=' + page).then(res => {
        this.list.push.apply(this.list, res.data.list)
        this.pageCount = res.data.pageCount
        if (this.pageCount === 0 || this.pageCount === 1) {
          this.isHide = true
        } else {
          this.isHide = false
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
.more {
  color: #586C94;
  font-size: 14px;
}
p {
  margin: 10px;
}
table {
    display: block;
    width: 100%;
    overflow: auto;
    margin: .5em 1em;
    margin-bottom: 16px;
        border-spacing: 0;
    border-collapse: collapse;
}
table tr {
    background-color: #fff;
    border-top: 1px solid #ccc;
}
table td {
  padding: 10px 5px;
   border: 1px solid #ccc;
   text-align: center;
}
table th {
    padding: 10px 5px;
    border: 1px solid #ddd;
    font-weight: 700;
}
</style>
