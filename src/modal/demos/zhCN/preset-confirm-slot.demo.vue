<markdown>
# 使用 Dialog 预设的插槽

插槽也会随着预设变动。
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <n-button @click="showModal = true">
    来吧
  </n-button>
  <n-modal v-model:show="showModal" preset="dialog" title="Dialog">
    <template #header>
      <div>标题</div>
    </template>
    <div>内容</div>
    <template #action>
      <div>操作</div>
    </template>
  </n-modal>
</template>
