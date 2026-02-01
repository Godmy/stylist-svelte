import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface AbbrProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  class?: string;
  children?: Snippet;
}

export const DEFAULT_ABBR_TITLE = '';

export const getAbbrClasses = (className = '') => {
  return `underline decoration-dotted cursor-help ${className}`.trim();
};
