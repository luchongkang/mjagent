<template>
  <div>
    <group>
      <x-input title="推荐人ID:" placeholder-align="right" placeholder="填写ID" type="number"></x-input>
      <x-input title="昵  称:" placeholder-align="right" placeholder="代理人昵称" ></x-input>
      <x-input title="手机号码:" placeholder-align="right" placeholder="代理人手机号码" ></x-input>
    </group>
      <Box gap="10px 10px">
      <x-button type="primary"  action-type="button" @click.native="add">添加下级代理</x-button>
    </Box>
  </div>
</template>

<script>
import { Box, XButton, Group, XInput } from 'vux'
import Helper from '@/common/helper'
export default {
  components: {
    Box, XButton, Group, XInput
  },
  created () {
    Helper.$emit('changeTitle', '添加代理')
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
      this.$vux.loading.show({ text: '提交中' })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.$vux.toast.show({ text: '添加成功' })
      }, 1000)
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
