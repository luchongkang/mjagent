<template>
  <div class="home">
    <divider>公告</divider>
    <marquee>
      <marquee-item v-for="i in data.affiche" @click.native="alert(i.content)" :key="i.title"  class="align-middle">{{i.title}}</marquee-item>
    </marquee>
    <card :header="{title:'我的信息'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>{{ data.id }}</span>
          <br/>
          代理ID
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
    console.log('created')
    if (this.check_login() === true) {
      console.log('login++++')
      this.init()
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      console.log('routeEnter')
      vm.check_login()
      vm.$store.commit('updateHeaderTitle', {headerTitle: '主页'})
    })
  },
  methods: {
    alert (i) {
      this.$vux.alert.show({title: '公告', content: i})
    },
    init () {
      console.log('init:' + this.check_login())
      this.http_get('/home').then(res => {
        if (!res) return
        this.data = res.data
      })
    }
  },
  name: 'home',
  data () {
    return {
      data: []
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
