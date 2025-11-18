// Default values
export const BADGE_DEFAULT_VARIANT: 'default' = 'default';
export const BADGE_DEFAULT_SIZE: 'md' = 'md';

// CSS classes
export const BASE_BADGE_CLASSES = 'inline-flex items-center font-semibold rounded-full';

// Variant classes
export const VARIANT_CLASSES = {
  default: 'bg-gray-100 text-gray-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  danger: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800'
} as const;

// Size classes
export const SIZE_CLASSES = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-0.5',
  lg: 'text-base px-3 py-1'
} as const;