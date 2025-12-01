import type { IResourceOptimizerStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing ResourceOptimizer styling logic
 * Uses CSS variables from the theme system
 */
export class ResourceOptimizerStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'resource-optimizer-base p-4';

    return `${baseClasses} ${className}`;
  }

  static getResourceClasses(): string {
    return 'resource-item flex justify-between items-center p-3 border-b';
  }

  static getUsageClasses(): string {
    return 'usage-bar w-full bg-gray-200 rounded-full h-2.5';
  }

  static getOptimizedClass(isOptimized: boolean): string {
    return isOptimized ? 'resource-optimized text-green-600' : 'resource-not-optimized text-red-600';
  }

  static getAllClasses(className: string, isOptimized: boolean): string {
    const baseClasses = this.getBaseClasses(className);
    const optimizedClass = this.getOptimizedClass(isOptimized);

    return `${baseClasses} ${optimizedClass}`;
  }
}