import type { BurgerMenuProps } from '../props/interaction/burger-menu';

export const burgerMenuPresets: Record<string, Partial<BurgerMenuProps>> = {
  closed: {
    open: false,
    size: 'md',
    color: 'currentColor',
    activeColor: 'currentColor'
  },
  open: {
    open: true,
    size: 'md',
    color: 'currentColor',
    activeColor: 'currentColor'
  },
  small: {
    open: false,
    size: 'sm',
    color: 'currentColor',
    activeColor: 'currentColor'
  },
  large: {
    open: false,
    size: 'lg',
    color: 'currentColor',
    activeColor: 'currentColor'
  }
};