import type { HTMLAttributes } from 'svelte/elements';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';

export interface SlotLazyLoader extends InteractionHTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  text?: string;
  class?: string;
  children?: Snippet;
}
