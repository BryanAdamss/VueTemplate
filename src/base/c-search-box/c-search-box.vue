<template>
  <div class="c-SearchBox">
    <input type="search" class="c-SearchBox-input" ref="query" v-model="query" :placeholder="placeholder"
           @focus="focus">
    <span class="c-SearchBox-clear" v-show="query" @click="clear">&times;</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import {debounce} from 'common/js/utils';

  export default {
    name: 'CSearchBox',
    props: {
      placeholder: {
        type: String,
        default: '请输入关键字'
      }
    },
    data() {
      return {
        query: ''
      };
    },
    created() {
      this.$watch('query', debounce((newQuery) => {
        this.$emit('queryChange', newQuery);
      }, 200));
    },
    methods: {
      focus() {
        this.$emit('searchBoxFocused');
      },
      clear() {
        this.query = '';
      },
      setQuery(query) {
        this.query = query;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .c-SearchBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @at-root #{&}-input {
      @extend %noAppearance;
      border: none;
      flex: 1 1 auto;
      background-color: transparent;
      font-size: rem(28px);
    }
    @at-root #{&}-clear {
      font-size: rem(30px);
      width: 1em;
      height: 1em;
      line-height: .9em;
      background-color: #999;
      color: #fafafa;
      vertical-align: 10px;
      text-align: center;
      border-radius: 50%;
    }
  }
</style>
