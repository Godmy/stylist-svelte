// Size classes mapping
export const ICON_WRAPPER_SIZE_CLASSES = {
  sm: 'w-6 h-6 text-xs',
  md: 'w-8 h-8 text-sm',
  lg: 'w-10 h-10 text-base'
} as const;

// Shape classes mapping
export const SHAPE_CLASSES = {
  circle: 'rounded-full',
  square: 'rounded-none',
  rounded: 'rounded-md'
} as const;

// Base CSS classes
export const BASE_CLASSES = 'inline-flex items-center justify-center';

// Default values
export const DEFAULT_SIZE: 'md' = 'md';
export const DEFAULT_VARIANT: 'solid' = 'solid';
export const DEFAULT_SHAPE: 'circle' = 'circle';
export const DEFAULT_COLOR: 'primary' = 'primary';