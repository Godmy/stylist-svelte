import type { SwitchSize } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing Switch styling logic
 */
export class SwitchStyleManager {
  static getLabelClasses(disabled: boolean, className: string): string {
    const baseClasses = 'flex items-start gap-3 select-none';
    const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';

    return `${baseClasses} ${disabledClasses} ${className}`;
  }

  static getTrackClasses(size: SwitchSize, checked: boolean): string {
    const trackSizes: Record<SwitchSize, string> = {
      sm: 'w-10 h-6',
      md: 'w-11 h-6',
      lg: 'w-14 h-7'
    };

    const baseClasses = 'relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500';
    const colorClasses = checked ? 'bg-indigo-600' : 'bg-gray-200';

    return `${baseClasses} ${trackSizes[size]} ${colorClasses}`;
  }

  static getKnobSizes(size: SwitchSize): string {
    const knobSizes: Record<SwitchSize, string> = {
      sm: 'h-5 w-5',
      md: 'h-5 w-5',
      lg: 'h-6 w-6'
    };

    return knobSizes[size];
  }

  static getKnobTransform(size: SwitchSize, checked: boolean): string {
    const translateValues: Record<SwitchSize, string> = {
      sm: 'translate-x-4',
      md: 'translate-x-5',
      lg: 'translate-x-7'
    };

    return checked ? translateValues[size] : 'translate-x-0';
  }

  static getInputClasses(): string {
    return 'absolute block w-full h-full opacity-0 cursor-pointer';
  }

  static getKnobClasses(size: SwitchSize, checked: boolean): string {
    const baseClasses = 'inline-block rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out';
    const sizeClasses = this.getKnobSizes(size);
    const transformClasses = this.getKnobTransform(size, checked);

    return `${baseClasses} ${sizeClasses} ${transformClasses}`;
  }

  static getLabelTextClasses(): string {
    return 'flex flex-col pt-0.5';
  }

  static getLabelTitleClasses(): string {
    return 'text-sm font-medium text-gray-900';
  }

  static getLabelDescriptionClasses(): string {
    return 'text-sm text-gray-500';
  }

  static getRequiredMarkerClasses(): string {
    return 'text-red-500';
  }
}