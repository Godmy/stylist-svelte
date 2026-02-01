import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface CountBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  count?: number;
  max?: number;
  showZero?: boolean;
  children?: Snippet;
  class?: string;
}

export const DEFAULT_COUNT_BADGE_COUNT = 0;
export const DEFAULT_COUNT_BADGE_MAX = 99;
export const DEFAULT_COUNT_BADGE_SHOW_ZERO = false;

const BASE_COUNT_BADGE_CLASSES =
  'inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full';

export const getCountBadgeClasses = (className = '') => {
  return [BASE_COUNT_BADGE_CLASSES, className].filter(Boolean).join(' ');
};
