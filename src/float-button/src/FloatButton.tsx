import {
  h,
  defineComponent,
  type PropType,
  computed,
  type CSSProperties
} from 'vue'
import { type ExtractPublicPropTypes } from '../../_utils'
import useConfig from '../../_mixins/use-config'
import style from './styles/index.cssr'
import { type ThemeProps, useTheme } from '../../_mixins'
import { type FloatButtonTheme, floatButtonLight } from '../styles'

export const floatButtonProps = {
  ...(useTheme.props as ThemeProps<FloatButtonTheme>),
  width: {
    type: [Number, String] as PropType<string | number>,
    default: 40
  },
  height: {
    type: [Number, String] as PropType<string | number>,
    default: 40
  },
  left: {
    type: [Number, String] as PropType<string | number>,
    default: undefined
  },
  right: {
    type: [Number, String] as PropType<string | number>,
    default: 40
  },
  top: {
    type: [Number, String] as PropType<string | number>,
    default: undefined
  },
  bottom: {
    type: [Number, String] as PropType<string | number>,
    default: 40
  },
  radius: {
    type: [Number, String] as PropType<string | number>,
    default: 22
  },
  backgroundColor: {
    type: String,
    default: '#ffffff'
  }
} as const

export type FloatButtonProps = ExtractPublicPropTypes<typeof floatButtonProps>

export default defineComponent({
  name: 'FloatButton',
  props: floatButtonProps,
  setup (props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props)

    const themeRef = useTheme(
      'FloatButton',
      '-float-button',
      style,
      floatButtonLight,
      props,
      mergedClsPrefixRef
    )

    const cssVarsRef = computed(() => {
      const {
        self: { color, textColor, boxShadow, boxShadowHover, boxShadowPressed },
        common: { cubicBezierEaseInOut }
      } = themeRef.value
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-box-shadow': boxShadow,
        '--n-box-shadow-hover': boxShadowHover,
        '--n-box-shadow-pressed': boxShadowPressed,
        '--n-color': color,
        '--n-text-color': textColor,
        left: formatNumber(props.left),
        right: formatNumber(props.right),
        top: formatNumber(props.top),
        bottom: formatNumber(props.bottom),
        width: formatNumber(props.width),
        height: formatNumber(props.height),
        borderRadius: formatNumber(props.radius),
        backgroundColor: props.backgroundColor
      }
    })

    const formatNumber = (
      value: number | string | undefined
    ): string | undefined => {
      if (typeof value === 'number') return `${value}px`
      return value
    }

    return {
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      mergedClsPrefix: mergedClsPrefixRef,
      formatNumber
    }
  },

  render () {
    const { mergedClsPrefix, cssVars, $slots } = this

    return (
      <div
        class={`${mergedClsPrefix}-float-button`}
        style={cssVars as CSSProperties}
      >
        {$slots.default?.()}
      </div>
    )
  }
})
