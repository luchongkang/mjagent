<template>
<div>
  <li v-for="m in model" :key="m.uid">
    <div
      :class="{bold: isFolder(m)}"
      @click="toggle">
      {{m.name}}
      <span v-if="isFolder(m)">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul v-show="open" v-if="isFolder(m)">
      <item class="item" :model="m.children">
      </item>
    </ul>
  </li>
  </div>
</template>
<script>
export default {
  name: 'item',
  props: {
    model: Array
  },
  data: function () {
    return {
      open: false
    }
  },
  methods: {
    isFolder: function (model) {
      return model.children &&
        model.children.length
    },
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
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
