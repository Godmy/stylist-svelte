/**
 * DropdownMenu types and interfaces following SOLID principles
 */

import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';

export interface SlotDropdownMenuStyleClasses {
  position: string;
  disabled: string;
  menu: string;
}
