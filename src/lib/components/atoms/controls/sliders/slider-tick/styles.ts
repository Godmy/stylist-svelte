import type { ISliderTickProps } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing SliderTick styling logic
 */
export class SliderTickStyleManager {
  static getBaseClasses(active: boolean, className: string): string {
    const baseClasses = 'absolute top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full';
    const activeClass = active ? 'bg-[--color-primary-600]' : 'bg-[--color-neutral-400]';

    return `${baseClasses} ${activeClass} ${className}`;
  }

  static getLabelContainerClasses(): string {
    return 'absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-[--color-text-secondary] whitespace-nowrap';
  }

  static getStyle(position: number): string {
    return `left: ${position}%;`;
  }
}