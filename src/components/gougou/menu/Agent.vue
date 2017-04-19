<template>
  <div>
    <p>下级代理</p>
    <Box gap="10px 10px">
      <x-button type="primary" action-type="button" @click.native="add">添加下级代理</x-button>
    </Box>
    <p>我的下级代理  {{ number }} 人</p>
     <table class="tab">
          <thead>
              <tr>
                  <th>昵称</th>
                  <th>用户名</th>
                  <th>初始密码</th>
                  <th>开通时间</th>
              </tr>
          </thead>
          <tbody>
              <tr>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import { Box, XButton } from 'vux'
import Helper from '@/common/helper'
export default {
  components: {
    Box, XButton
  },
  created () {
    Helper.$emit('changeTitle', '我的下级代理')
  },
  name: 'scales',
  data () {
    return {
      number: 0,
      show: true
    }
  },
  methods: {
    add: function () {
      this.$router.push('/editAgent')
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
table th {
    padding: 10px 5px;
    border: 1px solid #ddd;
    font-weight: 700;
}
</style>
