import type { SplitButtonVariant, SplitButtonSize, ISplitButtonStyleClasses, ISplitButtonItem } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing SplitButton styling logic
 */
export class SplitButtonStyleManager {
  static getVariantClasses(variant: SplitButtonVariant): string {
    const variantClasses: Record<SplitButtonVariant, string> = {
      primary: 'bg-[--color-primary-600] hover:bg-[--color-primary-700] text-[--color-text-inverse]',
      secondary: 'bg-[--color-secondary-100] hover:bg-[--color-secondary-200] text-[--color-text-primary] dark:bg-[--color-secondary-700] dark:hover:bg-[--color-secondary-600] dark:text-[--color-text-inverse]',
      success: 'bg-[--color-success-600] hover:bg-[--color-success-700] text-[--color-text-inverse]',
      warning: 'bg-[--color-warning-500] hover:bg-[--color-warning-600] text-[--color-text-inverse]',
      danger: 'bg-[--color-danger-600] hover:bg-[--color-danger-700] text-[--color-text-inverse]',
      ghost: 'bg-transparent hover:bg-[--color-secondary-100] text-[--color-text-primary] border border-[--color-border-primary] dark:hover:bg-[--color-secondary-700] dark:text-[--color-text-inverse] dark:border-[--color-border-primary]',
      link: 'bg-transparent hover:bg-[--color-secondary-100] text-[--color-primary-600] underline dark:hover:bg-[--color-secondary-700] dark:text-[--color-primary-400]'
    };

    return variantClasses[variant];
  }

  static getSizeTextClasses(size: SplitButtonSize): string {
    const sizeClasses: Record<SplitButtonSize, string> = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };

    return sizeClasses[size];
  }

  static getButtonSizeClasses(size: SplitButtonSize): string {
    const buttonSizeClasses: Record<SplitButtonSize, string> = {
      sm: 'px-3 py-1.5',
      md: 'px-4 py-2',
      lg: 'px-6 py-3'
    };

    return buttonSizeClasses[size];
  }

  static getDropdownSizeClasses(size: SplitButtonSize): string {
    const dropdownSizeClasses: Record<SplitButtonSize, string> = {
      sm: 'p-1.5 min-w-[8rem]',
      md: 'p-2 min-w-[10rem]',
      lg: 'p-2.5 min-w-[12rem]'
    };

    return dropdownSizeClasses[size];
  }

  static getMainContainerClasses(className: string): string {
    return `relative inline-flex rounded-md ${className}`;
  }

  static getPrimaryButtonClasses(variantClasses: string, buttonSizeClasses: string, textSizeClasses: string): string {
    return `relative inline-flex items-center rounded-l-md border border-r-0 ${variantClasses} ${buttonSizeClasses} ${textSizeClasses}`;
  }

  static getSecondaryButtonClasses(variantClasses: string, buttonSizeClasses: string, textSizeClasses: string): string {
    return `relative inline-flex items-center rounded-r-md border ${variantClasses} ${buttonSizeClasses} ${textSizeClasses}`;
  }

  static getDropdownClasses(dropdownSizeClasses: string): string {
    return `absolute z-10 mt-1 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${dropdownSizeClasses} dark:bg-gray-800`;
  }

  static getDropdownItemClasses(): string {
    return 'text-left rounded px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed';
  }
}