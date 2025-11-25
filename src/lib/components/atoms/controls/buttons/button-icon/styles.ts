import type { IconButtonVariant, IconButtonSize, IIconButtonStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing IconButton styling logic
 * Uses CSS variables from the theme system
 */
export class IconButtonStyleManager {
  static getVariantClasses(variant: IconButtonVariant): string {
    const variantClasses: Record<IconButtonVariant, string> = {
      primary: 'iconbutton-variant-primary',
      secondary: 'iconbutton-variant-secondary',
      success: 'iconbutton-variant-success',
      warning: 'iconbutton-variant-warning',
      danger: 'iconbutton-variant-danger',
      ghost: 'iconbutton-variant-ghost',
      link: 'iconbutton-variant-link'
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

  static getLoaderClasses(size: IconButtonSize): string {
    const loaderSizeClasses: Record<IconButtonSize, string> = {
      sm: 'iconbutton-size-sm',
      md: 'iconbutton-size-md',
      lg: 'iconbutton-size-lg'
    };

    return loaderSizeClasses[size];
  }

  static getAllClasses(
    variant: IconButtonVariant,
    size: IconButtonSize,
    isDisabled: boolean,
    isLoading: boolean,
    className: string
  ): string {
    const baseClasses = 'iconbutton-base inline-flex items-center justify-center rounded-md transition-colors';
    const variantClasses = this.getVariantClasses(variant);
    const sizeClasses = this.getSizeClasses(size);
    const disabledClass = this.getDisabledClass(isDisabled, isLoading);
    const loaderClasses = this.getLoaderClasses(size);

    return `${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClass} ${loaderClasses} ${className}`;
  }
}