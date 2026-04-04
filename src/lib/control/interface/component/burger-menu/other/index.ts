import type { TokenSize } from '$stylist/layout/type/enum/size';

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
  size?: TokenSize;
  
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




