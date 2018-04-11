<template>
  <div class="c-Home">Home</div>
</template>
<script>
  export default {
    // 组件需命名，采用帕斯卡风格
    name: 'Home',
    data() {
      return {
        msg: 'Welcome to home page!'
      }
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
