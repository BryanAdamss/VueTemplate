<template>
  <transition name="confirm-fade">
    <div class="c-Mask"
         @click.stop
         v-show="showFlag"
    >
      <div class="c-Dialog">
        <div class="c-Dialog-wp">
          <div class="c-Dialog-hd">
            <h2 class="c-Dialog-title" v-html="title"></h2>
          </div>
          <div class="c-Dialog-bd">
            <slot></slot>
          </div>
          <div class="c-Dialog-close" @click="close">&times;</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'CDialog',
    props: {
      title: {
        type: String,
        default: '对话框'
      }
    },
    data() {
      return {
        showFlag: false
      }
    },
    methods: {
      show() {
        this.showFlag = true;
      },
      hide() {
        this.showFlag = false;
      },
      close() {
        this.hide();
        this.$emit('dialogClose');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .c-Mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    @include bgAlpha();
  }

  .c-Dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: rem(500px);
    @at-root #{&}Wp {
      position: relative;
    }
    @at-root #{&}-hd {
      background-color: #fff;
      border-radius: 4px 4px 0 0;
      padding: rem(4px) rem(20px);
    }
    @at-root #{&}-bd {
      background-color: #fafafa;
      padding: rem(20px);
      border-radius: 0 0 4px 4px ;
      color: $mainTextColor;
      @extend %textWrap;
      font-size: rem(28px);
    }
    @at-root #{&}-title {
      font-weight: normal;
      font-size: rem(30px);
      margin: 0;
    }
    @at-root #{&}-close {
      position: absolute;
      top: rem(-4px);
      right: rem(10px);
      font-size: rem(40px);
      color: $mainTextColor;
      cursor: pointer;
      @at-root #{&}::after {
        content: "";
        position: absolute;
        top: rem(-20px);
        right: rem(-20px);
        bottom: rem(-20px);
        left: rem(-20px);
      }
    }
  }

  .confirm-fade-enter-active {
    animation: fadeIn .3s;
    .c-Dialog-wp {
      animation: zoomIn .3s;
    }
  }

  .confirm-fade-leave-active {
    animation: fadeIn reverse .3s;
    .c-Dialog-wp {
      animation: zoomIn reverse .3s;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0
    }
    100% {
      opacity: 1
    }
  }

  @keyframes zoomIn {
    0% {
      transform: scale(0)
    }
    50% {
      transform: scale(1.1)
    }
    100% {
      transform: scale(1)
    }
  }
</style>
