import type { ButtonVariant, ButtonSize, IButtonStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing button styling logic
 */
export class ButtonStyleManager {
  static getVariantClasses(variant: ButtonVariant): string {
    const variantClasses: Record<ButtonVariant, string> = {
      primary: 'bg-[--color-primary-600] hover:bg-[--color-primary-700] text-[--color-text-inverse]',
      secondary: 'bg-[--color-secondary-100] hover:bg-[--color-secondary-200] text-[--color-text-primary] dark:bg-[--color-secondary-700] dark:hover:bg-[--color-secondary-600] dark:text-[--color-text-inverse]',
      success: 'bg-[--color-success-600] hover:bg-[--color-success-700] text-[--color-text-inverse]',
      warning: 'bg-[--color-warning-500] hover:bg-[--color-warning-600] text-[--color-text-inverse]',
      danger: 'bg-[--color-danger-600] hover:bg-[--color-danger-700] text-[--color-text-inverse]',
      outline: 'bg-transparent border border-[--color-border-primary] hover:bg-[--color-secondary-100] text-[--color-text-primary] dark:hover:bg-[--color-secondary-700] dark:text-[--color-text-inverse] dark:border-[--color-border-primary]',
      ghost: 'bg-transparent hover:bg-[--color-secondary-100] text-[--color-text-primary] border border-[--color-border-primary] dark:hover:bg-[--color-secondary-700] dark:text-[--color-text-inverse] dark:border-[--color-border-primary]',
      link: 'bg-transparent hover:bg-[--color-secondary-100] text-[--color-primary-600] underline dark:hover:bg-[--color-secondary-700] dark:text-[--color-primary-400]'
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
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:ring-offset-2';
    const variantClasses = this.getVariantClasses(variant);
    const sizeClasses = this.getSizeClasses(size);
    const disabledClass = this.getDisabledClass(isDisabled, isLoading);
    const blockClass = this.getBlockClass(isBlock);

    return `${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClass} ${blockClass} ${className}`;
  }
}