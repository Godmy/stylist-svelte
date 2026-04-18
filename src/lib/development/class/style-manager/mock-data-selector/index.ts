import type { SlotMockDataSelectorStyleClasses as IMockDataSelectorStyleClasses } from '$stylist/development/interface/slot/mock-data-selector-style-classes';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing MockDataSelector styling logic
 * Uses CSS variables from the theme system
 */
export class MockDataSelectorStyleManager {
  static getContainerClasses(className: string): string {
    const baseClasses = 'c-mock-data-selector bg-[--color-background-primary] rounded-lg border border-[--color-border-primary] p-6';
    return `${baseClasses} ${className}`.trim();
  }

  static getHeaderClasses(): string {
    return 'mb-6';
  }

  static getFooterClasses(): string {
    return 'mt-6 flex justify-end gap-3';
  }

  static getBaseClasses(className: string): string {
    const baseClasses = 'c-mock-data-selector';
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
