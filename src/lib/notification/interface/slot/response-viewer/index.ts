import type { HTMLAttributes } from 'svelte/elements';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';

export interface SlotResponseViewer extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  response?: string;
  status?: 'success' | 'error' | 'info';
  class?: string;
}
