/**
 * DropdownMenu types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { Alignment } from '../../tokens/architecture/alignments';

export type DropdownPosition = Extract<Alignment, 'left' | 'right' | 'center'>;

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

