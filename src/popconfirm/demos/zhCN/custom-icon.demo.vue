<markdown>
# 自定义图标
</markdown>

<script lang="ts" setup>
import { MdHand as HandIcon } from '@vicons/ionicons4'
</script>

<template>
  <n-popconfirm positive-text="ok" negative-text="not ok">
    <template #icon>
      <n-icon color="red">
        <HandIcon />
      </n-icon>
    </template>
    <template #trigger>
      <n-button>退出游戏</n-button>
    </template>
    不充钱怎么变强？
  </n-popconfirm>
</template>
