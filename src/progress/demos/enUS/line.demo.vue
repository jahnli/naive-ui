<markdown>
# Line

In fact, progress of line type don't need four different styles. However, since UI has designed it, I finally implemented them all. It also support `default`, `info`, `success`, `warning` or `error` status.
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const percentage = ref(0)

function add() {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 0
  }
}

function minus() {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 100
  }
}
</script>

<template>
  <n-space vertical>
    <n-progress type="line" :percentage="percentage" :show-indicator="false" />
    <n-progress type="line" :percentage="percentage" />
    <n-progress
      type="line"
      :percentage="percentage"
      indicator-placement="inside"
    />
    <n-progress
      type="line"
      status="info"
      :percentage="percentage"
      :show-indicator="false"
    />
    <n-progress type="line" status="info" :percentage="percentage" />
    <n-progress
      type="line"
      status="info"
      :percentage="percentage"
      indicator-placement="inside"
    />
    <n-progress
      type="line"
      status="success"
      :percentage="percentage"
      :show-indicator="false"
    />
    <n-progress type="line" status="success" :percentage="percentage" />
    <n-progress
      type="line"
      status="success"
      :percentage="percentage"
      indicator-placement="inside"
    />
    <n-progress
      type="line"
      status="warning"
      :percentage="percentage"
      :show-indicator="false"
    />
    <n-progress type="line" status="warning" :percentage="percentage" />
    <n-progress
      type="line"
      status="warning"
      :percentage="percentage"
      indicator-placement="inside"
    />
    <n-progress
      type="line"
      status="error"
      :percentage="percentage"
      :show-indicator="false"
    />
    <n-progress type="line" status="error" :percentage="percentage" />
    <n-progress
      type="line"
      status="error"
      :percentage="percentage"
      indicator-placement="inside"
    />
    <n-space>
      <n-button @click="minus">
        Minus 10%
      </n-button>
      <n-button @click="add">
        Add 10%
      </n-button>
    </n-space>
  </n-space>
</template>
