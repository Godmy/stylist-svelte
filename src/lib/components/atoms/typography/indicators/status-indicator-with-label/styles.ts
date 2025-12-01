import type { Status } from './types';

export class StatusIndicatorWithLabelStyleManager {
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = [
      'flex',
      'items-center'
    ];

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }

  static getIndicatorSizeClasses(size: 'sm' | 'md' | 'lg' = 'md'): string {
    const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
      'sm': 'w-2 h-2',
      'md': 'w-3 h-3',
      'lg': 'w-4 h-4'
    };

    return sizeClasses[size];
  }

  static getIndicatorStatusClasses(status: Status, customColor?: string, indicatorClass: string = ''): string {
    const baseClasses = [
      'inline-block',
      'rounded-full',
      'mr-2'
    ];

    // Determine status color classes
    let statusColorClass = 'bg-gray-500'; // Default
    if (status === 'success') {
      statusColorClass = 'bg-green-500';
    } else if (status === 'warning') {
      statusColorClass = 'bg-yellow-500';
    } else if (status === 'error') {
      statusColorClass = 'bg-red-500';
    } else if (status === 'info') {
      statusColorClass = 'bg-blue-500';
    } else if (status === 'neutral') {
      statusColorClass = 'bg-gray-500';
    } else if (status === 'custom' && customColor) {
      statusColorClass = `bg-[${customColor}]`;
    }

    baseClasses.push(statusColorClass);

    if (indicatorClass) {
      baseClasses.push(indicatorClass);
    }

    return baseClasses.join(' ');
  }

  static getLabelClasses(labelClass: string = ''): string {
    const baseClasses = [];

    if (labelClass) {
      baseClasses.push(labelClass);
    }

    return baseClasses.join(' ');
  }
}