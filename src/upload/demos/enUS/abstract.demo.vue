<markdown>
# Split trigger and list

Note: `n-upload-trigger` and `n-upload-file-list` must be children of `<n-upload />`.
</markdown>

<script lang="ts" setup>
import type { UploadFileInfo } from 'naive-ui'
import { ref } from 'vue'

const fileListRef = ref<UploadFileInfo[]>([
  {
    id: 'b',
    name: 'file.doc',
    status: 'finished',
    type: 'text/plain'
  }
])

const fileList = fileListRef
</script>

<template>
  <n-upload
    abstract
    :default-file-list="fileList"
    action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
  >
    <n-button-group>
      <n-button>Useless</n-button>
      <n-upload-trigger #="{ handleClick }" abstract>
        <n-button @click="handleClick">
          Upload
        </n-button>
      </n-upload-trigger>
    </n-button-group>
    <n-card style="margin-top: 12px" title="File List">
      <n-upload-file-list />
    </n-card>
  </n-upload>
</template>
