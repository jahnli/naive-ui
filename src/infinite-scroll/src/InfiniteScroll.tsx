import { h, defineComponent, type PropType, ref } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
import { type ScrollbarProps } from '../../scrollbar/src/Scrollbar'
import { NxScrollbar, type ScrollbarInst } from '../../_internal'

export const infiniteScrollProps = {
  distance: {
    type: Number,
    default: 0
  },
  onLoad: Function as PropType<() => Promise<void>>,
  scrollbarProps: Object as PropType<ScrollbarProps>
} as const

export type InfiniteScrollProps = ExtractPublicPropTypes<
  typeof infiniteScrollProps
>

export default defineComponent({
  name: 'InfiniteScroll',
  props: infiniteScrollProps,
  setup (props) {
    const scrollbarInstRef = ref<ScrollbarInst | null>(null)

    const handleCheckBottom = async (): Promise<void> => {
      const { containerRef, containerScrollTop } = scrollbarInstRef.value
      const { scrollHeight } = containerRef
      if (
        containerScrollTop + containerRef.clientHeight >=
        scrollHeight - props.distance
      ) {
        await props.onLoad()
      }
    }

    const handleScroll = (): void => {
      window.requestAnimationFrame(handleCheckBottom as FrameRequestCallback)
    }

    return {
      scrollbarInstRef,
      handleScroll
    }
  },
  render () {
    return (
      <NxScrollbar
        {...this.scrollbarProps}
        ref="scrollbarInstRef"
        onScroll={this.handleScroll}
      >
        {{
          default: () => {
            return (
              <div style={{ height: '100%', overflow: 'auto' }}>
                {this.$slots.default?.()}
              </div>
            )
          }
        }}
      </NxScrollbar>
    )
  }
})
