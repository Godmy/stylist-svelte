import type { MenuItemProps } from '../props/menu-item';

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