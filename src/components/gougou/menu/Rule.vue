<template>
  <div>
    <p>一、如何收取返利？</p>

   <p>（1）在您成为代理商后需先退出游戏，重新微信授权登陆游戏，由此工作人员便能获取您个人的OPENID作为转账凭证，每周根据结算额直接转账至您的微信零钱中。
  （2）代理商的微信钱包必须进行身份证验证并且绑定个人银行卡，才能实现返利收取。
  </p>
  <p>二、如何发展下级代理商？</p>

  <p>（1）当您成为代理商后，代理商后台会显示一个您的专属邀请码，邀请好友来玩并让好友绑定该码，就能实现与好友的绑定关系。邀请绑定10人即可开通授权下级代理商的权限。</p>
  <p>（2）邀请绑定的用户不足10人是不能开通授权下级代理商权限的哦。</p>
  <p>（3）在授权代理商的界面，填写您想授权的用户ID并点击授权，此ID用户便可成为您的下级代理商。</p>
  

 <b> 提示：</b>
 <p style="margin-top: 0;"> 推广奖励咨询请联系专属客服电话：{{mobile}} <br> 微信：{{wx}}</p>
 
  </div>
</template>

<script>
export default {
  created () {
    this.init()
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
