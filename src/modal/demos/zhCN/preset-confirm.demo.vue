<markdown>
# 使用 Dialog 预设

`dialog` 预设的例子。
</markdown>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()
const showModal = ref(false)

function cancelCallback() {
  message.success('Cancel')
}

function submitCallback() {
  message.success('Submit')
}
</script>

<template>
  <n-button @click="showModal = true">
    来吧
  </n-button>
  <n-modal
    v-model:show="showModal"
    preset="dialog"
    title="确认"
    content="你确认?"
    positive-text="确认"
    negative-text="算了"
    @positive-click="submitCallback"
    @negative-click="cancelCallback"
  />
</template>
