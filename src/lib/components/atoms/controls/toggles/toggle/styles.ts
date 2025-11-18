import type { ToggleSize } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing Toggle styling logic
 */
export class ToggleStyleManager {
  static getContainerClasses(className: string): string {
    return `relative inline-flex items-center ${className}`;
  }

  static getInputClasses(): string {
    return 'sr-only';
  }

  static getTrackClasses(checked: boolean, disabled: boolean, width: string, height: string): string {
    const baseClasses = 'relative rounded-full cursor-pointer transition-colors ease-in-out duration-200';
    const colorClasses = checked
      ? (disabled ? 'bg-indigo-300' : 'bg-indigo-600')
      : (disabled ? 'bg-gray-300' : 'bg-gray-300');

    return `${baseClasses} ${width} ${height} ${colorClasses}`;
  }

  static getThumbClasses(checked: boolean, size: ToggleSize, thumb: string): string {
    const baseClasses = 'absolute rounded-full bg-white shadow-md transform transition-transform ease-in-out duration-200 top-0.5';
    const positionClasses = checked
      ? (size === 'sm' ? 'translate-x-4' : size === 'md' ? 'translate-x-5' : 'translate-x-7')
      : 'translate-x-0.5';

    return `${baseClasses} ${thumb} ${positionClasses}`;
  }

  static getDisabledClass(disabled: boolean): string {
    return disabled ? 'opacity-50' : '';
  }

  static getSizeClasses(size: ToggleSize): {
    width: string;
    height: string;
    thumb: string;
  } {
    const sizeClasses: Record<ToggleSize, {
      width: string;
      height: string;
      thumb: string;
    }> = {
      sm: { width: 'w-8', height: 'h-4', thumb: 'w-3 h-3 ml-0.5' },
      md: { width: 'w-11', height: 'h-6', thumb: 'w-5 h-5 ml-0.5' },
      lg: { width: 'w-14', height: 'h-7', thumb: 'w-6 h-6 ml-0.5' }
    };

    return sizeClasses[size];
  }
}