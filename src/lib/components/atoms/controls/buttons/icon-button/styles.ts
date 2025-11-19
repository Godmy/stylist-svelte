import type { IconButtonVariant, IconButtonSize, IIconButtonStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing IconButton styling logic
 * Uses CSS variables from the theme system
 */
export class IconButtonStyleManager {
  static getVariantClasses(variant: IconButtonVariant): string {
    const variantClasses: Record<IconButtonVariant, string> = {
      primary: 'bg-[--color-primary-600] hover:bg-[--color-primary-700] text-[--color-text-inverse]',
      secondary: 'bg-[--color-secondary-100] hover:bg-[--color-secondary-200] text-[--color-text-primary]',
      success: 'bg-[--color-success-600] hover:bg-[--color-success-700] text-[--color-text-inverse]',
      warning: 'bg-[--color-warning-500] hover:bg-[--color-warning-600] text-[--color-text-inverse]',
      danger: 'bg-[--color-danger-600] hover:bg-[--color-danger-700] text-[--color-text-inverse]',
      ghost: 'bg-transparent hover:bg-[--color-secondary-100] text-[--color-text-primary] border border-[--color-border-primary]',
      link: 'bg-transparent hover:bg-[--color-secondary-100] text-[--color-primary-600] underline'
    };

    return variantClasses[variant];
  }

  static getSizeClasses(size: IconButtonSize): string {
    const sizeClasses: Record<IconButtonSize, string> = {
      sm: 'p-1.5',
      md: 'p-2',
      lg: 'p-3'
    };

    return sizeClasses[size];
  }

  static getDisabledClass(isDisabled: boolean, isLoading: boolean): string {
    return (isDisabled || isLoading)
      ? 'opacity-50 cursor-not-allowed pointer-events-none'
      : '';
  }

  static getAllClasses(variant: IconButtonVariant, size: IconButtonSize, isDisabled: boolean, isLoading: boolean, className: string): string {
    const baseClasses = 'inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:ring-offset-2 border-0';
    const variantClasses = this.getVariantClasses(variant);
    const sizeClasses = this.getSizeClasses(size);
    const disabledClass = this.getDisabledClass(isDisabled, isLoading);

    return `${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClass} ${className}`;
  }
}