import type { IExportPanelStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing ExportPanel styling logic
 * Uses CSS variables from the theme system
 */
export class ExportPanelStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'c-export-panel flex flex-col gap-4 p-4 bg-white border border-[--color-border-default] rounded-lg min-w-[300px]';

    return `${baseClasses} ${className}`;
  }

  static getHeaderClasses(): string {
    return 'panel-header font-semibold text-lg text-[--color-text-primary] mb-2';
  }

  static getSectionClasses(): string {
    return 'panel-section flex flex-col gap-2';
  }

  static getTitleClasses(): string {
    return 'section-title font-medium text-sm text-[--color-text-secondary]';
  }

  static getOptionsClasses(): string {
    return 'format-options flex gap-2 flex-wrap';
  }

  static getOptionClasses(isActive: boolean): string {
    const baseClasses = 'format-option flex-1 text-center p-2 border border-[--color-border-default] rounded cursor-pointer transition-all';
    const activeClasses = isActive 
      ? 'bg-[--color-primary-100] border-[--color-primary-500] text-[--color-primary-700]' 
      : 'hover:bg-[--color-background-secondary]';

    return `${baseClasses} ${activeClasses}`;
  }

  static getCheckboxClasses(): string {
    return 'checkbox-group flex items-center gap-2';
  }

  static getAllClasses(className: string, isActive: boolean): string {
    const baseClasses = this.getBaseClasses(className);
    const optionClasses = this.getOptionClasses(isActive);

    return `${baseClasses} ${optionClasses}`;
  }
}