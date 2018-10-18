<template>
  <div class="c-BaseLayoutVertical">
    <div class="c-BaseLayoutVertical-hd"
         v-if="this.$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="c-BaseLayoutVertical-bd">
      <slot></slot>
    </div>
    <div class="c-BaseLayoutVertical-ft"
         v-if="this.$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
/**
 * * 常见垂直上中下三行布局
 */
export default {
  name: 'BaseLayoutVertical'
}
</script>

<style scoped>
/**
 * ! c-BaseLayoutVertical节点的父节点需要有高度
 */
.c-BaseLayoutVertical {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.c-BaseLayoutVertical-hd {
  flex: 0 0 auto;
}
.c-BaseLayoutVertical-bd {
  flex: 1 1 auto;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.c-BaseLayoutVertical-ft {
  flex: 0 0 auto;
}
</style>