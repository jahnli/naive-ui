<markdown>
# Grouped header

Note: If you want grouped header to be fixed, you need to set width of all fixed columns, includes columns with `children`. If not it may not display normally.
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

function createCols() {
  return [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Attrs',
      key: 'attrs',
      children: [
        {
          title: 'Attack',
          key: 'attack',
          children: [
            {
              title: 'Physics Attack',
              key: 'physicsAttack'
            },
            {
              title: 'Magic Attack',
              key: 'magicAttack'
            }
          ]
        },
        {
          title: 'Defend',
          key: 'defend'
        },
        {
          title: 'Speed',
          key: 'speed'
        }
      ]
    }
  ]
}

function createData() {
  return Array.from({ length: 50 }).map((_, i) => {
    return {
      key: i,
      name: `name_${i}`,
      physicsAttack: `physicsAttack_${i}`,
      magicAttack: `magicAttack_${i}`,
      defend: `defend_${i}`,
      speed: `speed_${i}`
    }
  })
}

const data = ref(createData())
const columns = ref(createCols())
const pagination = ref({
  pageSize: 10
})
</script>

<template>
  <n-data-table
    :data="data"
    :columns="columns"
    :single-line="false"
    :pagination="pagination"
  />
</template>
