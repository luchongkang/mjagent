<template>
<div>
  <li v-for="m in model" :key="m.uid">
    <div
      :class="{bold: isFolder}"
      @click="toggle"
      @dblclick="changeType">
      {{m.name}}
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <item
        class="item"  :key="m.name"
        v-for="model in m.children"
        :model="model">
      </item>
      <!-- <li class="add" @click="addChild">+</li> -->
    </ul>
  </li>
  </div>
</template>
<script>
export default {
  name: 'item',
  props: {
    model: Object
  },
  // created () {
  //   console.log(this.model)
  // },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        this.set(this.model, 'children', [])
        this.addChild()
        this.open = true
      }
    },
    addChild: function () {
      this.model.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>

<style scoped>

.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
