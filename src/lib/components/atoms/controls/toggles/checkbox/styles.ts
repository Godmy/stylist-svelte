import type { ICheckboxProps } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing Checkbox styling logic
 */
export class CheckboxStyleManager {
  static getContainerClasses(): string {
    return 'mb-4';
  }

  static getWrapperClasses(): string {
    return 'flex items-start';
  }

  static getCheckboxWrapperClasses(): string {
    return 'flex items-center h-5';
  }

  static getCheckboxClasses(disabled: boolean): string {
    const baseClasses = 'h-4 w-4 text-indigo-600 border-gray-300 rounded';
    const disabledClass = disabled ? 'bg-gray-100 cursor-not-allowed' : 'focus:ring-indigo-500';

    return `${baseClasses} ${disabledClass}`;
  }

  static getLabelWrapperClasses(): string {
    return 'ml-3 text-sm';
  }

  static getLabelClasses(): string {
    return 'font-medium text-gray-700';
  }

  static getDescriptionClasses(): string {
    return 'text-gray-500';
  }

  static getErrorClasses(): string {
    return 'mt-1 text-sm text-red-600';
  }
}