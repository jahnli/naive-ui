<markdown>
# 基础用法
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(false)
const disabled = ref(true)
</script>

<template>
  <n-space item-style="display: flex;" align="center">
    <n-checkbox v-model:checked="value">
      复选框
    </n-checkbox>
    <n-checkbox v-model:checked="value" />
    <n-checkbox v-model:checked="value" :disabled="disabled">
      复选框
    </n-checkbox>
    <n-button size="small" @click="disabled = !disabled">
      禁用
    </n-button>
  </n-space>
</template>
