import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface DefinitionTermProps extends HTMLAttributes<HTMLElement> {
  class?: string;
  children?: Snippet;
}

export const getDefinitionTermClasses = (className = '') => {
  return `font-medium text-[--color-text-primary] ${className}`.trim();
};
