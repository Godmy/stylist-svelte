import type { ButtonVariant, ButtonSize, IButtonStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing button styling logic
 * Uses CSS variables from the theme system
 */
export class ButtonStyleManager {
  static getVariantClasses(variant: ButtonVariant): string {
    const variantClasses: Record<ButtonVariant, string> = {
      primary: 'button-variant-primary',
      secondary: 'button-variant-secondary',
      success: 'button-variant-success',
      warning: 'button-variant-warning',
      danger: 'button-variant-danger',
      outline: 'button-variant-outline',
      ghost: 'button-variant-ghost',
      link: 'button-variant-link'
    };

    return variantClasses[variant];
  }

  static getSizeClasses(size: ButtonSize): string {
    const sizeClasses: Record<ButtonSize, string> = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };

    return sizeClasses[size];
  }

  static getDisabledClass(isDisabled: boolean, isLoading: boolean): string {
    return (isDisabled || isLoading)
      ? 'opacity-50 cursor-not-allowed pointer-events-none'
      : '';
  }

  static getBlockClass(isBlock: boolean): string {
    return isBlock ? 'w-full' : '';
  }

  static getAllClasses(variant: ButtonVariant, size: ButtonSize, isDisabled: boolean, isLoading: boolean, isBlock: boolean, className: string): string {
    const baseClasses = 'button-base inline-flex items-center justify-center font-medium rounded-md transition-colors';
    const variantClasses = this.getVariantClasses(variant);
    const sizeClasses = this.getSizeClasses(size);
    const disabledClass = this.getDisabledClass(isDisabled, isLoading);
    const blockClass = this.getBlockClass(isBlock);

    // Добавляем классы для лоадера
    const loaderClasses = this.getLoaderClasses(size);

    return `${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClass} ${blockClass} ${loaderClasses} ${className}`;
  }

  static getLoaderClasses(size: ButtonSize): string {
    const loaderSizeClasses: Record<ButtonSize, string> = {
      sm: 'button-size-sm',
      md: 'button-size-md',
      lg: 'button-size-lg'
    };

    return `${loaderSizeClasses[size]}`;
  }
}