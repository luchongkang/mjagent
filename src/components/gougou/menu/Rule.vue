<template>
  <div>
    <p>一、如何成为代理？</p>
    <p>（1）由上级代理联系 客服微信:phmj6688 开通下级代理账号</p>

    <p>二、如何收取返利？</p>
    <p>（1）成为代理后可以通过联系 客服微信:phmj6688 开通下级代理权限 并绑定成为你的下级代理,此后下级代理包括其下级代理所有的充值都会产生 返利</p>
    <p>（2）返利额度累计到一定值，可以申请提现，此时联系微信客服即可提现</p>
    <p>（3）成为代理后请及时完善自己的联系信息，方便客服第一时间能联系到您</p>
    
    <p>三、返利规则</p>
    <p>1级代理返利20%</p>
    <p>2级代理返利10%</p>
    <p>举例：某代理充值1000元，他的邀请代理获得200元返利，上上级代理获得100元返利,任何具有此政策的代理都可以享受无数量限制的下级以及下下 级代理的充值返利</p>
    <p>四、淘汰机制</p>
    <p>成为代理商后三周内绑定人数达不到10人且充值金额达不到两百元系统自动取消代理资格</p>
    
 <!-- <b> 提示：</b>
 <p style="margin-top: 0;">推广奖励咨询请联系专属客服，微信：gggzmj7</p> -->
 
  </div>
</template>

<script>
export default {
  created () {
    // this.init()
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$store.commit('updateHeaderTitle', {headerTitle: '规则说明'})
    })
  },
  name: 'rule',
  data () {
    return {
      mobile: '189xxxxxxxx',
      wx: '2342xxxxx'
    }
  },
  methods: {
    init () {
      this.http_get('/home/tel').then(res => {
        this.mobile = res.data.m
        this.wx = res.data.w
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p,b {
  margin: 10px;
}
</style>
