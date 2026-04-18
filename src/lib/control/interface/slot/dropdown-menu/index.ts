/**
 * DropdownMenu types and interfaces following SOLID principles
 */

import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { SlotCloseDropdownFunc } from '$stylist/control/interface/slot/close-dropdown-func';

export interface SlotDropdownMenu extends Omit<InteractionHTMLAttributes<HTMLElement>, 'children'> {
  label: string;
  position?: TokenAlignment;
  disabled?: boolean;
  class?: string;
  children?: Snippet<[SlotCloseDropdownFunc]>;
}
