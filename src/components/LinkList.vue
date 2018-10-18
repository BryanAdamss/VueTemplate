<template>
  <ul class="c-LinkList">
    <!--路由跳转采用命名形式跳转-->
    <!-- exact标识路由样式匹配采用精准模式 -->
    <router-link v-for="(route,index) in routes"
                 :key="index"
                 :to="{name:route.name}"
                 exact
                 tag="li"
                 class="c-LinkList-item">
      跳转{{route.name}}
    </router-link>

    <!-- <router-link :to="{name:'Home'}"
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
    <router-link :to="{name:'BetterScrollTest'}"
                 class="c-LinkList-item">跳转BetterScrollTest测试页</router-link>
    <router-link :to="{name:'DragTest'}"
                 class="c-LinkList-item">跳转DragTest测试页</router-link>
    <router-link :to="{name:'ModalTest'}"
                 class="c-LinkList-item">跳转ModalTest测试页</router-link>
    <router-link :to="{name:'PopUpTest'}"
                 class="c-LinkList-item">跳转PopUpTest测试页</router-link>
    <router-link :to="{name:'ToastTest'}"
                 class="c-LinkList-item">跳转ToastTest测试页</router-link>
    <router-link :to="{name:'ConfirmTest'}"
                 class="c-LinkList-item">跳转ConfirmTest测试页</router-link>
    <router-link :to="{name:'GoToTopTest'}"
                 class="c-LinkList-item">跳转GoToTopTest测试页</router-link>
    <router-link :to="{name:'ClickAreaExpandTest'}"
                 class="c-LinkList-item">跳转ClickAreaExpandTest测试页</router-link>
    <router-link :to="{name:'DebounceThrottleTest'}"
                 class="c-LinkList-item">跳转DebounceThrottleTest测试页</router-link>
    <router-link :to="{name:'PreventFastClickBtnTest'}"
                 class="c-LinkList-item">跳转PreventFastClickBtnTest测试页</router-link>
    <router-link :to="{name:'ListTransitionTest'}"
                 class="c-LinkList-item">跳转ListTransitionTest测试页</router-link>
    <router-link :to="{name:'LayoutTest'}"
                 class="c-LinkList-item">跳转LayoutTest测试页</router-link>
    <router-link :to="{name:'EventBusTest'}"
                 class="c-LinkList-item">跳转EventBusTest测试页</router-link> -->
  </ul>
</template>

<script>
/**
 * * LinkList
 */
export default {
  name: 'LinkList',
  data() {
    return {
      routes: []
    }
  },
  created() {
    let { routes } = this.$router.options
    console.log(routes)
    // * 剔除
    // * 含有重定向路由
    // * AxiosListDetailTest路由
    // * Login路由
    routes = routes.filter(route => {
      return (
        !route.redirect &&
        route.name !== 'AxiosListDetailTest' &&
        route.name !== 'Login'
      )
    })

    this.routes = routes
  }
}
</script>

<style scoped lang="scss">
.c-LinkList {
  @at-root #{&}-item {
    color: #333;
    @at-root #{&}.router-link-active {
      color: red;
    }
  }
}
</style>
