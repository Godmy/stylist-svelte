import type { IProductFiltersStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing ProductFilters styling logic
 * Uses CSS variables from the theme system
 */
export class ProductFiltersStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'product-filters-base p-4 border rounded-lg bg-gray-50';

    return `${baseClasses} ${className}`;
  }

  static getFilterClasses(): string {
    return 'filter-section mb-4';
  }

  static getControlsClasses(): string {
    return 'filter-controls flex space-x-2 mt-4';
  }

  static getAllClasses(className: string): string {
    return this.getBaseClasses(className);
  }
}