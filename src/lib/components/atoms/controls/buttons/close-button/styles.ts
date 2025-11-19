import type { CloseButtonVariant, CloseButtonSize, ICloseButtonStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing CloseButton styling logic
 * Uses CSS variables from the theme system
 */
export class CloseButtonStyleManager {
  static getSizeClasses(size: CloseButtonSize): string {
    const sizeClasses: Record<CloseButtonSize, string> = {
      sm: 'w-6 h-6 p-0.5 text-xs',
      md: 'w-8 h-8 p-1 text-sm',
      lg: 'w-10 h-10 p-1.5 text-base'
    };

    return sizeClasses[size];
  }

  static getVariantClasses(variant: CloseButtonVariant): string {
    const variantClasses: Record<CloseButtonVariant, string> = {
      solid: 'bg-[--color-danger-600] hover:bg-[--color-danger-700] text-[--color-text-inverse] rounded-full',
      outline: 'bg-transparent hover:bg-[--color-secondary-100] text-[--color-text-primary] border border-[--color-border-primary] rounded-full',
      ghost: 'bg-transparent hover:bg-[--color-secondary-100] text-[--color-text-primary] rounded-full'
    };

    return variantClasses[variant];
  }

  static getAllClasses(size: CloseButtonSize, variant: CloseButtonVariant, className: string): string {
    const baseClasses = 'flex items-center justify-center transition-colors duration-200 border-0';
    const sizeClasses = this.getSizeClasses(size);
    const variantClasses = this.getVariantClasses(variant);

    return `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;
  }
}