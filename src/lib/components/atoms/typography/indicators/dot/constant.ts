import type { DotColor, DotSize } from './types';

// Default values
export const DEFAULT_DOT_COLOR: DotColor = 'primary';
export const DEFAULT_DOT_SIZE: DotSize = 'md';

// Base classes for the dot
export const BASE_DOT_CLASSES = 'inline-block rounded-full';

// Color classes
export const DOT_COLOR_CLASSES: Record<DotColor, string> = {
  primary: 'bg-indigo-600',
  secondary: 'bg-gray-600',
  success: 'bg-green-600',
  warning: 'bg-yellow-600',
  danger: 'bg-red-600',
  info: 'bg-blue-600',
  gray: 'bg-gray-400'
};

// Size classes
export const DOT_SIZE_CLASSES: Record<DotSize, string> = {
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4'
};
