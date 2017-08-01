<template>
  <div class="scale">
    <div class="box">
      <p>本月收益: {{number}}</p>
      <group title="按时间查询">
        <datetime v-model="start" @on-change="change" cancelText="取消" confirmText="确定" title="开始时间："></datetime>
        <datetime v-model="end" @on-change="changeEnd" cancelText="取消" confirmText="确定" title="结束时间："></datetime>
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
      <p class="more" v-bind:class="{hide : isHide}" @click="getMore">查看更多</p>
    </div>
  </div>
</template>

<script>
import { Datetime, Group, XButton } from 'vux'
export default {
  created () {
    let date = new Date()
    this.start = (date.toLocaleString()).substring(0, 9).replace(/\//g, '-')
    this.end = this.start
    // this.end = (new Date(date.getTime() + (1 * 24 * 60 * 60 * 1000)).toLocaleString()).substring(0, 9).replace(/\//g, '-')
  },
  components: {
    Datetime, Group, XButton
  },
  name: 'scales',
  data () {
    return {
      isHide: false,
      number: 0,
      start: '',
      end: '',
      page: 1,
      pageCount: 0,
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
        this.pageCount = res.data.pageCount
        console.log(this.pageCount)
        if (this.pageCount === 0 || this.pageCount === 1) {
          this.isHide = true
        }
      })
    },
    change: function (value) {
      this.start = value
    },
    changeEnd: function (value) {
      this.end = value
    },
    search () {
      this.http_get('/home/get-rebate?start=' + this.start + '&end=' + this.end + ' 23:59:59').then(res => {
        this.list = res.data.list
        this.number = res.data.number
        this.pageCount = res.data.pageCount
        this.page = 1
        if (this.pageCount === 1) {
          this.isHide = true
        } else {
          this.isHide = false
        }
      })
    },
    getMore () {
      ++this.page
      if (this.page <= this.pageCount) {
        this.http_get('/home/get-rebate?start=' + this.start + '&end=' + this.end + ' 23:59:59' + '&page=' + this.page).then(res => {
          this.list.push.apply(this.list, res.data.list)
          this.number = res.data.number
          this.pageCount = res.data.pageCount
          if (this.pageCount === this.page) {
            this.isHide = true
          } else {
            this.isHide = false
          }
        })
      } else {
        this.$vux.toast.show({text: '没有更多了'})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hide {
  display: none;
}
.more {
  color: #586C94;
  font-size: 14px;
}
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
