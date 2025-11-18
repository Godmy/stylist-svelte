import type { IRangeSliderProps } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing RangeSlider styling logic
 */
export class RangeSliderStyleManager {
  static getContainerClasses(className: string): string {
    return `w-full ${className}`;
  }

  static getLabelClasses(): string {
    return 'text-sm font-medium text-gray-700';
  }

  static getValueClasses(): string {
    return 'text-sm text-gray-500';
  }

  static getMainContainerClasses(): string {
    return 'flex items-center justify-between mb-2';
  }

  static getRangeTrackClasses(): string {
    return 'relative h-2 bg-gray-200 rounded-full';
  }

  static getRangeFillClasses(): string {
    return 'absolute top-0 h-2 bg-indigo-500 rounded-full';
  }

  static getRangeThumbClasses(): string {
    return 'absolute top-1/2 w-4 h-4 -mt-2 -ml-2 bg-white border-2 border-indigo-500 rounded-full shadow cursor-pointer';
  }

  static getSliderThumbClasses(): string {
    return 'w-full h-2 appearance-none rounded-full slider-thumb focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 disabled:opacity-50';
  }

  static getMinMaxLabelClasses(): string {
    return 'flex justify-between text-xs text-gray-400 mt-2';
  }

  static getDescriptionClasses(): string {
    return 'mt-2 text-sm text-gray-500';
  }

  static getSingleSliderRangeStyle(minPercentage: number, maxPercentage: number): string {
    return `background: linear-gradient(to right,
      rgb(229 231 235) 0%,
      rgb(229 231 235) ${minPercentage}%,
      rgb(99 102 241) ${minPercentage}%,
      rgb(99 102 241) ${maxPercentage}%,
      rgb(229 231 235) ${maxPercentage}%,
      rgb(229 231 235) 100%)`;
  }
}