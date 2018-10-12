<template>
  <div class="c-ClickAreaExpandTest">
    <BaseClickAreaExpand class="c-MyBtn"
                         tag="div">
      我的点击范围被扩大啦
    </BaseClickAreaExpand>
  </div>
</template>

<script>
/**
 * * ClickAreaExpandTest
 */

import BaseClickAreaExpand from '@/base/BaseClickAreaExpand'

export default {
  name: 'ClickAreaExpandTest',
  components: {
    BaseClickAreaExpand
  },
  methods: {
    onClick() {
      console.log('我的点击范围被扩大啦')
    }
  }
}
</script>
<style scoped>
.c-MyBtn {
  color: red;
}
</style>


 