<markdown>
# Slot

Is there anybody who needs slots in a select menu?
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Empty')
</script>

<template>
  <n-popselect v-model:value="value" :options="[]" trigger="click">
    <n-button>{{ value || 'Popselect' }}</n-button>
    <template #header>
      Don't know what to put
    </template>
    <template #empty>
      Nothing to see, here is empty.
    </template>
    <template #action>
      If you click this demo, you may need it.
    </template>
  </n-popselect>
</template>
