<markdown>
  # Scroll
</markdown>

<script lang="ts" setup>
import type { VirtualListInst } from 'naive-ui'
import { ref } from 'vue'

const virtualListInst = ref<VirtualListInst>()

const avatars = [
  'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
  'https://avatars.githubusercontent.com/u/20943608?s=60&v=4',
  'https://avatars.githubusercontent.com/u/46394163?s=60&v=4',
  'https://avatars.githubusercontent.com/u/39197136?s=60&v=4',
  'https://avatars.githubusercontent.com/u/19239641?s=60&v=4'
]

const items = Array.from({ length: 10000 }, (_, i) => ({
  key: `${i}`,
  value: i,
  avatar: avatars[i % avatars.length]
}))

function handleScrollToKey() {
  virtualListInst.value?.scrollTo({ key: '88' })
}

function handleScrollToPosition() {
  virtualListInst.value?.scrollTo({ position: 'bottom' })
}

function handleScrollToIndex() {
  virtualListInst.value?.scrollTo({ index: 200 })
}

function handleScrollToDistance() {
  virtualListInst.value?.scrollTo({ top: 100 })
}
</script>

<template>
  <n-space vertical>
    <n-space>
      <n-button @click="handleScrollToKey">
        Scroll
      </n-button>
      <n-button @click="handleScrollToPosition">
        Scroll to position
      </n-button>
      <n-button @click="handleScrollToIndex">
        Scroll to index
      </n-button>
      <n-button @click="handleScrollToDistance">
        Scroll to distance
      </n-button>
    </n-space>
    <n-virtual-list
      ref="virtualListInst"
      style="max-height: 240px"
      :item-size="42"
      :items="items"
      item-resizable
    >
      <template #default="{ item, index }">
        <div :key="item.key" class="item" style="height: 42px">
          <img class="avatar" :src="item.avatar" alt="">
          <span> {{ index }}</span>
        </div>
      </template>
    </n-virtual-list>
  </n-space>
</template>

<style>
.item {
  display: flex;
}
.avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
