<template>
  <div class="c-ModalTest">
    <BaseModal ref="modal"
               :shadowClickClose="true"
               :emitShadowClickEvent="true"
               @onShadowClick="onShadowClick"
               :emitVisibleChangeEvent="true"
               @onVisibleChange="onVisibleChange">
      <div style="background-color:#fff">测试modal
        <button type="button"
                @click.stop="closeModal">&times;</button>
      </div>
    </BaseModal>
    <button @click="onButtonClick">展示modal</button>
  </div>
</template>

<script>
/**
 * * ModalTest
 */

import BaseModal from '@/base/BaseModal'

export default {
  name: 'ModalTest',
  components: {
    BaseModal
  },
  methods: {
    onButtonClick() {
      this.$refs.modal.open()
    },
    onShadowClick() {
      console.log('onShadowClick')
    },
    onVisibleChange(newVal, oldVal) {
      console.log('onVisibleChange', newVal, oldVal)
    },
    closeModal() {
      this.$refs.modal.close()
    }
  }
}
</script>

 