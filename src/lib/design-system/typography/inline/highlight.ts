import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface HighlightProps extends HTMLAttributes<HTMLElement> {
  class?: string;
  children?: Snippet;
}

export const getHighlightClasses = (className = '') => {
  return `bg-yellow-200 text-[--color-text-primary] ${className}`.trim();
};
