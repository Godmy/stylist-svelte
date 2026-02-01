import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import { DISABLED_CLASSES } from './tokens';

export interface TabPanelsProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  class?: string;
  children?: Snippet;
}

export const getTabPanelsClasses = (disabled: boolean, className = '') => {
  const baseClasses = ['mt-4'];
  if (disabled) baseClasses.push(DISABLED_CLASSES);
  if (className) baseClasses.push(className);
  return baseClasses.join(' ');
};
