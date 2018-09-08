<template>
  <div class="c-BaseLayoutHorizontal">
    <div class="c-BaseLayoutHorizontal-side"
         v-if="this.$slots.side">
      <slot name="side"></slot>
    </div>
    <div class="c-BaseLayoutHorizontal-main">
      <slot></slot>
    </div>
    <div class="c-BaseLayoutHorizontal-extra"
         v-if="this.$slots.extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script>
/**
 * * 常见水平三列布局
 */
export default {
  name: 'BaseLayoutHorizontal'
}
</script>

<style scoped>
.c-BaseLayoutHorizontal {
  display: flex;
  flex-direction: row;
}
.c-BaseLayoutHorizontal-side {
  flex: 0 0 auto;
}
.c-BaseLayoutHorizontal-main {
  flex: 1 1 auto;
}
.c-BaseLayoutHorizontal-extra {
  flex: 0 0 auto;
}
</style>