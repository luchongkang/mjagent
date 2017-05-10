<template>
  <div>
    <group title="用户名必须由6-12位字母和数字组成">
      <x-input v-model="un" title="用户名:" required placeholder-align="right" :min="6" :max="12" placeholder="登录账户"></x-input>
      <x-input v-model="pwd" title="密码 :" required placeholder-align="right" :min="6" :max="12" placeholder="登录密码"></x-input>
      <x-input v-model="nick" title="昵称 :" placeholder-align="right" :max="6" placeholder="昵称" ></x-input>
      <x-input v-model="name" title="姓名 :" placeholder-align="right" :max="6" placeholder="姓名" ></x-input>
    </group>
      <Box gap="10px 10px">
      <x-button type="primary"  action-type="button" @click.native="add">添加下级代理</x-button>
    </Box>
  </div>
</template>

<script>
import { Box, XButton, Group, XInput } from 'vux'
export default {
  components: {
    Box, XButton, Group, XInput
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('updateHeaderTitle', {headerTitle: '新增代理'})
    })
  },
  name: 'scales',
  data () {
    return {
      un: '',
      pwd: '',
      nick: '',
      name: ''
    }
  },
  methods: {
    add: function () {
      if (this.un.length < 6 || this.un.length > 12 || !/^[A-Za-z0-9]+$/.test(this.un)) {
        return this.$vux.toast.show({ text: '用户名必须由6-12位字母和数字组成', type: 'warn', width: '9em' })
      }
      if (this.un.length < 6) {
        return this.$vux.toast.show({ text: '密码必须大于6位数字', type: 'warn', width: '9em' })
      }
      if (!/^[a-zA-Z]\w{5,20}$/.test(this.pwd)) {
        return this.$vux.toast.show({ text: '密码不能含有汉字', type: 'warn', width: '9em' })
      }
      let params = {
        un: this.un,
        pwd: this.pwd,
        nick: this.nick,
        name: this.name
      }
      this.http_post('/agent/save', params).then(res => {
        if (res.code === 1) {
          this.$vux.toast.show({ text: '添加成功' })
          this.un = ''
          this.pwd = ''
          this.nick = ''
          this.name = ''
        } else {
          this.$vux.toast.show({ text: res.msg, type: 'warn' })
        }
      })
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
