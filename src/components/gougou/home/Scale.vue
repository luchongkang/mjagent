<template>
  <div class="scale">
    <div class="box">
      <p>本月收益: {{number}}</p>
      <group title="按时间查询">
        <datetime v-model="date" @on-change="change" cancelText="取消" confirmText="确定" title="日期："></datetime>
      </group>
      <div style="padding:15px;">
      <x-button type="primary" @click.native="search">查 询</x-button>
    </div>

      <table class="tab">
          <thead>
              <tr>
                  <th>购买金额</th>
                  <th>提成比例</th>
                  <th>我的收益</th>
                  <th>代理层级</th>
              </tr>
          </thead>
          <tbody v-for="i in list">
              <tr>
                <th>{{ i.price }}</th>
                <th>{{ i.scale }}</th>
                <th>{{ i.num }}</th>
                <th>第 {{ i.level }} 级</th>
              </tr>
          </tbody>
      </table>
      </table>
    </div>
  </div>
</template>

<script>
import { Datetime, Group, XButton } from 'vux'
export default {
  created () {
    this.date = (new Date().toLocaleString()).substring(0, 9)
  },
  components: {
    Datetime, Group, XButton
  },
  name: 'scales',
  data () {
    return {
      number: 0,
      date: '',
      list: []
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$store.commit('updateHeaderTitle', {headerTitle: '我的提成'})
      vm.init()
    })
  },
  methods: {
    init () {
      this.http_get('/home/get-rebate').then(res => {
        this.list = res.data.list
        this.number = res.data.number
      })
    },
    change: function (value) {
      this.date = value
    },
    search () {
      this.http_get('/home/get-rebate?date=' + this.date).then(res => {
        this.list = res.data.list
        this.number = res.data.number
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin:1em;
}
table {
    display: block;
    width: 100%;
    overflow: auto;
    margin: 1em;
    margin-bottom: 16px;
    border-spacing: 0;
    border-collapse: collapse;
}
table tr {
    background-color: #fff;
    border-top: 1px solid #ccc;
}
table th {
    padding: 10px 15px;
    border: 1px solid #ddd;
    font-weight: 700;
}
</style>
