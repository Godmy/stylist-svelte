import type { IMockDataSelectorStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing MockDataSelector styling logic
 * Uses CSS variables from the theme system
 */
export class MockDataSelectorStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'mock-data-selector-base';

    return `${baseClasses} ${className}`;
  }

  static getSelectClasses(): string {
    return 'mock-data-select w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500';
  }

  static getOptionClasses(): string {
    return 'mock-data-option';
  }

  static getAllClasses(className: string): string {
    const baseClasses = this.getBaseClasses(className);
    const selectClasses = this.getSelectClasses();

    return `${baseClasses} ${selectClasses}`;
  }
}