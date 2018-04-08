<template>
  <div class="c-Main">
    <div class="c-Main-hd">
      <span>{{testObj.name}}</span>
      <span @click="change">点击测试vuex</span>
      <img v-lazy="'http://placehold.it/300x200'">
      <m-header></m-header>
    </div>
    <div class="c-Main-bd">
      <transition name="slide" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <div class="c-Main-ft">
      <m-footer></m-footer>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  import MHeader from 'components/m-header/m-header';
  import MFooter from 'components/m-footer/m-footer';

  export default {
    name: 'App',
    data() {
      return {
        count: 0
      };
    },
    computed: {
      ...mapGetters([
        'testObj'
      ])
    },
    methods: {
      change() {
        this.setTestObj({
          name: `test ${this.count++}`
        });
      },
      ...mapMutations({
        setTestObj: 'SET_TEST_OBJ'
      })
    },
    components: {
      MHeader,
      MFooter
    }
  }
</script>

<!--全局公用样式-->
<style lang="scss" src="sass/common-m.scss"></style>
<style lang="scss" scoped>
  .c-Main {
    display: flex;
    flex-direction: column;
    height: 100%;
    @at-root #{&}-hd {
      flex: 0 0 auto;
    }
    @at-root #{&}-bd {
      flex: 1 1 auto;
    }
    @at-root #{&}-ft {
      flex: 0 0 auto;
    }
  }
</style>
