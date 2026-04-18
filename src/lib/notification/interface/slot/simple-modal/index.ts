import type { HTMLAttributes } from 'svelte/elements';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';

export interface SlotSimpleModal extends InteractionHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  class?: string;
  onClose?: () => void;
}
