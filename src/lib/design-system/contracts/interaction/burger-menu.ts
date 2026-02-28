import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';

export interface BurgerMenuProps {
  /**
   * Whether the menu is open
   * @default false
   */
  open?: boolean;
  
  /**
   * Size of the burger menu
   * @default 'md'
   */
  size?: ComponentSize;
  
  /**
   * Color of the burger menu when closed
   * @default 'currentColor'
   */
  color?: string;
  
  /**
   * Color of the burger menu when open
   * @default 'currentColor'
   */
  activeColor?: string;
  
  /**
   * Additional CSS classes
   */
  class?: string;
  
  /**
   * Canonical callback fired when the burger menu receives value interaction
   */
  onValueInput?: (event: MouseEvent) => void;
  
  /**
   * Canonical callback fired when the burger menu value is changed
   */
  onValueChange?: (event: MouseEvent) => void;
  
  /**
   * @deprecated use onValueChange
   */
  onClick?: (event: MouseEvent) => void;
}

// Presets moved from presets\burger-menu.ts

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

