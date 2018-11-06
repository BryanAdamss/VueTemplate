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

import store from './store'

export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  computed: {
    ...mapGetters(['testObj']),
    ...mapGetters('VuexTest', ['testName'])
  },
  beforeRouterEnter(to, from, next) {
    store.install()
    next()
  },
  beforeRouterLeave(to, from, next) {
    store.uninstall()
    next()
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
