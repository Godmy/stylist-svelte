import type { IMapSelectorStyleClasses } from '$stylist/components/organisms/interaction/geo/map-selector/types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing MapSelector styling logic
 * Uses CSS variables from the theme system
 */
export class MapSelectorStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'c-map-selector flex flex-col';

    return `${baseClasses} ${className}`;
  }

  static getAllClasses(className: string): string {
    return this.getBaseClasses(className);
  }
}


