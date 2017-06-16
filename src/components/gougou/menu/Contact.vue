<template>
  <div>
    <group title="个人联系方式">
      <x-input v-model="nick" title="微信 :" placeholder-align="right" :max="6" placeholder="微信" ></x-input>
      <x-input v-model="name" title="手机 :" placeholder-align="right" :max="6" placeholder="手机号码" ></x-input>
    </group>
      <Box gap="10px 10px">
      <x-button type="primary"  action-type="button" @click.native="add">保存</x-button>
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
      vm.$store.commit('updateHeaderTitle', {headerTitle: '我的联系方式'})
    })
  },
  name: 'scales',
  data () {
    return {
      mobile: '',
      wechat: ''
    }
  },
  methods: {
    add: function () {
      let params = {
        un: this.mobile,
        name: this.wechat
      }
      this.http_post('/agent/contact', params).then(res => {
        if (res.code === 0) {
          this.$vux.toast.show({ text: '保存成功' })
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
