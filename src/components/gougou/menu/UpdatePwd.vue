<template>
  <div>
    <group>
      <x-input title="原始密码:"  v-model="pwd" type="password" ></x-input>
      <x-input title="新密码 :"   v-model="newpwd"  type="password"></x-input>
      <x-input title="重复密码:"  v-model="repwd" type="password"></x-input>
    </group>
      <Box gap="10px 10px">
      <x-button type="primary"  action-type="button" @click.native="update">确 定</x-button>
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
    Helper.$emit('changeTitle', '我的下级代理')
  },
  name: 'scales',
  data () {
    return {
      pwd: '',
      newpwd: '',
      repwd: ''
    }
  },
  methods: {
    update: function () {
      if (this.pwd.length < 6 || this.newpwd.length < 6 || this.repwd.length < 6) {
        return this.$vux.toast.show({text: '密码不能小于6位', type: 'warn', width: '9em'})
      }
      this.$vux.toast.show({text: '修改成功'})
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
