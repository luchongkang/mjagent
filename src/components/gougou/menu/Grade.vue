<template>
  <div>
    <article class="article">
        <section>
             <h3>打分说明：</h3>
     
            <p>1、代理在代理后台可对所有玩家进行信用评级，好评一次加1分，差评一次减1分。</p>
            <p>2、碰到输了就跑的玩家，可打差评。单个用户累积到5次差评（-5），系统将对用户实行手动封号处理。</p>
            <p>3、碰到人品特别好的玩家，可打好评。单个用户累积到5次好评颁发荣誉奖章，并且获取一张房卡奖励。</p>
            <p>4、代理针对同一个玩家只能评分一次，好评和差评只能单选不能复选。</p>
            <p>5、你每天最多只能评分3次，一共最多只能评20个玩家。</p>
            <p>6、只有20个打分机会，请代理慎重打分，恶意打分将对代理进行惩罚。</p>
        </section>
    </article>
    <group>
      <x-input title="玩家ID:" v-model="number"  placeholder="填写ID" type="number"></x-input>
    </group>
    <Box gap="10px 10px">
      <x-button type="primary" action-type="button" @click.native="grade">提交</x-button>
    </Box>
  </div>
</template>

<script>
import { Box, XButton, Group, XInput } from 'vux'
import Helper from '@/common/helper'
export default {
  components: {
    Box, XButton, Group, XInput
  },
  created () {
    Helper.$emit('changeTitle', '给玩家打分')
  },
  name: 'scales',
  data () {
    return {
      number: 0
    }
  },
  methods: {
    grade: function () {
      this.$vux.toast.show({ text: '提交成功' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin: 10px;
}
.article {
  color: #999;
  padding: 20px 15px;
  font-size: 15px;
}
</style>
