<template>
  <div class="success">
    <msg :title="title" :description="description" :buttons="buttons" :icon="icon"></msg>
  </div>
</template>

<script>
import { Msg, XButton } from 'vux'
export default {
  components: {
    Msg, XButton
  },
  name: 'success',
  created () {
    this.init()
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$store.commit('updateHeaderTitle', {headerTitle: '充值成功'})
    })
  },
  methods: {
    back: function () {
      console.log('back')
    },
    init () {
      this.http_get('/home/get-order').then(res => {
        this.description = res.data.msg
      })
    }
  },
  data () {
    return {
      title: '充值成功',
      description: '',
      icon: '',
      buttons: [{
        type: 'primary',
        text: '继续购买',
        link: '/charge'
      }, {
        type: 'default',
        text: '返回主页',
        link: '/home'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mobile: screen and (max-width:320px);

.line {
  width: 100%;
  height: 1px;
  background-color: #e5e4e8;
  margin-bottom: 1em;
}
.box {
  margin: 0 1em ;
}
.goods-item {
  margin: 10px 15px;
  padding: 15px 0;
  width: 140px;
  @media #{$mobile} {
    width: 110px;
  }
  font-size: 12px;
  text-align: center;
  outline: 1px solid #000;
}

.goods-item-selected {
  outline: 1px solid red;
  box-shadow: 1px 1px 10px red;
}
</style>
