<template>
  <div class="c-VuexTest">
    <span>{{globalTestObjName}}</span>
    <div @click="change">点击设置全局vuex</div>

    <span>moduleANameLen：{{moduleANameLen}}</span>
    <div @click="setModuleAName({
      moduleAName:Math.random().toString()
    })">点击设置模块A Vuex</div>

    <span>moduleBNameLen：{{moduleBNameLen}}</span>
    <div @click="setModuleBName({
      moduleBName:Math.random().toString()
    })">点击设置模块B Vuex</div>
  </div>
</template>

<script>
/**
 * * VuexTest
 */

import { mapGetters, mapMutations } from 'vuex'

import store from './store'

export default {
  name: 'VuexTest',
  data() {
    return {
      count: 0
    }
  },
  computed: {
    ...mapGetters(['globalTestObjName']), // 全局getter
    ...mapGetters('VuexTest/moduleA', ['moduleANameLen']), // 模块a下的getter
    ...mapGetters('VuexTest/moduleB', ['moduleBNameLen']) // 模块b下的getter
  },
  beforeRouteEnter(to, from, next) {
    store.install()
    next()
  },
  beforeRouteLeave(to, from, next) {
    store.uninstall()
    next()
  },
  methods: {
    change() {
      this.setGlobalTestObj({
        name: `test ${this.count++}`
      })
    },
    ...mapMutations({
      setGlobalTestObj: 'SET_GLOBAL_TEST_OBJ'
    }),
    ...mapMutations('VuexTest/moduleA', {
      setModuleAName: 'SET_MODULE_A_NAME'
    }),
    ...mapMutations('VuexTest/moduleB', {
      setModuleBName: 'SET_MODULE_B_NAME'
    })
  }
}
</script>
