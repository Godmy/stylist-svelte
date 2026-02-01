import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface EmProps extends HTMLAttributes<HTMLElement> {
  class?: string;
  children?: Snippet;
}

export const getEmClasses = (className = '') => {
  return `italic ${className}`.trim();
};
