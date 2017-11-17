<template>
  <div class="charge">
    <divider>购买钻石</divider>
    <div class="box">
    <span>当前剩余钻石: {{number}}</span>
    <br>
       <checker v-model="chose" default-item-class="goods-item" selected-item-class="goods-item-selected">
        <checker-item v-for="(val, i) in data" :key="i" :value="i">
            {{val.title}} <br>
            <span style="color:#8B8AEE"> {{val.price}} 元</span> <br>
            {{val.desc}}
        </checker-item>
      </checker>
    </div>
    <div class="line"></div>
    <div style="margin:10px">应付金额: {{ data[chose]['price'] }} 元</div>
    <box gap="10px 10px" style="margin-top:16px;">
      <x-button type="primary" action-type="button" @click.native="Buy">立即购买</x-button>
    </box>
    <box gap="10px 10px" style="margin-top:16px;">
      <x-button type="primary" action-type="button" @click.native="history">查看购买记录</x-button>
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
  created () {
    // this.$store.commit('updateHeaderTitle', {headerTitle: '充值'})
    this.init()
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.init()
      vm.$store.commit('updateHeaderTitle', {headerTitle: '充值'})
    })
  },
  methods: {
    Buy: function () {
      window.location.href = '/charge/?id=' + this.chose
      // this.$router.push('/success')
    },
    history: function () {
      this.$router.push('/ChargeHistory')
    },
    init () {
      this.http_get('/home/charge-conf').then(res => {
        this.data = res.data.list
        this.number = res.data.card
      })
    }
  },
  data () {
    return {
      chose: 'P001',
      number: 10,
      data: { P001: { price: 0 } }
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
