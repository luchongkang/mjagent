<template>
  <div class="charge">
    <divider>购买房卡</divider>
    <div class="box">
    <span>当前剩余房卡: {{number}}</span>
    <br>
       <checker v-model="chose" default-item-class="goods-item" selected-item-class="goods-item-selected">
        <checker-item v-for="(val, i) in data" :key="i" :value="val">
            {{val.title}} <br>
            <span style="color:#8B8AEE"> {{val.money}} 元</span> <br>
            {{val.desc}}
        </checker-item>
      </checker>
      <br>
      <br>
    </div>
    <div class="line"></div>
    <div style="margin:10px">应付金额: {{chose.money}} 元</div>
    <box gap="10px 10px" style="margin-top:16px;">
          <x-button type="primary" action-type="button" @click.native="Buy">立即购买</x-button>
        </box>
  </div>
</template>

<script>
import { Divider, Checker, CheckerItem, XButton, Box } from 'vux'
export default {
  components: {
    Divider, Checker, CheckerItem, XButton, Box
  },
  name: 'charge',
  methods: {
    Buy: function () {
      console.log('buy')
    }
  },
  data () {
    return {
      chose: { 'title': '新手礼包', 'num': 100, 'money': 1, 'id': 1, 'desc': '100张房卡' },
      number: 10,
      data: [
        { 'title': '新手礼包', 'num': 100, 'money': 1, 'id': 1, 'desc': '100张房卡' },
        { 'title': '新手礼包', 'num': 1000, 'money': 10, 'id': 2, 'desc': '200张房卡' },
        { 'title': '新手礼包', 'num': 2000, 'money': 100, 'id': 3, 'desc': '300张房卡' },
        { 'title': '新手礼包', 'num': 3000, 'money': 200, 'id': 4, 'desc': '400张房卡' },
        { 'title': '新手礼包', 'num': 5000, 'money': 300, 'id': 5, 'desc': '500张房卡' }

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mobile: screen and (max-width:320px);

.line {
  width: 100%;
  height: 1px;
  background-color: #e5e4e8;
  margin-bottom: 1em;
}
.box {
  margin: 0 1em ;
}
.goods-item {
  margin: 10px 15px;
  padding: 15px 0;
  width: 140px;
  @media #{$mobile} {
    width: 110px;
  }
  font-size: 12px;
  text-align: center;
  outline: 1px solid #000;
}

.goods-item-selected {
  outline: 1px solid red;
  box-shadow: 1px 1px 10px red;
}
</style>
