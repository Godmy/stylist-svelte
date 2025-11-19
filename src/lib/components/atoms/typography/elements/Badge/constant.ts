// Default values
export const BADGE_DEFAULT_VARIANT: 'default' = 'default';
export const BADGE_DEFAULT_SIZE: 'md' = 'md';

// CSS classes
export const BASE_BADGE_CLASSES = 'inline-flex items-center font-semibold rounded-full';

// Variant classes
export const VARIANT_CLASSES = {
  default: 'bg-[--color-background-secondary] text-[--color-text-primary]',
  success: 'bg-[--color-success-100] text-[--color-success-800]',
  warning: 'bg-[--color-warning-100] text-[--color-warning-800]',
  danger: 'bg-[--color-danger-100] text-[--color-danger-800]',
  info: 'bg-[--color-primary-100] text-[--color-primary-800]'
} as const;

// Size classes
export const BADGE_SIZE_CLASSES = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-0.5',
  lg: 'text-base px-3 py-1'
} as const;