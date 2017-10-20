<template>
  <div class="sell">
    <!-- <p>当前剩余房卡 {{ number }} 张</p> -->
    <Box gap="10px 10px">
      <x-button id="copyBtn" data-clipboard-target=".code"  type="primary" action-type="button">复制充值码</x-button>
    </Box>
    <input class="code" v-model="code" readonly="readonly" style="width:100%;text-align:center">
    <group>
      <cell title="查看玩家购买记录" is-link link="/buyHistory"></cell>
    </group>
    <divider>提 现</divider>
     <group>
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
    <toast v-model="warn" type="warn" width="11em" text="不满足提现条件"></toast>
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
    this.init()
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$store.commit('updateHeaderTitle', {headerTitle: '邀请码'})
      vm.$vux.alert.show({content: '分享朋友圈或者发送此链接给朋友，点击即可绑定玩家', title: '绑定玩家'})
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
      code: '',
      imgUrl: 'http://beta.gtimg.com/rdmimg/exp/image/4b31b1ff-8c9f-4c0e-8b3f-c85fb4ffac0a.png',
      lists: [{
        title: '提现说明',
        desc: '1.收入满100元可提现  2.每天只能提交一次提现申请'
      }],
      list: [{key: '1', value: '5元 ／ 张'}, {key: '2', value: '10元 ／ 张'}]
    }
  },
  methods: {
    cash () {
      this.http_get('/home/cash').then(res => {
        if (res.code === 1) {
          this.$vux.toast.show({ text: res.msg, type: 'warn', width: '12em' })
        } else {
          this.total = 0
          this.$vux.toast.show({ text: '提交成功，请等待审核' })
        }
      })
    },
    init () {
      this.$http.get('/home/code').then(response => {
        let data = response.body.data
        this.code = data.code
        this.total = data.total
        this.$wechat.config({
          debug: true,
          appId: data.appId,
          timestamp: data.time,
          nonceStr: data.str,
          signature: data.sign,
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
        })
        this.$wechat.onMenuShareTimeline({
          title: data.title,
          link: data.url,
          imgUrl: this.imgUrl
        })
        this.$wechat.onMenuShareAppMessage({
          title: data.title,
          desc: data.desc,
          link: data.url,
          imgUrl: this.imgUrl
        })
      }, error => {
        console.log(error)
        this.$vux.alert.show({content: '服务超时，请联系客服', title: '错误'})
      })
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
