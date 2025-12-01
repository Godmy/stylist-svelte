import type { IMapWithMarkersStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing MapWithMarkers styling logic
 * Uses CSS variables from the theme system
 */
export class MapWithMarkersStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'map-with-markers-base relative w-full h-96';

    return `${baseClasses} ${className}`;
  }

  static getMapClasses(): string {
    return 'map-container w-full h-full rounded-lg border';
  }

  static getMarkerClasses(): string {
    return 'marker absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer';
  }

  static getAllClasses(className: string): string {
    return this.getBaseClasses(className);
  }
}