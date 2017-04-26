<template>
  <div class="home">
    <!-- <router-link to="/index/home">home</router-link> -->
    <group>
      <cell title="我的下级代理" value="" is-link link="agent"></cell>
      <cell title="房卡购买记录" value="" is-link link="chargeHistory"></cell>
      <cell title="给用户打分" value="" is-link link="grade"></cell>
      <cell title="修改密码" value="" is-link link="updatePwd"></cell>
    </group>
  </div>
</template>

<script>
import { Group, CellBox, Cell } from 'vux'
export default {
  components: {
    Group, CellBox, Cell
  },
  created () {
    this.$store.commit('updateHeaderTitle', {headerTitle: '其它菜单'})
  },
  name: 'menu',
  data () {
    return {
      msg: 'this is Menu Page'
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
.home {

}
</style>
