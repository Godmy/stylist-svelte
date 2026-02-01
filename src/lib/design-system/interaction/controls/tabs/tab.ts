import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { TabSize, TabVariant } from './tokens';
import {
  TAB_ACTIVE_CLASSES,
  TAB_BASE_CLASSES,
  TAB_INACTIVE_CLASSES,
  TAB_SIZE_CLASSES,
  TAB_VARIANT_CLASSES
} from './tokens';

export interface TabProps extends Omit<HTMLButtonAttributes, 'disabled' | 'onclick'> {
  id: string;
  selected?: boolean;
  variant?: TabVariant;
  size?: TabSize;
  class?: string;
  children?: Snippet;
  ariaLabel?: string;
  disabled?: boolean;
}

export const getTabClasses = (
  variant: TabVariant,
  size: TabSize,
  isSelected: boolean,
  isDisabled: boolean,
  className = ''
) => {
  const baseClasses = [
    TAB_BASE_CLASSES,
    TAB_SIZE_CLASSES[size],
    TAB_VARIANT_CLASSES[variant],
    isSelected ? TAB_ACTIVE_CLASSES : TAB_INACTIVE_CLASSES
  ];

  if (isDisabled) baseClasses.push('opacity-50 cursor-not-allowed');
  if (className) baseClasses.push(className);

  return baseClasses.join(' ');
};
