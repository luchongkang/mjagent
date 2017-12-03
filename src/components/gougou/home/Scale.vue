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
    <div>
      <table class="tab">
          <thead>
              <tr>
                  <th>金额</th>
                  <th>比例</th>
                  <th>收益</th>
                  <th>昵称</th>
                  <th>UID</th>
                  <th>时间</th>
                  <th>层级</th>

              </tr>
          </thead>
          <tbody v-for="i in list">
              <tr>
                <th>{{ i.price }}</th>
                <th>{{ i.scale }}</th>
                <th>{{ i.num }}</th>
                <th>{{ i.username }}</th>
                <th>{{ i.uid }}</th>
                <th nowrap="nowrap">{{ i.time }}</th>
                <th nowrap="nowrap">第 {{ i.level }} 级</th>
              </tr>
          </tbody>
      </table>

      <p class="more" v-bind:class="{hide : isHide}" @click="getMore">查看更多</p>
      </div>
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
      list: [],
      type: 0
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      console.log(vm.$route.params.type)
      vm.type = vm.$route.params.type
      let title = vm.type.toString() === '0' ? '玩家' : '代理'
      vm.$store.commit('updateHeaderTitle', {headerTitle: title + '提成'})
      vm.init()
    })
  },
  methods: {
    init () {
      this.http_get('/home/get-rebate?type=' + this.type).then(res => {
        this.list = res.data.list
        this.number = res.data.number
        this.pageCount = res.data.pageCount
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
      let url = '/home/get-rebate?start=' + this.start + '&end=' + this.end + ' 23:59:59' + '&type=' + this.type
      this.http_get(url).then(res => {
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
        let url = '/home/get-rebate?start=' + this.start + '&end=' + this.end + ' 23:59:59' + '&page=' + this.page + '&type=' + this.type
        this.http_get(url).then(res => {
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
    word-break: keep-all;
    border-top: 1px solid #ccc;
}
table th {
    padding: 10px 15px;
    border: 1px solid #ddd;
    font-weight: 700;
}
table td{word-break: keep-all;white-space:nowrap;}
</style>
