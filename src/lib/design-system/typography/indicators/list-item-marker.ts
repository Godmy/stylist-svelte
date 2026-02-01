import type { HTMLAttributes } from 'svelte/elements';

export type MarkerType = 'bullet' | 'number' | 'icon';
export type ListItemColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
export type ListItemSize = 'sm' | 'md' | 'lg';

export interface ListItemMarkerProps extends HTMLAttributes<HTMLSpanElement> {
  type?: MarkerType;
  value?: string | number;
  color?: ListItemColor;
  size?: ListItemSize;
  class?: string;
}

export const DEFAULT_MARKER_TYPE: MarkerType = 'bullet';
export const DEFAULT_MARKER_VALUE: string | number = '';
export const DEFAULT_MARKER_COLOR: ListItemColor = 'gray';
export const DEFAULT_MARKER_SIZE: ListItemSize = 'md';

const BASE_MARKER_CLASSES = 'inline-flex items-center justify-center flex-shrink-0';
const MARKER_COLOR_CLASSES: Record<ListItemColor, string> = {
  primary: 'text-[--color-primary-500]',
  secondary: 'text-[--color-secondary-500]',
  success: 'text-[--color-success-500]',
  warning: 'text-[--color-warning-500]',
  danger: 'text-[--color-danger-500]',
  info: 'text-[--color-info-500]',
  gray: 'text-[--color-text-tertiary]'
};
const MARKER_SIZE_CLASSES: Record<ListItemSize, string> = {
  sm: 'h-4 w-4 text-xs',
  md: 'h-5 w-5 text-sm',
  lg: 'h-6 w-6 text-base'
};
const BULLET_CLASSES = 'rounded-full bg-current';
const BULLET_SIZE_CLASSES: Record<ListItemSize, string> = {
  sm: 'h-1.5 w-1.5',
  md: 'h-2 w-2',
  lg: 'h-2.5 w-2.5'
};

export const getMarkerClasses = (color: ListItemColor, size: ListItemSize, className = '') => {
  return [BASE_MARKER_CLASSES, MARKER_COLOR_CLASSES[color], MARKER_SIZE_CLASSES[size], className]
    .filter(Boolean)
    .join(' ');
};

export const getBulletClasses = (size: ListItemSize) => {
  return [BULLET_CLASSES, BULLET_SIZE_CLASSES[size]].filter(Boolean).join(' ');
};
