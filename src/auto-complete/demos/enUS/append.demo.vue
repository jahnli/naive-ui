<markdown>
# Append

Append the selected option to the input box instead of directly overwriting it, and use it in conjunction with get-show.
</markdown>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const valueRef = ref('')
const appendValueRef = ref('')
const value = valueRef
const options = computed(() => {
  return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    const value = valueRef.value === null ? '' : valueRef.value
    const prefix = value.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})
const appendValue = appendValueRef
const appendOptions = computed(() => {
  return ['gmail.com', '163.com', 'qq.com'].map((suffix) => {
    return {
      label: suffix,
      value: suffix
    }
  })
})
function getShow(value: string) {
  if (value.endsWith('@')) {
    return true
  }
  return false
}
</script>

<template>
  <n-space vertical>
    <n-auto-complete
      v-model:value="value"
      :options="options"
      :append="false"
      placeholder="Select and overwrite"
    />
    <n-auto-complete
      v-model:value="appendValue"
      :options="appendOptions"
      :append="true"
      :get-show="getShow"
      placeholder="Select and append"
    />
  </n-space>
</template>
