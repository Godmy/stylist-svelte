import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { TokenShape } from '$stylist/layout/type/enum/shape';

export interface SlotTab {
  id: string;
  title: string;
  content: Snippet;
  disabled?: boolean;
}
