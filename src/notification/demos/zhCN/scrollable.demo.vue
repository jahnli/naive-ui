<markdown>
# 可滚动

改变这个属性会导致已经存在全部通知被清空，确保你在合适的时机修改了这个属性。
</markdown>

<script lang="ts" setup>
import { useNotification } from 'naive-ui'

const notification = useNotification()

function handleClick() {
  ;[1, 2, 3, 4, 5].forEach(() =>
    notification.create({
      title: '很多个通知',
      content: `试着滚起来
试着滚起来
试着滚起来
试着滚起来
试着滚起来
试着滚起来
试着滚起来`
    })
  )
}
</script>

<template>
  <n-button @click="handleClick">
    看看这个东西怎么滚动
  </n-button>
</template>
