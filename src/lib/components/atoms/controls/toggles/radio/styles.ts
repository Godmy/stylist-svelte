import type { IRadioProps } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing Radio styling logic
 * Uses CSS variables from the theme system
 */
export class RadioStyleManager {
  static getContainerClasses(): string {
    return 'flex items-center space-x-[--spacing-sm]';
  }

  static getRadioClasses(disabled: boolean): string {
    const baseClasses = 'h-4 w-4 text-[--color-primary-600] focus:ring-[--color-primary-500] border-[--color-border-primary]';
    const disabledClass = disabled ? 'cursor-not-allowed text-[--color-text-secondary]' : 'cursor-pointer';

    return `${baseClasses} ${disabledClass}`;
  }

  static getLabelClasses(disabled: boolean): string {
    const baseClasses = 'block text-sm font-medium text-[--color-text-primary]';
    const disabledClass = disabled ? 'cursor-not-allowed text-[--color-text-secondary]' : 'cursor-pointer';

    return `${baseClasses} ${disabledClass}`;
  }
}