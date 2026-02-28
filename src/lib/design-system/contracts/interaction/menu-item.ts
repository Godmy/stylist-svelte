import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DefaultVariants } from '$stylist/design-system/tokens/information/default-variants';

export type MenuItemVariant = DefaultVariants | 'success' | 'warning' | 'danger' | 'info' | 'ghost' | 'link';

export interface MenuItemProps extends HTMLAttributes<HTMLElement> {
  /**
   * Whether the menu item is active
   * @default false
   */
  active?: boolean;
  
  /**
   * Variant of the menu item
   * @default 'default'
   */
  variant?: MenuItemVariant;
  
  /**
   * Link URL for the menu item
   */
  href?: string;
  
  /**
   * Icon name for the menu item
   */
  icon?: string;
  
  /**
   * Whether the menu item is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the link opens in a new tab
   * @default false
   */
  external?: boolean;
  
  /**
   * Children snippet for the menu item
   */
  children?: Snippet;
  
  /**
   * Additional CSS classes
   */
  class?: string;
  
  /**
   * Canonical callback fired when the menu item receives value interaction
   */
  onValueInput?: (event: MouseEvent) => void;
  
  /**
   * Canonical callback fired when the menu item value is changed
   */
  onValueChange?: (event: MouseEvent) => void;
  
  /**
   * @deprecated use onValueChange
   */
  onClick?: (event: MouseEvent) => void;
}

// Presets moved from presets\menu-item.ts

export const menuItemPresets: Record<string, Partial<MenuItemProps>> = {
  default: {
    active: false,
    variant: 'default',
    disabled: false,
    external: false
  },
  active: {
    active: true,
    variant: 'default',
    disabled: false,
    external: false
  },
  disabled: {
    active: false,
    variant: 'default',
    disabled: true,
    external: false
  },
  external: {
    active: false,
    variant: 'default',
    disabled: false,
    external: true
  }
};

