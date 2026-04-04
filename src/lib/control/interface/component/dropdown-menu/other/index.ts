/**
 * DropdownMenu types and interfaces following SOLID principles
 */

import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
export interface CloseDropdownFunc {
  closeDropdown: () => void;
}

export interface IDropdownMenuProps extends Omit<InteractionHTMLAttributes<HTMLElement>, 'children'> {
  label: string;
  position?: TokenAlignment;
  disabled?: boolean;
  class?: string;
  children?: Snippet<[CloseDropdownFunc]>;
}

export interface IDropdownMenuStyleClasses {
  position: string;
  disabled: string;
  menu: string;
}




