import type { IFaviconStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing favicon styling logic
 */
export class FaviconStyleManager {
  static getImageClasses(className: string): string {
    return `inline-block object-contain ${className}`;
  }

  static getFallbackClasses(size: number, className: string): string {
    return `inline-flex items-center justify-center bg-gray-200 text-gray-700 rounded font-medium uppercase text-xs ${className}`;
  }

  static generateFaviconUrl(url?: string): string | null {
    if (!url) return null;

    try {
      const parsedUrl = new URL(url);
      const domain = parsedUrl.hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    } catch {
      return null;
    }
  }

  static getAllClasses(className: string): string {
    const baseClasses = this.getImageClasses(className);
    return `${baseClasses}`;
  }
}