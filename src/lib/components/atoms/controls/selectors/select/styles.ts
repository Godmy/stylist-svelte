import type { ISelectProps } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing Select styling logic
 * Uses CSS variables from the theme system
 */
export class SelectStyleManager {
  static getSelectClasses(hasError: boolean, disabled: boolean, className: string): string {
    const baseClasses = 'w-full px-3 py-2 border rounded-md shadow-sm border-[--color-border-primary] bg-[--color-background-primary] text-[--color-text-primary]';
    const errorClasses = hasError
      ? 'border-[--color-danger-500] focus:ring-[--color-danger-500] focus:border-[--color-danger-500]'
      : 'focus:ring-[--color-primary-500] focus:border-[--color-primary-500]';
    const disabledClasses = disabled ? 'bg-[--color-background-secondary] cursor-not-allowed' : '';

    return `${baseClasses} ${errorClasses} ${disabledClasses} ${className}`;
  }

  static getLabelClasses(): string {
    return 'block text-sm font-medium text-[--color-text-primary] mb-1';
  }

  static getErrorClasses(): string {
    return 'mt-1 text-sm text-[--color-danger-600]';
  }

  static getContainerClasses(): string {
    return 'mb-[--spacing-md]';
  }
}