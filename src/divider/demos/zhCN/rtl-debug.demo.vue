<markdown>
# Rtl Debug

</markdown>

<template>
  <n-space vertical>
    <n-space><n-switch v-model:value="rtlEnabled" />Rtl</n-space>
    <n-config-provider :rtl="rtlEnabled ? rtlStyles : undefined">
      啊
      <n-divider title-placement="left">
        左
      </n-divider>
      啊
      <n-divider title-placement="right">
        右
      </n-divider>
      啊
      <n-divider dashed>
        虚线
      </n-divider>
      啊
    </n-config-provider>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { unstableDividerRtl } from 'naive-ui'

export default defineComponent({
  setup () {
    return {
      rtlEnabled: ref(false),
      rtlStyles: [unstableDividerRtl]
    }
  }
})
</script>
