/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing ProductSorting styling logic
 * Uses CSS variables from the theme system
 */
export class ProductSortingStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'product-sorting-base flex items-center space-x-2';

    return `${baseClasses} ${className}`;
  }

  static getSelectClasses(): string {
    return 'product-sort-select px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500';
  }

  static getOptionClasses(): string {
    return 'product-sort-option';
  }

  static getAllClasses(className: string): string {
    const baseClasses = this.getBaseClasses(className);
    const selectClasses = this.getSelectClasses();

    return `${baseClasses} ${selectClasses}`;
  }
}
