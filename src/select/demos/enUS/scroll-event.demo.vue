<markdown>
# Scroll event

A colleague of mine wanted to use a scroll event for loading options asynchronously. Here's that example.
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const optionsRef = ref([
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3'
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourseld',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7'
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
])

function handleScroll(e: Event) {
  const currentTarget = e.currentTarget as HTMLElement
  if (
    currentTarget.scrollTop + currentTarget.offsetHeight
    >= currentTarget.scrollHeight
  ) {
    optionsRef.value.push(
      {
        label: `v1-${optionsRef.value.length}`,
        value: `v1-${optionsRef.value.length}`
      },
      {
        label: `v2-${optionsRef.value.length}`,
        value: `v2-${optionsRef.value.length}`
      }
    )
  }
}
</script>

<template>
  <n-select
    :options="optionsRef"
    :reset-menu-on-options-change="false"
    @scroll="handleScroll"
  />
</template>
