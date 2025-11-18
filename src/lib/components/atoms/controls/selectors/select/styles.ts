import type { ISelectProps } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing Select styling logic
 */
export class SelectStyleManager {
  static getSelectClasses(hasError: boolean, disabled: boolean, className: string): string {
    const baseClasses = 'w-full px-3 py-2 border rounded-md shadow-sm';
    const errorClasses = hasError
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500';
    const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : '';

    return `${baseClasses} ${errorClasses} ${disabledClasses} ${className}`;
  }

  static getLabelClasses(): string {
    return 'block text-sm font-medium text-gray-700 mb-1';
  }

  static getErrorClasses(): string {
    return 'mt-1 text-sm text-red-600';
  }

  static getContainerClasses(): string {
    return 'mb-4';
  }
}