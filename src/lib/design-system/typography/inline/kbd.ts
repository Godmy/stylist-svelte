import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface KbdProps extends HTMLAttributes<HTMLElement> {
  class?: string;
  children?: Snippet;
}

export const getKbdClasses = (className = '') => {
  return `inline-flex items-center rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 text-xs font-medium text-slate-800 ${className}`.trim();
};
