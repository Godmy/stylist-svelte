import type { CloseButtonVariant, CloseButtonSize, ICloseButtonStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing CloseButton styling logic
 * Uses CSS variables from the theme system
 */
export class CloseButtonStyleManager {
  static getSizeClasses(size: CloseButtonSize): string {
    const sizeClasses: Record<CloseButtonSize, string> = {
      sm: 'w-6 h-6 p-0.5',
      md: 'w-8 h-8 p-1',
      lg: 'w-10 h-10 p-1.5'
    };

    return sizeClasses[size];
  }

  static getVariantClasses(variant: CloseButtonVariant): string {
    const variantClasses: Record<CloseButtonVariant, string> = {
      solid: 'closebutton-variant-solid',
      outline: 'closebutton-variant-outline',
      ghost: 'closebutton-variant-ghost'
    };

    return variantClasses[variant];
  }

  static getDisabledClass(isDisabled: boolean, isLoading: boolean): string {
    return (isDisabled || isLoading)
      ? 'opacity-50 cursor-not-allowed pointer-events-none'
      : '';
  }

  static getLoaderClasses(size: CloseButtonSize): string {
    const loaderSizeClasses: Record<CloseButtonSize, string> = {
      sm: 'closebutton-size-sm',
      md: 'closebutton-size-md',
      lg: 'closebutton-size-lg'
    };

    return loaderSizeClasses[size];
  }

  static getAllClasses(
    size: CloseButtonSize,
    variant: CloseButtonVariant,
    isDisabled: boolean,
    isLoading: boolean,
    className: string
  ): string {
    const baseClasses = 'closebutton-base flex items-center justify-center transition-colors duration-200 rounded-full';
    const sizeClasses = this.getSizeClasses(size);
    const variantClasses = this.getVariantClasses(variant);
    const disabledClass = this.getDisabledClass(isDisabled, isLoading);
    const loaderClasses = this.getLoaderClasses(size);

    return `${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClass} ${loaderClasses} ${className}`;
  }
}