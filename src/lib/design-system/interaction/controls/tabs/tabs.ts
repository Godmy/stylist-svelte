import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { TabSize, TabVariant } from './tokens';
import { DEFAULT_TAB_SIZE, DEFAULT_TAB_VARIANT, DISABLED_CLASSES, TAB_LIST_LAYOUT_CLASSES } from './tokens';

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  selectedId?: string;
  onTabChange?: (id: string) => void;
  variant?: TabVariant;
  size?: TabSize;
  class?: string;
  children?: Snippet;
  disabled?: boolean;
}

export const getTabsClasses = (disabled: boolean, className = '') => {
  const baseClasses = [TAB_LIST_LAYOUT_CLASSES];
  if (disabled) baseClasses.push(DISABLED_CLASSES);
  if (className) baseClasses.push(className);
  return baseClasses.join(' ');
};

export const getTabsDefaults = () => ({
  variant: DEFAULT_TAB_VARIANT,
  size: DEFAULT_TAB_SIZE
});
