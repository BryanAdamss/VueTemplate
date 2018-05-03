<template>
  <div>
    <h1>testa</h1>
  </div>
</template>

<script>
  export default {
    name: 'TestA'
  },
  // 路由离开前，重设样式
    beforeRouteLeave(to, from, next) {
     alert('我将要离开了')
      next();
    }
</script>

<style lang="scss" scoped>
  div {
    color: blue;
  }
</style>
