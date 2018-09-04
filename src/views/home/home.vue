<template>
  <div class="c-Home">Home
    <h2>aa</h2>
    <h1 v-clickoutside="onClickOutside">test</h1>
  </div>
</template>
<script>
// * clickOutSide指令
import clickoutside from '@/directives/clickOutside'

export default {
  // 组件需命名，采用帕斯卡风格
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to home page!'
    }
  },
  methods: {
    onClickOutside(e) {
      console.log('onClickOutside', e)
    }
  },
  directives: {
    clickoutside
  }
}
</script>

<style lang="scss" scoped>
// js中的import可以使用webpack.base中定义的路径别名
// sass中无法使用，必须用相对路径

.c-Home {
  @include bgAlpha();
}
</style>
