import type { IFilterBarStyleClasses } from '$stylist/control/interface/component/filter-bar/struct/styles';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing FilterBar styling logic
 * Uses CSS variables from the theme system
 */
export class FilterBarStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'c-filter-bar rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4 shadow-sm';
    return `${baseClasses} ${className}`;
  }

  static getHeaderClasses(): string {
    return 'flex flex-wrap items-center gap-2';
  }

  static getToggleClasses(): string {
    return 'rounded-lg border border-[var(--color-border-primary)] px-3 py-2';
  }

  static getTagClasses(): string {
    return 'cursor-pointer';
  }

  static getRangeClasses(): string {
    return 'flex items-center gap-3';
  }

  static getActiveClasses(): string {
    return 'bg-[var(--color-primary-50)] text-[var(--color-primary-600)]';
  }

  static getInactiveClasses(): string {
    return 'text-[var(--color-text-secondary)]';
  }

  static getAllClasses(className: string): string {
    const baseClasses = this.getBaseClasses(className);
    return baseClasses;
  }
}
