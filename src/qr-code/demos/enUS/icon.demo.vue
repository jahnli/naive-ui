<markdown>
  # Icon

  You can put some representative icons.
</markdown>

<script lang="ts" setup></script>

<template>
  <n-space>
    <n-qr-code
      value="https://www.naiveui.com/"
      icon-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      error-correction-level="H"
    />
    <n-qr-code
      value="https://www.naiveui.com/"
      icon-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      icon-background-color="#333"
      error-correction-level="H"
    />
    <n-qr-code
      value="https://www.naiveui.com/"
      icon-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      :icon-size="32"
      error-correction-level="H"
    />
  </n-space>
</template>
