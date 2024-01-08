// use absolute path to make sure no circular ref of style
// this -> modal-index -> modal-style
import { h, defineComponent, type PropType, ref, type CSSProperties } from 'vue'
import NModal, { modalProps } from './Modal'

export const exposedModalEnvProps = {
  ...modalProps,
  onAfterEnter: Function as PropType<() => void>,
  onAfterLeave: Function as PropType<() => void>,
  transformOrigin: String as PropType<'center' | 'mouse'>,
  blockScroll: { type: Boolean, default: true },
  closeOnEsc: { type: Boolean, default: true },
  onEsc: Function as PropType<() => void>,
  autoFocus: {
    type: Boolean,
    default: true
  },
  internalStyle: [String, Object] as PropType<string | CSSProperties>,
  maskClosable: {
    type: Boolean,
    default: true
  },
  onPositiveClick: Function as PropType<
  (e: MouseEvent) => Promise<unknown> | unknown
  >,
  onNegativeClick: Function as PropType<
  (e: MouseEvent) => Promise<unknown> | unknown
  >,
  onClose: Function as PropType<() => Promise<unknown> | unknown>,
  onMaskClick: Function as PropType<(e: MouseEvent) => void>
} as const

export const NModalEnvironment = defineComponent({
  name: 'ModalEnvironment',
  props: {
    ...exposedModalEnvProps,
    internalKey: {
      type: String,
      required: true
    },
    to: [String, Object] as PropType<string | HTMLElement>,
    // private
    onInternalAfterLeave: {
      type: Function as PropType<(key: string) => void>,
      required: true
    }
  },
  setup (props) {
    const showRef = ref(true)
    function handleAfterLeave (): void {
      const { onInternalAfterLeave, internalKey, onAfterLeave } = props
      if (onInternalAfterLeave) onInternalAfterLeave(internalKey)
      if (onAfterLeave) onAfterLeave()
    }
    function handlePositiveClick (e: MouseEvent): void {
      const { onPositiveClick } = props
      if (onPositiveClick) {
        void Promise.resolve(onPositiveClick(e)).then((result) => {
          if (result === false) return
          hide()
        })
      } else {
        hide()
      }
    }
    function handleNegativeClick (e: MouseEvent): void {
      const { onNegativeClick } = props
      if (onNegativeClick) {
        void Promise.resolve(onNegativeClick(e)).then((result) => {
          if (result === false) return
          hide()
        })
      } else {
        hide()
      }
    }
    function handleCloseClick (): void {
      const { onClose } = props
      if (onClose) {
        void Promise.resolve(onClose()).then((result) => {
          if (result === false) return
          hide()
        })
      } else {
        hide()
      }
    }
    function handleMaskClick (e: MouseEvent): void {
      const { onMaskClick, maskClosable } = props
      if (onMaskClick) {
        onMaskClick(e)
        maskClosable && hide()
      }
    }
    function handleEsc (): void {
      const { onEsc } = props
      if (onEsc) {
        onEsc()
      }
    }
    function hide (): void {
      showRef.value = false
    }
    function handleUpdateShow (value: boolean): void {
      showRef.value = value
    }
    return {
      show: showRef,
      hide,
      handleUpdateShow,
      handleAfterLeave,
      handleCloseClick,
      handleNegativeClick,
      handlePositiveClick,
      handleMaskClick,
      handleEsc
    }
  },
  render () {
    const {
      handleUpdateShow,
      handleAfterLeave,
      handleMaskClick,
      handleEsc,
      to,
      maskClosable,
      show
    } = this
    return (
      <NModal
        {...this.$props}
        show={show}
        onUpdateShow={handleUpdateShow}
        onMaskClick={handleMaskClick}
        onEsc={handleEsc}
        to={to}
        maskClosable={maskClosable}
        onAfterEnter={this.onAfterEnter}
        onAfterLeave={handleAfterLeave}
        closeOnEsc={this.closeOnEsc}
        blockScroll={this.blockScroll}
        autoFocus={this.autoFocus}
        transformOrigin={this.transformOrigin}
        internalAppear
        internalDialog
      ></NModal>
    )
  }
})
