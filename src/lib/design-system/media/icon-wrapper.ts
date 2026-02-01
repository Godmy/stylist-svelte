export type IconWrapperSize = 'sm' | 'md' | 'lg';
export type IconWrapperVariant = 'solid' | 'outline' | 'ghost';
export type IconWrapperShape = 'circle' | 'square' | 'rounded';
export type IconWrapperColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

import type { Snippet } from 'svelte';

export interface IconWrapperProps {
  size?: IconWrapperSize;
  variant?: IconWrapperVariant;
  shape?: IconWrapperShape;
  color?: IconWrapperColor;
  content?: Snippet;
  class?: string;
}

export const ICON_WRAPPER_DEFAULTS = {
  size: 'md' as IconWrapperSize,
  variant: 'solid' as IconWrapperVariant,
  shape: 'circle' as IconWrapperShape,
  color: 'primary' as IconWrapperColor
};

const ICON_WRAPPER_BASE_CLASSES = 'inline-flex items-center justify-center';

const ICON_WRAPPER_SIZE_CLASSES: Record<IconWrapperSize, string> = {
  sm: 'w-6 h-6 text-xs',
  md: 'w-8 h-8 text-sm',
  lg: 'w-10 h-10 text-base'
};

const ICON_WRAPPER_SHAPE_CLASSES: Record<IconWrapperShape, string> = {
  circle: 'rounded-full',
  square: 'rounded-none',
  rounded: 'rounded-md'
};

const ICON_WRAPPER_SOLID_CLASSES: Record<IconWrapperColor, string> = {
  primary: 'bg-[--color-primary-600] text-[--color-text-inverse]',
  secondary: 'bg-[--color-secondary-600] text-[--color-text-inverse]',
  success: 'bg-[--color-success-600] text-[--color-text-inverse]',
  warning: 'bg-[--color-warning-500] text-[--color-text-inverse]',
  danger: 'bg-[--color-danger-600] text-[--color-text-inverse]'
};

const ICON_WRAPPER_OUTLINE_CLASSES: Record<IconWrapperColor, string> = {
  primary: 'bg-transparent border border-[--color-primary-600] text-[--color-primary-600]',
  secondary: 'bg-transparent border border-[--color-secondary-600] text-[--color-secondary-600]',
  success: 'bg-transparent border border-[--color-success-600] text-[--color-success-600]',
  warning: 'bg-transparent border border-[--color-warning-500] text-[--color-warning-500]',
  danger: 'bg-transparent border border-[--color-danger-600] text-[--color-danger-600]'
};

const ICON_WRAPPER_GHOST_CLASSES: Record<IconWrapperColor, string> = {
  primary: 'bg-[--color-primary-100] text-[--color-primary-600] dark:bg-[--color-primary-900] dark:text-[--color-primary-200]',
  secondary: 'bg-[--color-secondary-100] text-[--color-secondary-600] dark:bg-[--color-secondary-900] dark:text-[--color-secondary-200]',
  success: 'bg-[--color-success-100] text-[--color-success-600] dark:bg-[--color-success-900] dark:text-[--color-success-200]',
  warning: 'bg-[--color-warning-100] text-[--color-warning-600] dark:bg-[--color-warning-900] dark:text-[--color-warning-200]',
  danger: 'bg-[--color-danger-100] text-[--color-danger-600] dark:bg-[--color-danger-900] dark:text-[--color-danger-200]'
};

const getIconWrapperColorClasses = (variant: IconWrapperVariant, color: IconWrapperColor) => {
  if (variant === 'solid') {
    return ICON_WRAPPER_SOLID_CLASSES[color];
  }
  if (variant === 'outline') {
    return ICON_WRAPPER_OUTLINE_CLASSES[color];
  }
  return ICON_WRAPPER_GHOST_CLASSES[color];
};

export const getIconWrapperClasses = (
  size: IconWrapperSize,
  shape: IconWrapperShape,
  variant: IconWrapperVariant,
  color: IconWrapperColor,
  className = ''
): string => {
  const sizeClasses = ICON_WRAPPER_SIZE_CLASSES[size];
  const shapeClasses = ICON_WRAPPER_SHAPE_CLASSES[shape];
  const colorClasses = getIconWrapperColorClasses(variant, color);
  const baseClasses = `${ICON_WRAPPER_BASE_CLASSES} ${sizeClasses} ${shapeClasses} ${colorClasses}`.trim();
  return className ? `${baseClasses} ${className}` : baseClasses;
};
