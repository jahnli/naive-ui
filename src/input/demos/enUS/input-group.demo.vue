<markdown>
# Input group
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const selectOptions = ref([
  {
    label: 'option',
    value: 'option'
  }
])

const cascaderOptions = ref([
  {
    label: 'option-1',
    value: 'option-1',
    children: [
      {
        label: 'option-1-1',
        value: 'option-1-1'
      }
    ]
  }
])
</script>

<template>
  <n-space vertical>
    <n-input-group>
      <n-input :style="{ width: '33%' }" />
      <n-input-number :style="{ width: '33%' }" />
      <n-input :style="{ width: '33%' }" />
    </n-input-group>
    <n-input-group>
      <n-input-group-label>https://www.</n-input-group-label>
      <n-input :style="{ width: '33%' }" />
      <n-input-group-label>.com</n-input-group-label>
    </n-input-group>
    <n-input-group>
      <n-select :style="{ width: '33%' }" :options="selectOptions" />
      <n-cascader :style="{ width: '33%' }" :options="cascaderOptions" />
      <n-select :style="{ width: '33%' }" multiple :options="selectOptions" />
    </n-input-group>
    <n-input-group>
      <n-button type="primary">
        Search
      </n-button>
      <n-input :style="{ width: '50%' }" />
      <n-button type="primary" ghost>
        Search
      </n-button>
    </n-input-group>
    <n-input-group>
      <n-date-picker />
      <n-time-picker />
    </n-input-group>
  </n-space>
</template>
