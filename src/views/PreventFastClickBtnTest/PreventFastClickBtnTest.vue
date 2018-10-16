<template>
  <div class="c-PreventFastClickBtnTest">
    <BaseBtnPreventFastClick tag="div"
                             @click="onClick"
                             class="c-MyBtn">
      点击
    </BaseBtnPreventFastClick>
  </div>
</template>

<script>
/**
 * * PreventFastClickBtnTest
 */

import BaseBtnPreventFastClick from '@/base/BaseBtnPreventFastClick'

export default {
  name: 'PreventFastClickBtnTest',
  components: {
    BaseBtnPreventFastClick
  },
  methods: {
    onClick() {
      console.count('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.c-MyBtn {
  color: blue;
  cursor: pointer;
}
</style>
