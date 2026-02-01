import type { HTMLAttributes } from 'svelte/elements';

export type DotColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
export type DotSize = 'sm' | 'md' | 'lg';

export interface DotProps extends HTMLAttributes<HTMLSpanElement> {
  color?: DotColor;
  size?: DotSize;
  class?: string;
}

export const DEFAULT_DOT_COLOR: DotColor = 'primary';
export const DEFAULT_DOT_SIZE: DotSize = 'md';

const BASE_DOT_CLASSES = 'inline-block rounded-full';
const DOT_COLOR_CLASSES: Record<DotColor, string> = {
  primary: 'bg-indigo-600',
  secondary: 'bg-gray-600',
  success: 'bg-green-600',
  warning: 'bg-yellow-600',
  danger: 'bg-red-600',
  info: 'bg-blue-600',
  gray: 'bg-gray-400'
};
const DOT_SIZE_CLASSES: Record<DotSize, string> = {
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4'
};

export const getDotClasses = (color: DotColor, size: DotSize, className = '') => {
  return [BASE_DOT_CLASSES, DOT_COLOR_CLASSES[color], DOT_SIZE_CLASSES[size], className]
    .filter(Boolean)
    .join(' ');
};
