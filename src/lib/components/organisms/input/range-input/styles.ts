import type { IRangeInputStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing RangeInput styling logic
 * Uses CSS variables from the theme system
 */
export class RangeInputStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'range-input-base w-full';

    return `${baseClasses} ${className}`;
  }

  static getTrackClasses(): string {
    return 'range-track w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer';
  }

  static getThumbClasses(): string {
    return 'range-thumb w-5 h-5 bg-blue-500 rounded-full cursor-pointer -mt-1.5';
  }

  static getDisabledClass(isDisabled: boolean): string {
    return isDisabled ? 'opacity-50 cursor-not-allowed' : '';
  }

  static getAllClasses(className: string, isDisabled: boolean): string {
    const baseClasses = this.getBaseClasses(className);
    const trackClasses = this.getTrackClasses();
    const thumbClasses = this.getThumbClasses();
    const disabledClass = this.getDisabledClass(isDisabled);

    return `${baseClasses} ${trackClasses} ${thumbClasses} ${disabledClass}`;
  }
}