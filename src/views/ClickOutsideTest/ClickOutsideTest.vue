<template>
  <div class="c-ClickOutsideTest">
    <div class="c-Box"
         v-clickoutside="onClickOutside"
         ref="clickOutsideEl">只有点我外侧才会触发clickOutside指令</div>
  </div>
</template>
<script>
/**
 * * ClickOutsideTest
 */

// * clickOutSide指令
import clickoutside from '@/directives/click-outside'

export default {
  name: 'ClickOutsideTest',
  methods: {
    onClickOutside(e) {
      console.log('onClickOutside', e)
    }
  },
  directives: {
    clickoutside
  }
}
</script>
<style>
.c-Box {
  font-size: 16px;
  width: 100px;
  height: 100px;
  background-color: #f00;
}
</style>




