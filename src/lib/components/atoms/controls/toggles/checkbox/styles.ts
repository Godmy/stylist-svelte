import type { ICheckboxProps } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing Checkbox styling logic
 * Uses CSS variables from the theme system
 */
export class CheckboxStyleManager {
  static getContainerClasses(): string {
    return 'mb-[--spacing-md]';
  }

  static getWrapperClasses(): string {
    return 'flex items-start';
  }

  static getCheckboxWrapperClasses(): string {
    return 'flex items-center h-5';
  }

  static getCheckboxClasses(disabled: boolean): string {
    const baseClasses = 'h-4 w-4 text-[--color-primary-600] border-[--color-border-primary] rounded';
    const disabledClass = disabled ? 'bg-[--color-background-tertiary] cursor-not-allowed' : 'focus:ring-[--color-primary-500]';

    return `${baseClasses} ${disabledClass}`;
  }

  static getLabelWrapperClasses(): string {
    return 'ml-[--spacing-sm] text-sm';
  }

  static getLabelClasses(): string {
    return 'font-medium text-[--color-text-primary]';
  }

  static getDescriptionClasses(): string {
    return 'text-[--color-text-secondary]';
  }

  static getErrorClasses(): string {
    return 'mt-[--spacing-xs] text-sm text-[--color-danger-600]';
  }
}