import type { IMediaLibraryStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing MediaLibrary styling logic
 * Uses CSS variables from the theme system
 */
export class MediaLibraryStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'media-library-base flex flex-col';

    return `${baseClasses} ${className}`;
  }

  static getGridClasses(): string {
    return 'media-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4';
  }

  static getItemClasses(): string {
    return 'media-item rounded-lg overflow-hidden border bg-white hover:shadow-md transition-shadow';
  }

  static getUploadClasses(): string {
    return 'media-upload border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50';
  }

  static getAllClasses(className: string): string {
    return this.getBaseClasses(className);
  }
}