import type { HTMLAttributes } from 'svelte/elements';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';

export interface SlotLoadingBoundary extends InteractionHTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  error?: string;
  class?: string;
  children?: Snippet;
}
