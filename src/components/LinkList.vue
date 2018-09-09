<template>
  <div class="c-LinkList">
    <!--路由跳转采用命名形式跳转-->
    <router-link :to="{name:'Home'}"
                 class="c-LinkList-item">跳转主页</router-link>
    <router-link :to="{name:'UserCenter'}"
                 class="c-LinkList-item">跳转个人中心</router-link>
    <router-link :to="{name:'VuexTest'}"
                 class="c-LinkList-item">跳转Vuex测试页</router-link>
    <router-link :to="{name:'ClickOutSideTest'}"
                 class="c-LinkList-item">跳转ClickOutSideTest测试页</router-link>
    <router-link :to="{name:'ImgLazyLoadTest'}"
                 class="c-LinkList-item">跳转ImgLazyLoadTest测试页</router-link>
    <router-link :to="{name:'AxiosTest'}"
                 class="c-LinkList-item">跳转AxiosTest测试页</router-link>
    <router-link :to="{name:'InputAutoHeightTest'}"
                 class="c-LinkList-item">跳转InputAutoHeightTest测试页</router-link>

  </div>
</template>

<script>
/**
 * * LinkList
 */
export default {
  name: 'LinkList'
}
</script>

<style scoped lang="scss">
.c-LinkList {
  @at-root #{&}-item {
    color: green;
    @at-root #{&}.router-link-active {
      color: red;
    }
  }
}
</style>
