<template>
  <div class="c-VuexTest">
    <span>{{testObj.name}}</span>
    <span @click="change">点击测试vuex</span>
  </div>
</template>

<script>
/**
 * * VuexTest
 */
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  computed: {
    ...mapGetters(['testObj'])
  },
  methods: {
    change() {
      this.setTestObj({
        name: `test ${this.count++}`
      })
    },
    ...mapMutations({
      setTestObj: 'SET_TEST_OBJ'
    })
  }
}
</script>
