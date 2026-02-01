import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface DefinitionDescriptionProps extends HTMLAttributes<HTMLElement> {
  class?: string;
  children?: Snippet;
}

export const getDefinitionDescriptionClasses = (className = '') => {
  return `text-sm text-[--color-text-secondary] ${className}`.trim();
};
