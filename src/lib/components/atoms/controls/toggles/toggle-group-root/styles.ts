import type { IToggleGroupRootStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing toggle group root styling logic
 * Uses CSS variables from the theme system
 */
export class ToggleGroupRootStyleManager {
  static getRootClasses(): string {
    return 'toggle-group-root-base inline-flex items-center bg-[--color-secondary-100] p-1 rounded-md';
  }

  static getDisabledClass(isDisabled: boolean): string {
    return isDisabled ? 'opacity-50 cursor-not-allowed' : '';
  }

  static getAllClasses(isDisabled: boolean, className: string): string {
    const baseClasses = this.getRootClasses();
    const disabledClass = this.getDisabledClass(isDisabled);

    return `${baseClasses} ${disabledClass} ${className}`;
  }
}