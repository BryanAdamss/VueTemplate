<template>
  <div class="c-ModalTest">

    <div>
      <button type="button"
              v-for="(btn,btnIndex) in buttons"
              :key="btnIndex"
              @click="onButtonClick(btn.label)">位置{{btn.label}}</button>
    </div>

    <BasePopUp v-for="(btn,btnIndex) in buttons"
               :key="btnIndex"
               :ref="'modal-'+btn.label"
               :shadowClose="true"
               :emitShadowClickEvent="true"
               @onShadowClick="onShadowClick"
               :emitVisibleChangeEvent="true"
               @onVisibleChange="onVisibleChange"
               :position="btn.label">
      <div style="background-color:#fff;height:100%;">测试modal
        <button type="button"
                @click.stop="closeModal">&times;</button>
        <h1>{{btn.label}} <br> 查看控制台输出</h1>
      </div>
    </BasePopUp>

  </div>
</template>

<script>
/**
 * * ModalTest
 */

import BasePopUp from '@/base/BasePopUp'

export default {
  name: 'ModalTest',
  data() {
    return {
      buttons: [
        {
          label: 'center'
        },
        {
          label: 'top'
        },
        {
          label: 'right'
        },
        {
          label: 'bottom'
        },
        {
          label: 'left'
        }
      ],
      curModalName: ''
    }
  },
  components: {
    BasePopUp
  },
  methods: {
    onButtonClick(pos) {
      const modalName = 'modal-' + pos
      this.$refs[modalName][0].open()
      this.curModalName = modalName
    },
    onShadowClick(e) {
      console.log('onShadowClick', e)
    },
    onVisibleChange(newVal, oldVal) {
      console.log('onVisibleChange', newVal, oldVal)
    },
    closeModal() {
      this.$refs[this.curModalName][0].close()
    }
  }
}
</script>

 