import type { IconButtonVariant, IconButtonSize } from './types';

/**
 * Style utility functions following Single Responsibility Principle
 * Responsible only for managing IconButton styling logic
 */
export const getIconButtonSizeClasses = (size: IconButtonSize): string => {
  const sizeClasses: Record<IconButtonSize, string> = {
    sm: 'p-1.5 text-sm',
    md: 'p-2 text-base',
    lg: 'p-3 text-lg'
  };

  return sizeClasses[size];
};

export const getIconButtonVariantClasses = (variant: IconButtonVariant): string => {
  const variantClasses: Record<IconButtonVariant, string> = {
    primary: 'bg-[--color-primary-600] text-[--color-text-inverse] hover:bg-[--color-primary-700] border-0',
    secondary: 'bg-[--color-secondary-600] text-[--color-text-inverse] hover:bg-[--color-secondary-700] border-0',
    success: 'bg-[--color-success-600] text-[--color-text-inverse] hover:bg-[--color-success-700] border-0',
    warning: 'bg-[--color-warning-600] text-[--color-text-inverse] hover:bg-[--color-warning-700] border-0',
    danger: 'bg-[--color-danger-600] text-[--color-text-inverse] hover:bg-[--color-danger-700] border-0',
    ghost: 'bg-transparent text-[--color-text-primary] hover:bg-[--color-secondary-100] border-0',
    link: 'bg-transparent text-[--color-primary-600] underline hover:text-[--color-primary-800] border-0'
  };

  return variantClasses[variant];
};

export const getIconButtonDisabledClass = (isDisabled: boolean, isLoading: boolean): string => {
  return (isDisabled || isLoading)
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '';
};

export const getIconButtonLoaderSizeClasses = (size: IconButtonSize): string => {
  const loaderSizeClasses: Record<IconButtonSize, string> = {
    sm: 'w-3 h-3', // Fixed hardcoded w-4 -> w-3 for small icons
    md: 'w-4 h-4', // This was the hardcoded value in the original component
    lg: 'w-5 h-5'  // Larger size for large icons
  };

  return loaderSizeClasses[size];
};

export const getIconButtonBaseClasses = (): string => {
  return 'inline-flex items-center justify-center transition-colors duration-200 rounded';
};

export const getIconButtonAllClasses = (
  variant: IconButtonVariant,
  size: IconButtonSize,
  isDisabled: boolean,
  isLoading: boolean,
  className: string
): string => {
  const baseClasses = getIconButtonBaseClasses();
  const sizeClasses = getIconButtonSizeClasses(size);
  const variantClasses = getIconButtonVariantClasses(variant);
  const disabledClass = getIconButtonDisabledClass(isDisabled, isLoading);

  return `${baseClasses} ${sizeClasses} ${variantClasses} ${disabledClass} ${className}`.trim();
};

export const getIconButtonCombinedLoaderClasses = (
  size: IconButtonSize
): string => {
  const baseClasses = 'animate-spin';
  const sizeClasses = getIconButtonLoaderSizeClasses(size);

  return `${baseClasses} ${sizeClasses}`.trim();
};