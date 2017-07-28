<template>
  <div>
    <p>一、如何成为代理？</p>
    <p>（1）由上级代理在代理后台开通下级代理账号</p>
    <p>（2）下级代理用微信搜索并关注服务号：酷琪娱乐，按提示绑定手机号即可开通</p>

    <p>二、如何收取返利？</p>
    <p>（1）成为代理后可以在代理后台查看自己的专属推广码，邀请玩家进行游戏，玩家首次充值时绑定代理的邀请码，此后所有的充值都会产生返利</p>
    <p>（2）返利额度累计到一定值，可以申请提现，此时联系微信客服即可提现</p>
    <p>（3）成为代理后请及时完善自己的联系信息，方便客服第一时间能联系到您</p>
    
    <p>三、如何发展下级代理商？</p>
    <p>（1）当您成为代理商后，代理商后台会显示一个您的专属邀请码，邀请好友来玩并让好友绑定该码，就能实现与好友的绑定关系。邀请绑定10人即可开通授权下级代理商的权限。</p>
    <p>（2）邀请绑定的用户不足10人是不能开通授权下级代理商权限的</p>
    <p>（3）在授权代理商的界面，如实填写代理的信息，子代理登陆的时候需要验证手机号所以请如实填写，避免不必要的麻烦</p>
    <p>四、返利规则</p>
    <p>1级代理返利40%</p>
    <p>2级代理返利10%</p>
    <p>3级代理返利5%</p>
    <p>举例：某玩家充值100元，他的邀请人获得40元返利，上上级代理获得10元返利，上上上级代理获得5元返利</p>
    
    <p>五、淘汰机制</p>
    <p>成为代理商后三周内绑定人数达不到10人且充值金额达不到两百元系统自动取消代理资格</p>
 <b> 提示：</b>
 <p style="margin-top: 0;">推广奖励咨询请联系专属客服，微信：gggzmj7</p>
 
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
