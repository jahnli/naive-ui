<markdown>
# Basic
</markdown>

<script lang="ts" setup>
import { MdCash } from '@vicons/ionicons4'
</script>

<template>
  <n-breadcrumb>
    <n-breadcrumb-item><n-icon :component="MdCash" /> Home</n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon :component="MdCash" /> Account
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon :component="MdCash" /> Category
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
