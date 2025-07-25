<markdown>
# Node events

Use `node-props` to bind HTML attributes to node. For example click or contextmenu event listener.
</markdown>

<script lang="ts" setup>
import type { DropdownOption, TreeOption } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { repeat } from 'seemly'
import { ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

function createLabel(level: number): string {
  if (level === 4)
    return 'Out of Tao, One is born'
  if (level === 3)
    return 'Out of One, Two'
  if (level === 2)
    return 'Out of Two, Three'
  if (level === 1)
    return 'Out of Three, the created universe'
  return ''
}

const message = useMessage()
const showDropdownRef = ref(false)
const optionsRef = ref<DropdownOption[]>([])
const xRef = ref(0)
const yRef = ref(0)
const data = createData()
const defaultExpandedKeys = ref(['40', '41'])

function handleSelect() {
  showDropdownRef.value = false
}

function handleClickoutside() {
  showDropdownRef.value = false
}

function nodeProps({ option }: { option: TreeOption }) {
  return {
    onClick() {
      message.info(`[Click] ${option.label}`)
    },
    onContextmenu(e: MouseEvent): void {
      optionsRef.value = [option]
      showDropdownRef.value = true
      xRef.value = e.clientX
      yRef.value = e.clientY
      console.log(e.clientX, e.clientY)
      e.preventDefault()
    }
  }
}
</script>

<template>
  <n-tree
    block-line
    :data="data"
    :default-expanded-keys="defaultExpandedKeys"
    :node-props="nodeProps"
  />
  <n-dropdown
    trigger="manual"
    placement="bottom-start"
    :show="showDropdownRef"
    :options="optionsRef as any"
    :x="xRef"
    :y="yRef"
    @select="handleSelect"
    @clickoutside="handleClickoutside"
  />
</template>
