<template>
  <div class="c-AxiosTest">
    <h2>测试axios返回的数据</h2>
    <ul>
      <li v-for="post in posts"
          :key="post.id">{{post.title}}</li>
    </ul>
  </div>
</template>

<script>
/**
 * * AxiosTest
 */
export default {
  name: 'AxiosTest',

  data() {
    return {
      posts: []
    }
  },
  created() {
    // * 测试axios
    this.$http.get('/api/posts').then(res => {
      console.log(res)
      this.posts = res
    })
  }
}
</script>
 