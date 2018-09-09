<template>
  <div class="c-c-InputAutoHeightTestTest">
    <textarea v-auto-height></textarea>
  </div>

</template>

<script>
/**
 * * c-InputAutoHeightTest
 */

import AutoHeight from '@/directives/auto-height'
export default {
  name: 'c-InputAutoHeightTest',
  directives: {
    AutoHeight
  }
}
</script>

<style scoped>
textarea {
  border-width: 10px;
}
</style>