<template>
  <div class="c-Loading">
    <BaseLoadingSpinner :size="spinnerSize"></BaseLoadingSpinner>
    <div class="c-Loading-text"
         v-text="text"></div>
  </div>
</template>
<script>
import BaseLoadingSpinner from '@/base/BaseLoadingSpinner'

/**
 * @description 基础Loading
 */
export default {
  name: 'BaseLoading',
  props: {
    text: {
      type: String,
      default: '加载中...'
    },
    spinnerSize: {
      type: String,
      default: '26px'
    }
  },
  components: {
    BaseLoadingSpinner
  }
}
</script>
<style scoped>
.c-Loading {
  text-align: center;
}
.c-Loading-text {
  font-size: 16px;
  color: #333;
}
</style>

