import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'danger';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  class?: string;
  children?: Snippet;
}

export const BADGE_DEFAULT_VARIANT: BadgeVariant = 'default';
export const BADGE_DEFAULT_SIZE: BadgeSize = 'md';

const BASE_BADGE_CLASSES = 'inline-flex items-center font-semibold rounded-full';

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  default: 'bg-[--color-background-secondary] text-[--color-text-primary]',
  primary: 'bg-[--color-primary-100] text-[--color-primary-800]',
  secondary: 'bg-[--color-secondary-100] text-[--color-secondary-800]',
  success: 'bg-[--color-success-100] text-[--color-success-800]',
  warning: 'bg-[--color-warning-100] text-[--color-warning-800]',
  error: 'bg-[--color-danger-100] text-[--color-danger-800]',
  danger: 'bg-[--color-danger-100] text-[--color-danger-800]',
  info: 'bg-[--color-primary-100] text-[--color-primary-800]'
};

const SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-0.5',
  lg: 'text-base px-3 py-1'
};

export const getBadgeClasses = (variant: BadgeVariant, size: BadgeSize, className = '') => {
  return `${BASE_BADGE_CLASSES} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`.trim();
};
