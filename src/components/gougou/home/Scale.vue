<template>
  <div class="scale">
    <divider>我的提成</divider>
    <div class="box">
      <p style="margin-left:1em;margin-bottom:1em">本月收益: {{number}}</p>
      <p style="margin-left:.5em;margin-bottom:1em">下级代理购买</p>
      <table class="tab">
          <thead>
              <tr>
                  <th>购买金额</th>
                  <th>提成比例</th>
                  <th>我的收益</th>
              </tr>
          </thead>
          <tbody>
              <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              </tr>
          </tbody>
      </table>
      <p style="margin-left:.5em;">下下级代理购买</p>
      <table class="tab">
          <thead>
              <tr>
                  <th>购买金额</th>
                  <th>提成比例</th>
                  <th>我的收益</th>
              </tr>
          </thead>
          <tbody>
              <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              </tr>
          </tbody>
      </table>


    </div>
  </div>
</template>

<script>
import { Divider } from 'vux'
export default {
  components: {
    Divider
  },
  name: 'scales',
  data () {
    return {
      number: 0,
      show: true
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$store.commit('updateHeaderTitle', {headerTitle: '我的提成'})
    })
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
table {
    display: block;
    width: 100%;
    overflow: auto;
    margin: 1em 3em;
    margin-bottom: 16px;
    border-spacing: 0;
    border-collapse: collapse;
}
table tr {
    background-color: #fff;
    border-top: 1px solid #ccc;
}
table th {
    padding: 16px 23px;
    border: 1px solid #ddd;
    font-weight: 700;
}
</style>
