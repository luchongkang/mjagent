<template>
  <div class="home">
    <divider>{{data.title}}</divider>
    <marquee>
      <marquee-item :interval="4000" v-for="i in affiche" @click.native="alert(data.content)" :key="i"  class="align-middle">{{i}}</marquee-item> 
    </marquee>
    <card :header="{title:'我的信息'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>{{ data.total }}</span>
          <br/>
          今日收益
        </div>
        <div class="vux-1px-r">
          <span>{{ data.realname }}</span>
          <br/>
          姓名
        </div>
        <div class="vux-1px-r">
          <span>{{ data.name }}</span>
          <br/>
          用户名
        </div>
        <div>
          <span>{{ data.nick }}</span>
          <br/>
          昵称
        </div>
      </div>
    </card>
    <group title="管理">
      <cell title="提成" is-link link="/scale"></cell>
      <cell title="下级代理" is-link link="/agent"></cell>
      <cell title="邀请码" is-link link="/sell"></cell>
      <cell title="更改密码" is-link link="/updatePwd"></cell>
      <cell title="我邀请的人" is-link link="/inviter"></cell>
      <cell title="我的联系方式" is-link link="/contact"></cell>
      <cell title="规则说明" is-link link="/rule"></cell>
    </group>
  </div>
</template>

<script>
import { Blur, Card, Group, Cell, Marquee, MarqueeItem, Divider } from 'vux'
export default {
  components: {
    Blur, Card, Group, Cell, Marquee, MarqueeItem, Divider
  },
  created () {
    if (this.check_login()) {
      this.init()
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.check_login()
      vm.$store.commit('updateHeaderTitle', {headerTitle: '主页'})
    })
  },
  methods: {
    alert (i) {
      this.$vux.alert.show({title: '公告', content: i})
    },
    init () {
      this.http_get('/home').then(res => {
        if (!res) return
        this.data = res.data
        let len = this.data.content.length
        let count = 1
        let start = 0
        let stop = 20
        if (len > stop) {
          count = Math.ceil(this.data.content.length / stop)
        }
        while (count > 0) {
          count--
          this.affiche.push(this.data.content.substring(start, stop))
          stop = stop + 20
          start = start + 20
        }
      })
    }
  },
  name: 'home',
  data () {
    return {
      data: [],
      affiche: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~vux/src/styles/1px.less';
.align-middle {
  text-align: center;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
</style>
