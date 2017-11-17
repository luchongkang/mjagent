<template>
  <div>
    <group title="发放房卡">
    <x-input v-model="uid" title="UID:" required placeholder-align="right"  keyboard="number" placeholder=""></x-input>
    <x-input v-model="num" title="数量:" required placeholder-align="right"  keyboard="number" placeholder=""></x-input>
       <!-- <x-input v-model="un" title="手机号:" required placeholder-align="right" is-type="china-mobile" keyboard="number" placeholder="登录账户"></x-input>
     <x-input v-model="pwd" title="密码 :" required placeholder-align="right" :min="6" :max="12" placeholder="登录密码"></x-input>
      <x-input v-model="nick" title="昵称 :" placeholder-align="right" :max="6" placeholder="昵称" ></x-input>
      <x-input v-model="name" title="姓名 :" placeholder-align="right" :max="6" placeholder="姓名" ></x-input> -->
    </group>
      <Box gap="10px 10px">
      <x-button type="primary"  action-type="button" @click.native="add">发放</x-button>
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
      vm.$store.commit('updateHeaderTitle', {headerTitle: '给用户发卡'})
    })
  },
  name: 'scales',
  data () {
    return {
      uid: '',
      num: ''
    }
  },
  methods: {
    add: function () {
      if (!/^[0-9]+$/.test(this.uid)) {
        return this.$vux.toast.show({ text: '请输入正确的UID', type: 'warn', width: '9em' })
      }
      if (!/^[0-9]+$/.test(this.uid)) {
        return this.$vux.toast.show({ text: '请输入正确的数量', type: 'warn', width: '9em' })
      }
      let params = {
        uid: this.uid,
        num: this.num
      }
      this.http_post('/agent/givecard', params).then(res => {
        if (res.code === 0) {
          this.$vux.toast.show({ text: '发放成功' })
          this.num = ''
        } else {
          this.$vux.toast.show({ text: res.data, type: 'warn' })
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
