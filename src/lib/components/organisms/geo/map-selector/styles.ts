import type { IMapSelectorStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing MapSelector styling logic
 * Uses CSS variables from the theme system
 */
export class MapSelectorStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'map-selector-base flex flex-col';

    return `${baseClasses} ${className}`;
  }

  static getAllClasses(className: string): string {
    return this.getBaseClasses(className);
  }
}