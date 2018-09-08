<template>
  <div class="c-AxiosTest">
    <h2>测试axios返回的数据</h2>
    <ul class="c-List">
      <li v-for="post in posts"
          :key="post.id"
          @click.stop="onListItemClick(post)"
          class="c-List-item">{{post.id}}:{{post.title}}</li>
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
  },
  methods: {
    onListItemClick(post) {
      this.$router.push({
        name: 'AxiosListDetailTest',
        params: {
          id: post.id
        }
      })
    }
  }
}
</script>
 
 <style scoped>
.c-List {
  height: 500px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid blue;
}

.c-List-item + .c-List-item {
  border-top: 1px solid #aaa;
}
</style>
 