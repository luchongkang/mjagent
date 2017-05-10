<template>
  <div>
    <Box gap="10px 10px">
      <x-button type="primary" action-type="button" @click.native="add">添加下级代理</x-button>
    </Box>
    <p>我的下级代理  0 人</p>
     <table class="tab">
          <thead>
              <tr>
                  <th>昵 称</th>
                  <th>用户名</th>
                  <th>状 态</th>
                  <th>开通时间</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="i in list">
                <td>{{ i.nick }}</td>
                <td>{{ i.un }}</td>
                <td>{{ i.status }}</td>
                <td>{{ i.time }}</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import { Box, XButton } from 'vux'
export default {
  components: {
    Box, XButton
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('updateHeaderTitle', {headerTitle: '下级代理'})
      vm.init()
    })
  },
  name: 'scales',
  data () {
    return {
      list: [{nick: 'nick', un: 'un', status: '正常', time: '2017-07-09'}]
    }
  },
  methods: {
    add: function () {
      this.$router.push('/editAgent')
    },
    init () {
      // df
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
