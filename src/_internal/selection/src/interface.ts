import type { VNodeChild } from 'vue'
import type { SelectOption } from '../../../select/src/interface'

export const INTERNAL_SELECTION_OVERFLOW_SUFFIX = '__n_internal_overflow__'

export type RenderTag = (props: {
  option: SelectOption
  handleClose: () => void
}) => VNodeChild
