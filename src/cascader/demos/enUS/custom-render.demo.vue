<markdown>
# Customized rendering

The `render-label` can be used to batch render cascader menu options.
</markdown>

<script lang="ts" setup>
import type { CascaderOption } from 'naive-ui'
import { ref } from 'vue'

function getOptions(depth = 3, iterator = 1, prefix = '') {
  const length = 12
  const options: CascaderOption[] = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        value: `v-${i}`,
        label: `l-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${String(i)}`)
      })
    }
    else if (iterator === depth) {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    }
    else {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

const value = ref(null)
const options = getOptions()

function handleUpdateValue(...args: unknown[]) {
  console.log(...args)
}

function renderLabel(option: { value?: string | number, label?: string }) {
  return `prefix ${option.label}`
}
</script>

<template>
  <n-cascader
    v-model:value="value"
    placeholder="Meaningless values"
    :options="options"
    :filterable="true"
    :render-label="renderLabel"
    @update:value="handleUpdateValue"
  />
</template>
