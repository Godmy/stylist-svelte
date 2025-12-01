import type { CloseButtonSize, CloseButtonVariant } from './types';

export const getCloseButtonSizeClasses = (size: CloseButtonSize) => {
  switch(size) {
    case 'sm': return 'w-6 h-6 p-0.5';
    case 'md': return 'w-8 h-8 p-1';
    case 'lg': return 'w-10 h-10 p-1.5';
    default: return 'w-8 h-8 p-1';
  }
};

export const getCloseButtonVariantClasses = (variant: CloseButtonVariant) => {
  switch(variant) {
    case 'solid':
      return 'border-0 bg-[--color-danger-600] text-[--color-text-inverse] hover:bg-[--color-danger-700]';
    case 'outline':
      return 'border-2 border-[--color-border-primary] bg-transparent text-[--color-text-primary] hover:bg-[--color-secondary-100]';
    case 'ghost':
      return 'border-0 bg-transparent text-[--color-text-primary] hover:bg-[--color-secondary-100]';
    default:
      return 'border-0 bg-transparent text-[--color-text-primary] hover:bg-[--color-secondary-100]';
  }
};

export const getCloseButtonDisabledClass = (disabled: boolean, loading: boolean) => {
  return (disabled || loading) ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
};

export const getCloseButtonCombinedClasses = (
  size: CloseButtonSize,
  variant: CloseButtonVariant,
  disabled: boolean,
  loading: boolean,
  className: string
) => {
  const sizeClasses = getCloseButtonSizeClasses(size);
  const variantClasses = getCloseButtonVariantClasses(variant);
  const disabledClass = getCloseButtonDisabledClass(disabled, loading);
  const baseClasses = 'flex items-center justify-center transition-colors duration-200 rounded-full';

  return `${sizeClasses} ${variantClasses} ${disabledClass} ${baseClasses} ${className}`.trim();
};

export const getLoaderSizeClasses = (size: CloseButtonSize) => {
  switch(size) {
    case 'sm': return 'w-2 h-2';
    case 'md': return 'w-3 h-3';
    case 'lg': return 'w-4 h-4';
    default: return 'w-3 h-3';
  }
};

export const getLoaderClasses = (size: CloseButtonSize) => {
  const sizeClass = getLoaderSizeClasses(size);
  return `animate-spin ${sizeClass}`;
};

export const getIconClasses = () => {
  return 'w-full h-full';
};