<template>
  <div class="scale">
    <p>本月收益: {{number}}</p>
    <!-- <divider>提 现</divider> -->
     <group>
      <cell title="当前可提现收入">
        <div slot="value">
          <span style="color: green">{{ total}}</span>
        </div>
      </cell>
      <cell title="查看我的提现记录" is-link link="/cashHistory"></cell>
    </group>
    <Box gap="10px 10px">
      <x-button type="primary" action-type="button" @click.native="cash">提现到我的微信钱包</x-button>
    </Box>
    <panel header=""  :list="lists" type="2"></panel>
    <toast v-model="warn" type="warn" width="11em" text="不满足提现条件"></toast>

    <div class="box">
      
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
import { Datetime, Group, Cell, Box, Panel, Divider, XButton, Toast } from 'vux'
export default {
  created () {
    let date = new Date()
    this.start = (date.toLocaleString()).substring(0, 9).replace(/\//g, '-')
    this.end = this.start
    // this.end = (new Date(date.getTime() + (1 * 24 * 60 * 60 * 1000)).toLocaleString()).substring(0, 9).replace(/\//g, '-')
  },
  components: {
    Datetime, Group, Cell, Box, Panel, Divider, XButton, Toast
  },
  name: 'scales',
  data () {
    return {
      isHide: false,
      number: 0,
      total: 0,
      start: '',
      end: '',
      page: 1,
      warn: false,
      pageCount: 0,
      list: [],
      lists: [{
        title: '提现说明',
        desc: '1.收入满100元可提现  2.每天只能提交一次提现申请'
      }],
      type: 0
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.type = vm.$route.params.type
      let title = vm.type.toString() === '0' ? '玩家' : '代理'
      vm.$store.commit('updateHeaderTitle', {headerTitle: title + '提成'})
      vm.init()
    })
  },
  methods: {
    cash () {
      this.http_get('/home/cash').then(res => {
        if (res.code === 1) {
          this.$vux.toast.show({ text: res.msg, type: 'warn', width: '12em' })
        } else {
          this.total = 0
          this.$vux.toast.show({ text: '提交成功，请等待审核' })
        }
      })
    },
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
