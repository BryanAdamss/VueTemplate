<template>
  <div class="c-Loading" ref="loading">
    <div class="c-Loading-text" v-html="text"></div>
    <div class="c-Loading-img">
      <img src="./loading.gif">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {addClass} from 'common/js/dom';

  export default {
    name: 'CLoading',
    props: {
      text: {
        type: String,
        default: '加载中...'
      },
      width: {
        type: Number,
        default: 20
      },
      height: {
        type: Number,
        default: 20
      },
      direction: {
        type: String,
        default: 'h'
      }
    },
    mounted() {
      if (this.direction === 'v') {
        addClass(this.$refs.loading, 'c-Loading--v');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .c-Loading {
    display: flex;
    transition: .3s;
    @at-root #{&}--v {
      flex-direction: column-reverse;
      align-items: center;
    }
    @at-root #{&}-img {
      width: rem(40px);
      height: rem(40px);
      > img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    @at-root #{&}-text {
      font-size: rem(24px);
      color: $subTextColor;
    }
  }
</style>
