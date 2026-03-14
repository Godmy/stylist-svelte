import type { IDropZoneStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing DropZone styling logic
 * Uses CSS variables from the theme system
 */
export class DropZoneStyleManager {
  static getBaseClasses(isDragOver: boolean, disabled: boolean, hostClass: string): string {
    const baseClasses = 'c-drop-zone border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors';
    const dragOverClass = isDragOver ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]' : 'border-[var(--color-border-primary)] hover:border-[var(--color-border-primary)]';
    const disabledClass = disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : '';

    return `${baseClasses} ${dragOverClass} ${disabledClass} ${hostClass}`;
  }

  static getItemClasses(): string {
    return 'flex items-center justify-between p-3 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-md';
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




