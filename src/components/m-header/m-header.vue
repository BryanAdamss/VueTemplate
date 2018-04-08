<template>
  <div class="c-Header">
    <!--路由跳转采用命名形式跳转-->
    <router-link :to="{name:'Home'}" class="c-Header-item">linkToHome</router-link>
    <router-link :to="{name:'TestA'}" class="c-Header-item">linkToA</router-link>
    <router-link :to="{name:'TestB'}" class="c-Header-item">linkToB</router-link>
  </div>
</template>

<script>
  export default {
    name: 'MHeader'
  }
</script>

<style scoped lang="scss">
  .c-Header {
    @at-root #{&}-item {
      color: green;
      @at-root #{&}.router-link-active {
        color: red;
      }
    }
  }
</style>
