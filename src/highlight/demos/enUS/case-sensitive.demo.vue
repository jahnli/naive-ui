<markdown>
# Case sensitive

By default, highlighting is case-sensitive, which you can turn on using the `case-sensitive` property.
</markdown>

<script lang="ts" setup>
const text
  = 'Naive UI is written in full TypeScript and works seamlessly with your TypeScript projects'
const patterns = ['Naive UI', 'typeScript']
</script>

<template>
  <n-highlight :text="text" :patterns="patterns" :case-sensitive="true" />
</template>
