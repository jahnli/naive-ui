<markdown>
# 切换 Tab 前的回调

你可以延迟或阻止 Tab 切换。
</markdown>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function handleBeforeLeave(tabName: string) {
  switch (tabName) {
    case 'not-allowed':
      message.error('不许进来')
      return false
    case 'wait':
      return new Promise<boolean>((resolve) => {
        const messageInstance = message.loading('Wait for 1s')
        setTimeout(() => {
          messageInstance.destroy()
          resolve(true)
        }, 1000)
      })
    default:
      return true
  }
}

function handleUpdateValue(value: string) {
  message.info(value)
}
</script>

<template>
  <n-tabs
    type="line"
    default-value="okay"
    @before-leave="handleBeforeLeave"
    @update:value="handleUpdateValue"
  >
    <n-tab-pane name="wait" tab="等 1 秒">
      +1s
    </n-tab-pane>
    <n-tab-pane name="not-allowed" tab="不许进来">
      ???
    </n-tab-pane>
    <n-tab-pane name="okay" tab="可以">
      就那么回事吧
    </n-tab-pane>
  </n-tabs>
</template>
