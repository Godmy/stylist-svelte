import type { IZipViewerStyleClasses } from '$stylist/interaction/organism/controls/files/zip-viewer/types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing ZipViewer styling logic
 * Uses CSS variables from the theme system
 */
export class ZipViewerStyleManager {
  static getBaseClasses(hostClass: string): string {
    const baseClasses = 'c-zip-viewer border rounded-lg overflow-hidden';

    return `${baseClasses} ${hostClass}`;
  }

  static getHeaderClasses(headerClass: string): string {
    return `p-4 bg-[var(--color-background-secondary)] border-b ${headerClass}`;
  }

  static getEntryClasses(isDirectory: boolean, entryClass: string): string {
    const baseClasses = 'flex items-center p-3 hover:bg-[var(--color-background-secondary)]';
    const dirClass = isDirectory ? 'bg-[var(--color-background-secondary)]' : '';

    return `${baseClasses} ${dirClass} ${entryClass}`;
  }

  static getSearchClasses(): string {
    return 'block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm';
  }

  static getIconClasses(type: string): string {
    return `h-5 w-5 mr-3 ${type === 'directory' ? 'text-[var(--color-primary-500)]' : 'text-[var(--color-text-secondary)]'}`;
  }

  static getExpandedClasses(): string {
    return 'expanded';
  }

  static getCollapsedClasses(): string {
    return 'collapsed';
  }

  static getAllClasses(hostClass: string, headerClass: string, entryClass: string): string {
    const baseClasses = this.getBaseClasses(hostClass);
    const headerClasses = this.getHeaderClasses(headerClass);
    const entryClasses = this.getEntryClasses(false, entryClass);

    return `${baseClasses} ${headerClasses} ${entryClasses}`;
  }
}




