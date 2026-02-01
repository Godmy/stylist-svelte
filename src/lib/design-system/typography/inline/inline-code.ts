import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type InlineCodeVariant = 'default' | 'subtle';

export interface InlineCodeProps extends HTMLAttributes<HTMLElement> {
  variant?: InlineCodeVariant;
  class?: string;
  children?: Snippet;
}

export const DEFAULT_INLINE_CODE_VARIANT: InlineCodeVariant = 'default';

const INLINE_CODE_CLASSES: Record<InlineCodeVariant, string> = {
  default: 'bg-slate-100 text-slate-800',
  subtle: 'bg-slate-50 text-slate-700'
};

export const getInlineCodeClasses = (variant: InlineCodeVariant, className = '') => {
  return `font-mono px-1.5 py-0.5 rounded ${INLINE_CODE_CLASSES[variant]} ${className}`.trim();
};
