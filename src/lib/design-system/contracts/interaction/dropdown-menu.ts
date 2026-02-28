/**
 * DropdownMenu types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { DropdownPosition } from '../../tokens/interaction/dropdown-menu';

interface CloseDropdownFunc {
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
