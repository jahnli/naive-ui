<markdown>
  # Rtl Debug

  </markdown>

<template>
  <n-space vertical>
    <n-space><n-switch v-model:value="rtlEnabled" />Rtl</n-space>
    <n-config-provider :rtl="rtlEnabled ? rtlStyles : undefined">
      <n-data-table
        :columns="columns"
        :data="data"
        :pagination="pagination"
        :bordered="false"
      />
    </n-config-provider>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, h, ref } from 'vue'
import {
  DataTableColumns,
  NButton,
  unstableDataTableRtl,
  useMessage
} from 'naive-ui'

export default defineComponent({
  setup () {
    const message = useMessage()
    type Song = {
      no: number
      title: string
      length: string
    }

    const createColumns = ({
      play
    }: {
      play: (row: Song) => void
    }): DataTableColumns<Song> => {
      return [
        {
          title: 'No',
          key: 'no'
        },
        {
          title: 'Title',
          key: 'title'
        },
        {
          title: 'Length',
          key: 'length'
        },
        {
          title: 'Action',
          key: 'actions',
          render (row) {
            return h(
              NButton,
              {
                strong: true,
                tertiary: true,
                size: 'small',
                onClick: () => play(row)
              },
              { default: () => 'Play' }
            )
          }
        }
      ]
    }

    const data: Song[] = [
      { no: 3, title: 'Wonderwall', length: '4:18' },
      { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
      { no: 12, title: 'Champagne Supernova', length: '7:27' }
    ]

    return {
      rtlEnabled: ref(false),
      rtlStyles: [unstableDataTableRtl],
      data,
      columns: createColumns({
        play (row: Song) {
          message.info(`Play ${row.title}`)
        }
      }),
      pagination: false as const
    }
  }
})
</script>
