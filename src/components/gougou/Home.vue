<template>
  <div class="home">
    <!-- <router-link to="/index/home">home</router-link> -->
    <blur :blur-amount=40 :url="url">
      <p class="center"><img :src="url"></p>
    </blur>
    <!-- <div class="user-info">
      <p></p>
    </div> -->
    <card :header="{title:'我的信息'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>1130</span>
          <br/>
          剩余房卡
        </div>
        <div class="vux-1px-r">
          <span>超级管理员</span>
          <br/>
          身份
        </div>
        <div class="vux-1px-r">
          <span>admin</span>
          <br/>
          用户名
        </div>
        <div>
          <span>管理员</span>
          <br/>
          昵称
        </div>
      </div>
    </card>
    <group :title="title[0]">
      <cell :title="title[1]" is-link link="/scales"></cell>
      <cell :title="title[2]" is-link></cell>
      <cell :title="title[3]" is-link></cell>
      <cell :title="title[4]" is-link></cell>
    </group>
    <!-- <flexbox :gutter="0">
      <flexbox-item v-for="(img, index) in images" :key="index"><img :src="img" style="width:100%" @click="url = img"/></flexbox-item>
    </flexbox> -->
  </div>
</template>

<script>
import { Blur, Card, Group, Cell } from 'vux'
export default {
  components: {
    Blur, Card, Group, Cell
  },
  name: 'home',
  data () {
    return {
      images: [
        'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
        'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
      ],
      url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
      title: ['房卡管理', '我的提成', '购买房卡', '卖卡给玩家', '给玩家充房卡']
    }
  },
  computed: {
    getHome: function () {
      return 'test'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~vux/src/styles/1px.less';
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
