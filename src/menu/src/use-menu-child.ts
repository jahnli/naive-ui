import type { Key } from 'treemate'
import type { FollowerPlacement } from 'vueuc'
import type { MergedTheme } from '../../_mixins/use-theme'
import type { MenuTheme } from '../styles'
import type { OnUpdateValueImpl } from './interface'
import type { MenuSetupProps } from './Menu'
import type { UseMenuChildProps } from './use-menu-child-props'
import { computed, type ComputedRef, inject, type Ref } from 'vue'
import {
  menuInjectionKey,
  menuItemGroupInjectionKey,
  submenuInjectionKey
} from './context'

const ICON_MARGIN_RIGHT = 8

export interface MenuInjection {
  props: MenuSetupProps
  mergedCollapsedRef: Ref<boolean>
  invertedRef: Ref<boolean>
  isHorizontalRef: Ref<boolean>
  mergedClsPrefixRef: Ref<string>
  mergedValueRef: Ref<Key | null>
  mergedExpandedKeysRef: Ref<Key[]>
  activePathRef: Ref<Key[]>
  mergedThemeRef: Ref<MergedTheme<MenuTheme>>
  doSelect: OnUpdateValueImpl
  toggleExpand: (key: Key) => void
}

export interface SubmenuInjection {
  paddingLeftRef: Ref<number | undefined>
  mergedDisabledRef: Ref<boolean>
}

export interface MenuOptionGroupInjection {
  paddingLeftRef: Ref<number | undefined>
  mergedDisabledRef: Ref<boolean>
}

export interface UseMenuChild {
  dropdownPlacement: ComputedRef<FollowerPlacement>
  activeIconSize: ComputedRef<number>
  maxIconSize: ComputedRef<number>
  paddingLeft: ComputedRef<number | undefined>
  iconMarginRight: ComputedRef<number>
  NMenu: MenuInjection
  NSubmenu: SubmenuInjection | null
  NMenuOptionGroup: MenuOptionGroupInjection | null
}

export function useMenuChild(props: UseMenuChildProps): UseMenuChild {
  const NMenu = inject(menuInjectionKey)!
  const { props: menuProps, mergedCollapsedRef } = NMenu
  const NSubmenu = inject(submenuInjectionKey, null)
  const NMenuOptionGroup = inject<MenuOptionGroupInjection | null>(
    menuItemGroupInjectionKey,
    null
  )
  const horizontalRef = computed(() => {
    return menuProps.mode === 'horizontal'
  })
  const dropdownPlacementRef = computed(() => {
    if (horizontalRef.value) {
      return menuProps.dropdownPlacement
    }
    if ('tmNodes' in props)
      return 'right-start'
    return 'right'
  })
  const maxIconSizeRef = computed(() => {
    return Math.max(
      menuProps.collapsedIconSize ?? menuProps.iconSize,
      menuProps.iconSize
    )
  })
  const activeIconSizeRef = computed(() => {
    if (!horizontalRef.value && props.root && mergedCollapsedRef.value) {
      return menuProps.collapsedIconSize ?? menuProps.iconSize
    }
    else {
      return menuProps.iconSize
    }
  })
  const paddingLeftRef = computed(() => {
    if (horizontalRef.value)
      return undefined
    const { collapsedWidth, indent, rootIndent } = menuProps
    const { root, isGroup } = props
    const mergedRootIndent = rootIndent === undefined ? indent : rootIndent
    if (root) {
      if (mergedCollapsedRef.value) {
        return collapsedWidth / 2 - maxIconSizeRef.value / 2
      }
      return mergedRootIndent
    }
    if (
      NMenuOptionGroup
      && typeof NMenuOptionGroup.paddingLeftRef.value === 'number'
    ) {
      return indent / 2 + NMenuOptionGroup.paddingLeftRef.value
    }
    if (NSubmenu && typeof NSubmenu.paddingLeftRef.value === 'number') {
      return (isGroup ? indent / 2 : indent) + NSubmenu.paddingLeftRef.value
    }
    // Shouldn't reach here
    return 0
  })
  const iconMarginRightRef = computed(() => {
    const { collapsedWidth, indent, rootIndent } = menuProps
    const { value: maxIconSize } = maxIconSizeRef
    const { root } = props
    if (horizontalRef.value)
      return ICON_MARGIN_RIGHT
    if (!root)
      return ICON_MARGIN_RIGHT
    if (!mergedCollapsedRef.value)
      return ICON_MARGIN_RIGHT
    const mergedRootIndent = rootIndent === undefined ? indent : rootIndent
    return (
      mergedRootIndent
      + maxIconSize
      + ICON_MARGIN_RIGHT
      - (collapsedWidth + maxIconSize) / 2
    )
  })
  return {
    dropdownPlacement: dropdownPlacementRef,
    activeIconSize: activeIconSizeRef,
    maxIconSize: maxIconSizeRef,
    paddingLeft: paddingLeftRef,
    iconMarginRight: iconMarginRightRef,
    NMenu,
    NSubmenu,
    NMenuOptionGroup
  }
}
