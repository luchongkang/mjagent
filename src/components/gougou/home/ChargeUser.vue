<template>
  <div>
    <p>当前剩余房卡 {{ number }} 张</p>
    <group>
      <x-input title="用户ID ：|" placeholder="填写用户的ID" type="number"  v-model="uid"></x-input>
      <x-input title="房卡数量：|" placeholder="充值房卡的数量" type="number"  v-model="chargeNum"></x-input>
    </group>
    <Box gap="10px 10px">
      <x-button type="primary" action-type="button" @click.native="charge">确 定</x-button>
    </Box>
    <p>1.确定后房卡会直接进入玩家的游戏账户</p>
    <p>2.需提醒玩家先关闭游戏程序在重新进入游戏，房卡才能进入账户</p>
    <group>
      <cell title="给玩家的充值记录" is-link link="/chargeUserHistory"></cell>
    </group>
  </div>
</template>

<script>
import { Group, XInput, XButton, Box, Cell } from 'vux'
import Helper from '@/common/helper'
export default {
  components: {
    Group, XInput, XButton, Box, Cell
  },
  created () {
    Helper.$emit('changeTitle', '给玩家充值房卡')
  },
  name: 'scales',
  data () {
    return {
      uid: 0,
      number: 0,
      chargeNum: 0
    }
  },
  methods: {
    charge: function () {
      // this.$vux.loading.show({
      //   text: '充值中'
      // })
      setTimeout(() => {
        // this.$vux.loading.hide()
        // this.$vux.alert.show({
        //   title: '充值成功',
        //   content: '已经充值到用户的账户里面了'
        // })
      }, 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin: 10px;
}
</style>
