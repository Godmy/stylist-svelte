import type { IToggleGroupItemStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing toggle group item styling logic
 * Uses CSS variables from the theme system
 */
export class ToggleGroupItemStyleManager {
  static getActiveClass(): string {
    return 'toggle-group-item-active bg-[--color-background-primary] text-[--color-text-primary] shadow-sm';
  }

  static getInactiveClass(): string {
    return 'toggle-group-item-inactive text-[--color-text-secondary] hover:text-[--color-text-primary] hover:bg-[--color-secondary-100]';
  }

  static getDisabledClass(isDisabled: boolean): string {
    return isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  }

  static getAllClasses(isActive: boolean, isDisabled: boolean, className: string): string {
    const baseClasses = 'toggle-group-item-base inline-flex items-center justify-center rounded-sm px-3 py-1 text-sm font-medium border-0';
    const stateClass = isActive ? this.getActiveClass() : this.getInactiveClass();
    const disabledClass = this.getDisabledClass(isDisabled);

    return `${baseClasses} ${stateClass} ${disabledClass} ${className}`;
  }
}