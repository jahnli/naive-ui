<markdown>
# 展示某些时间

传递单独的数字来定义时间步进或用数组指定你需要显示的内容，输入超出设定范围的值将将显示无效样式。
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const time = ref(1183135260000)
</script>

<template>
  <n-time-picker
    v-model:value="time"
    :hours="[8, 18]"
    :minutes="8"
    :seconds="[0]"
  />
</template>
