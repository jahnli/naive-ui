<markdown>
# 溢出

设定 `max` 来处理溢出情况。
</markdown>

<script lang="ts" setup>
import { MdAdd, MdRemove } from '@vicons/ionicons4'
import { ref } from 'vue'

const value = ref(101)
</script>

<template>
  <n-space :size="24" align="center">
    <n-badge :value="value" show-zero>
      <n-avatar />
    </n-badge>
    <n-badge :value="value" :max="99">
      <n-avatar />
    </n-badge>
    <n-badge :value="value" show-zero :max="100">
      <n-avatar />
    </n-badge>
    <n-badge :value="value" show-zero :max="10">
      <n-avatar />
    </n-badge>
    <n-button-group>
      <n-button @click="value = Math.min(16, value + 1)">
        <template #icon>
          <n-icon><MdAdd /></n-icon>
        </template>
      </n-button>
      <n-button @click="value = Math.max(0, value - 1)">
        <template #icon>
          <n-icon><MdRemove /></n-icon>
        </template>
      </n-button>
    </n-button-group>
  </n-space>
</template>
