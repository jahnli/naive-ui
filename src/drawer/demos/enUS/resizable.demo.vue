<markdown>
# Resizable drawer

Remeber to use `default-width` or `default-height` with `resizable`.
</markdown>

<script lang="ts" setup>
import type { DrawerPlacement } from 'naive-ui'
import { ref } from 'vue'

const active = ref(false)
const placement = ref<DrawerPlacement>('right')
function activate(place: DrawerPlacement) {
  active.value = true
  placement.value = place
}
</script>

<template>
  <n-button-group>
    <n-button @click="activate('top')">
      Top
    </n-button>
    <n-button @click="activate('right')">
      Right
    </n-button>
    <n-button @click="activate('bottom')">
      Bottom
    </n-button>
    <n-button @click="activate('left')">
      Left
    </n-button>
  </n-button-group>
  <n-drawer
    v-model:show="active"
    :default-width="502"
    :placement="placement"
    resizable
  >
    <n-drawer-content title="Stoner">
      Stoner is a 1965 novel by the American writer John Williams.
    </n-drawer-content>
  </n-drawer>
</template>
