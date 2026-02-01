import type { HTMLAttributes } from 'svelte/elements';
import { DISABLED_CLASSES, TAB_INDICATOR_BASE_CLASSES } from './tokens';
import type { TabSize } from './tokens';

export type TabIndicatorColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'gray';

export interface TabIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  left?: string;
  width?: string;
  color?: TabIndicatorColor;
  size?: TabSize;
  class?: string;
  disabled?: boolean;
}

export const getTabIndicatorClasses = (
  color: TabIndicatorColor,
  isDisabled: boolean,
  className = ''
) => {
  const colorClasses: Record<TabIndicatorColor, string> = {
    primary: 'bg-[--color-primary-500]',
    secondary: 'bg-[--color-secondary-500]',
    success: 'bg-[--color-success-500]',
    warning: 'bg-[--color-warning-500]',
    danger: 'bg-[--color-danger-500]',
    gray: 'bg-[--color-neutral-500]'
  };

  const classes = [TAB_INDICATOR_BASE_CLASSES, colorClasses[color], className];
  if (isDisabled) classes.push(DISABLED_CLASSES);
  return classes.filter(Boolean).join(' ');
};

export const getTabIndicatorStyle = (width: string, left: string) => {
  return `width: ${width}; left: ${left};`;
};
