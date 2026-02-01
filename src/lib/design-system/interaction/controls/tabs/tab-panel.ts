import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import { DISABLED_CLASSES, TAB_PANEL_HIDDEN_CLASS, TAB_PANEL_VISIBLE_CLASS } from './tokens';

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  disabled?: boolean;
  class?: string;
  children?: Snippet;
}

export const getTabPanelClasses = (isSelected: boolean, isDisabled: boolean, className = '') => {
  const baseClasses = [isSelected ? TAB_PANEL_VISIBLE_CLASS : TAB_PANEL_HIDDEN_CLASS];
  if (isDisabled) baseClasses.push(DISABLED_CLASSES);
  if (className) baseClasses.push(className);
  return baseClasses.join(' ');
};
