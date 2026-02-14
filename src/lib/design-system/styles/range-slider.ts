import type { IRangeSliderProps } from '$stylist/design-system/props/range-slider';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing RangeSlider styling logic
 * Uses CSS variables from the theme system
 */
export class RangeSliderStyleManager {
  static getContainerClasses(className: string): string {
    return `w-full ${className}`;
  }

  static getLabelClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  static getValueClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  static getMainContainerClasses(): string {
    return 'flex items-center justify-between mb-[--spacing-sm]';
  }

  static getRangeTrackClasses(): string {
    return 'relative h-2 bg-[--color-background-tertiary] rounded-full';
  }

  static getRangeFillClasses(): string {
    return 'absolute top-0 h-2 bg-[--color-primary-500] rounded-full';
  }

  static getRangeThumbClasses(): string {
    return 'absolute top-1/2 w-4 h-4 -mt-2 -ml-2 bg-[--color-background-primary] border-2 border-[--color-primary-500] rounded-full shadow cursor-pointer';
  }

  static getSliderThumbClasses(): string {
    return 'w-full h-2 appearance-none rounded-full slider-thumb focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:ring-offset-0 disabled:opacity-50';
  }

  static getMinMaxLabelClasses(): string {
    return 'flex justify-between text-xs text-[--color-text-secondary] mt-[--spacing-sm]';
  }

  static getDescriptionClasses(): string {
    return 'mt-[--spacing-sm] text-sm text-[--color-text-secondary]';
  }

  static getSingleSliderRangeStyle(minPercentage: number, maxPercentage: number): string {
    const trackColor = 'var(--color-secondary-200)';
    const activeColor = 'var(--color-primary-500)';

    return `background: linear-gradient(to right,
      ${trackColor} 0%,
      ${trackColor} ${minPercentage}%,
      ${activeColor} ${minPercentage}%,
      ${activeColor} ${maxPercentage}%,
      ${trackColor} ${maxPercentage}%,
      ${trackColor} 100%)`;
  }
}
