import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { TokenShape } from '$stylist/layout/type/enum/shape';

export interface SlotTabStyleClasses {
  variant: string;
  active: string;
  inactive: string;
  disabled: string;
}
