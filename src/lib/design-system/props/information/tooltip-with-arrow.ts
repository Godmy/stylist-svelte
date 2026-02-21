import type { HTMLAttributes } from 'svelte/elements';

export interface TooltipWithArrowProps extends HTMLAttributes<HTMLDivElement> {
  content?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  class?: string;
}
