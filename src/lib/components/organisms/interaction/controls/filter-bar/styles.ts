import type { IFilterBarStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing FilterBar styling logic
 * Uses CSS variables from the theme system
 */
export class FilterBarStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'c-filter-bar rounded-xl border border-gray-200 bg-white p-4 shadow-sm';

    return `${baseClasses} ${className}`;
  }

  static getHeaderClasses(): string {
    return 'flex flex-wrap items-center gap-2';
  }

  static getToggleClasses(): string {
    return 'rounded-lg border border-gray-200 px-3 py-2';
  }

  static getTagClasses(): string {
    return 'cursor-pointer';
  }

  static getRangeClasses(): string {
    return 'flex items-center gap-3';
  }

  static getActiveClasses(): string {
    return 'bg-indigo-50 text-indigo-600';
  }

  static getInactiveClasses(): string {
    return 'text-gray-500';
  }

  static getAllClasses(className: string): string {
    const baseClasses = this.getBaseClasses(className);

    return baseClasses;
  }
}