<markdown>
# 自定义上传

使用 `custom-request` 属性来自定义上传请求。
</markdown>

<script lang="ts" setup>
import type { UploadCustomRequestOptions } from 'naive-ui'
import { lyla } from '@lylajs/web'
import { useMessage } from 'naive-ui'

const message = useMessage()
function customRequest({
  file,
  data,
  headers,
  withCredentials,
  action,
  onFinish,
  onError,
  onProgress
}: UploadCustomRequestOptions) {
  const formData = new FormData()
  if (data) {
    Object.keys(data).forEach((key) => {
      formData.append(
        key,
        data[key as keyof UploadCustomRequestOptions['data']]
      )
    })
  }
  formData.append(file.name, file.file as File)
  lyla
    .post(action as string, {
      withCredentials,
      headers: headers as Record<string, string>,
      body: formData,
      onUploadProgress: ({ percent }) => {
        onProgress({ percent: Math.ceil(percent) })
      }
    })
    .then(({ json }) => {
      message.success(JSON.stringify(json))
      onFinish()
    })
    .catch((error) => {
      message.success(error.message)
      onError()
    })
}
</script>

<template>
  <n-upload
    action="__HTTP__://naive-upload.free.beeceptor.com/"
    :headers="{
      'naive-info': 'hello!',
    }"
    :data="{
      'naive-data': 'cool! naive!',
    }"
    :custom-request="customRequest"
  >
    <n-button>上传文件</n-button>
  </n-upload>
</template>
