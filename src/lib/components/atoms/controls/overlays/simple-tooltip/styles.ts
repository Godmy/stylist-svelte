import type { TooltipPosition } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing SimpleTooltip styling logic
 */
export class SimpleTooltipStyleManager {
  static getPositionClasses(position: TooltipPosition): string {
    const classesMap: Record<TooltipPosition, string> = {
      top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
      right: 'top-1/2 left-full transform -translate-y-1/2 ml-2',
      bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
      left: 'top-1/2 right-full transform -translate-y-1/2 mr-2'
    };
    return classesMap[position];
  }

  static getArrowClasses(position: TooltipPosition): string {
    const classesMap: Record<TooltipPosition, string> = {
      top: 'absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800',
      right: 'absolute top-1/2 left-0 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800',
      bottom: 'absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-800',
      left: 'absolute top-1/2 right-0 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800'
    };
    return classesMap[position];
  }

  static getBaseClasses(className: string): string {
    return `absolute z-50 bg-gray-800 text-white text-xs rounded py-1 px-2 w-max max-w-xs break-words ${className}`;
  }
}