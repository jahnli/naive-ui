<markdown>
# 基础用法
</markdown>

<script lang="ts" setup>
import { GameController, GameControllerOutline } from '@vicons/ionicons5'
</script>

<template>
  <n-icon size="40">
    <GameControllerOutline />
  </n-icon>
  <n-icon size="40" color="#0e7a0d">
    <GameController />
  </n-icon>
  <n-icon size="40" :component="GameController" />
</template>
