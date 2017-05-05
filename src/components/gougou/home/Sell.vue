<template>
  <div class="sell">
    <p>当前剩余房卡 {{ number }} 张</p>
     <group :title="'当前售价 ( 点击修改价格 )'">
      <selector title="房卡价格" :options="list" v-model="price"></selector>
    </group>
    <Box gap="10px 10px">
      <x-button id="copyBtn" data-clipboard-target=".linkUrl"  type="primary" action-type="button">复制充值码</x-button>
    </Box>
    <input class="linkUrl" v-model="linkUrl" readonly="readonly" style="width:100%">
    <group>
      <cell title="查看玩家购买记录" is-link link="/buyHistory"></cell>
    </group>
    <divider>提 现</divider>
     <group>
      <cell title="卖房卡总收入">
        <div slot="value">
          <span style="color: green">{{ total}}</span>
        </div>
      </cell>
      <cell title="当前可提现收入">
        <div slot="value">
          <span style="color: green">{{ total}}</span>
        </div>
      </cell>
      <cell title="查看我的提现记录" is-link link="/cashHistory"></cell>
    </group>
    <Box gap="10px 10px">
      <x-button type="primary" action-type="button" @click.native="cash">提现到我的微信钱包</x-button>
    </Box>
    <panel header=""  :list="lists" type="2"></panel>
    <toast v-model="show" text="复制成功"></toast>
    <toast v-model="error" type="warn" text="复制失败"></toast>
    <toast v-model="warn" type="warn" width="11em" text="不满足体现条件"></toast>
  </div>
</template>

<script>
import { XButton, Group, Selector, Box, Cell, Divider, Panel, Toast } from 'vux'
import Copy from 'clipboard'
export default {
  components: {
    XButton, Group, Selector, Box, Cell, Divider, Panel, Toast
  },
  name: 'sell',
  created () {
    let copy = new Copy('#copyBtn')
    var that = this
    copy.on('success', function () {
      that.show = true
    })
    copy.on('error', function () {
      that.error = true
    })
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$store.commit('updateHeaderTitle', {headerTitle: '邀请码'})
    })
  },
  data () {
    return {
      number: 0,
      price: 1,
      total: 0,
      show: false,
      error: false,
      warn: false,
      linkUrl: '',
      lists: [{
        title: '提现说明',
        desc: '1.收入满100元可提现  2.今天的收入明天可申请提现'
      }],
      list: [{key: '1', value: '5元 ／ 张'}, {key: '2', value: '10元 ／ 张'}]
    }
  },
  methods: {
    cash () {
      this.warn = true
    }
  },
  computed: {
    getHome: function () {
      return this.msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sell p {
  margin: 10px;
}
.price {

}
.linkUrl {
    color: #999;
    text-align: center;
    width: 100%;
    display: inline-block;
}
</style>
