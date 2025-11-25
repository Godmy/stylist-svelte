import type { SplitButtonVariant, SplitButtonSize, ISplitButtonStyleClasses, ISplitButtonItem } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing SplitButton styling logic
 * Uses CSS variables from the theme system
 */
export class SplitButtonStyleManager {
  static getVariantClasses(variant: SplitButtonVariant): string {
    const variantClasses: Record<SplitButtonVariant, string> = {
      primary: 'splitbutton-variant-primary',
      secondary: 'splitbutton-variant-secondary',
      success: 'splitbutton-variant-success',
      warning: 'splitbutton-variant-warning',
      danger: 'splitbutton-variant-danger',
      ghost: 'splitbutton-variant-ghost',
      link: 'splitbutton-variant-link'
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
    return `relative inline-flex items-center rounded-l-md border border-r-0 border-[--color-border-primary] ${variantClasses} ${buttonSizeClasses} ${textSizeClasses}`;
  }

  static getSecondaryButtonClasses(variantClasses: string, buttonSizeClasses: string, textSizeClasses: string): string {
    return `relative inline-flex items-center rounded-r-md border border-[--color-border-primary] ${variantClasses} ${buttonSizeClasses} ${textSizeClasses}`;
  }

  static getDropdownClasses(dropdownSizeClasses: string): string {
    return `splitbutton-dropdown absolute z-10 top-full mt-1 origin-top-left rounded-md shadow-lg focus:outline-none ${dropdownSizeClasses}`;
  }

  static getDropdownItemClasses(): string {
    return 'splitbutton-dropdown-item text-left rounded px-3 py-1.5 text-sm';
  }
}