import type { HTMLBlockquoteAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface BlockquoteProps extends HTMLBlockquoteAttributes {
  cite?: string;
  withBorder?: boolean;
  withBackground?: boolean;
  class?: string;
  children?: Snippet;
}

export const DEFAULT_WITH_BORDER = false;
export const DEFAULT_WITH_BACKGROUND = false;

export const BLOCKQUOTE_CLASSES = {
  base: 'text-lg italic',
  border: 'border-l-4 border-indigo-500 pl-4',
  background: 'bg-gray-50 p-4 rounded',
  footer: 'mt-2 text-sm text-gray-500'
};

export const FOOTER_PREFIX = '&mdash; ';

export const getBlockquoteClasses = (
  withBorder: boolean,
  withBackground: boolean,
  className = ''
) => {
  const classes = [BLOCKQUOTE_CLASSES.base];
  if (withBorder) classes.push(BLOCKQUOTE_CLASSES.border);
  if (withBackground) classes.push(BLOCKQUOTE_CLASSES.background);
  if (className) classes.push(className);
  return classes.filter(Boolean).join(' ');
};
