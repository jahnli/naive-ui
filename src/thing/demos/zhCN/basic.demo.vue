<markdown>
# 基础用法

Thing 提供了很多 slot 来定制。
</markdown>

<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
import { ref } from 'vue'

const avatar = ref(true)
const header = ref(true)
const headerExtra = ref(true)
const description = ref(true)
const footer = ref(true)
const action = ref(true)
</script>

<template>
  <n-row>
    <n-col :span="12">
      <n-checkbox v-model:checked="avatar">
        头像
      </n-checkbox>
    </n-col>
    <n-col :span="12">
      <n-checkbox v-model:checked="action">
        操作
      </n-checkbox>
    </n-col>
  </n-row>
  <n-row>
    <n-col :span="12">
      <n-checkbox v-model:checked="header">
        标题
      </n-checkbox>
    </n-col>
    <n-col :span="12">
      <n-checkbox v-model:checked="headerExtra">
        标题附加信息
      </n-checkbox>
    </n-col>
  </n-row>
  <n-row>
    <n-col :span="12">
      <n-checkbox v-model:checked="description">
        描述
      </n-checkbox>
    </n-col>
    <n-col :span="12">
      <n-checkbox v-model:checked="footer">
        底部
      </n-checkbox>
    </n-col>
  </n-row>
  <n-divider />
  <n-thing>
    <template v-if="avatar" #avatar>
      <n-avatar>
        <n-icon>
          <CashIcon />
        </n-icon>
      </n-avatar>
    </template>
    <template v-if="header" #header>
      货币
    </template>
    <template v-if="headerExtra" #header-extra>
      <n-button circle size="small">
        <template #icon>
          <CashIcon />
        </template>
      </n-button>
    </template>
    <template v-if="description" #description>
      描述
    </template>
    货币是为了提高交易效率而用于交换的中介商品。货币有多种形式，如贝壳粮食等自然物、金属纸张等加工品、银行卡信用卡等磁条卡、移动支付加密货币等APP。
    <template v-if="footer" #footer>
      尾部
    </template>
    <template v-if="action" #action>
      <n-space>
        <n-button size="small">
          <template #icon>
            <n-icon>
              <CashIcon />
            </n-icon>
          </template>
          1 块钱
        </n-button>
        <n-button size="small">
          <template #icon>
            <n-icon>
              <CashIcon />
            </n-icon>
          </template>
          10 块钱
        </n-button>
        <n-button size="small">
          <template #icon>
            <n-icon>
              <CashIcon />
            </n-icon>
          </template>
          100 块钱
        </n-button>
      </n-space>
    </template>
  </n-thing>
</template>
