import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import { DISABLED_CLASSES, TAB_LIST_BASE_CLASSES } from './tokens';

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  class?: string;
  children?: Snippet;
}

export const getTabListClasses = (disabled: boolean, className = '') => {
  const baseClasses = [TAB_LIST_BASE_CLASSES];
  if (disabled) baseClasses.push(DISABLED_CLASSES);
  if (className) baseClasses.push(className);
  return baseClasses.join(' ');
};
