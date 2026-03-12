import type { IDropZoneStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing DropZone styling logic
 * Uses CSS variables from the theme system
 */
export class DropZoneStyleManager {
  static getBaseClasses(isDragOver: boolean, disabled: boolean, hostClass: string): string {
    const baseClasses = 'c-drop-zone border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors';
    const dragOverClass = isDragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return `${baseClasses} ${dragOverClass} ${disabledClass} ${hostClass}`;
  }

  static getItemClasses(): string {
    return 'flex items-center justify-between p-3 bg-white border border-gray-200 rounded-md';
  }

  static getListClasses(): string {
    return 'space-y-2 max-h-60 overflow-y-auto';
  }

  static getButtonClasses(): string {
    return 'flex items-center justify-center';
  }

  static getAllClasses(isDragOver: boolean, disabled: boolean, hostClass: string): string {
    const baseClasses = this.getBaseClasses(isDragOver, disabled, hostClass);

    return baseClasses;
  }
}