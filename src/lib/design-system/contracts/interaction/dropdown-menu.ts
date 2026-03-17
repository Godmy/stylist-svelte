import type { DropdownPosition } from '$stylist/design-system/tokens/interaction/dropdown';

/**
 * DropdownMenu types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { Alignment } from '$stylist/design-system/tokens/architecture/alignments';
export interface CloseDropdownFunc {
  closeDropdown: () => void;
}

export interface IDropdownMenuProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  label: string;
  position?: DropdownPosition;
  disabled?: boolean;
  class?: string;
  children?: Snippet<[CloseDropdownFunc]>;
}

export interface IDropdownMenuStyleClasses {
  position: string;
  disabled: string;
  menu: string;
}



