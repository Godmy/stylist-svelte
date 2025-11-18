import type { IRadioProps } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing Radio styling logic
 */
export class RadioStyleManager {
  static getContainerClasses(): string {
    return 'flex items-center space-x-2';
  }

  static getRadioClasses(disabled: boolean): string {
    const baseClasses = 'h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300';
    const disabledClass = disabled ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer';

    return `${baseClasses} ${disabledClass}`;
  }

  static getLabelClasses(disabled: boolean): string {
    const baseClasses = 'block text-sm font-medium text-gray-700';
    const disabledClass = disabled ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer';

    return `${baseClasses} ${disabledClass}`;
  }
}