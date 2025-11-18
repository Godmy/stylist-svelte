import type { ICountryFlagStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing country flag styling logic
 */
export class CountryFlagStyleManager {
  static getBaseClasses(): string {
    return 'inline-block text-center align-middle';
  }

  static getFallbackClasses(): string {
    return 'inline-flex items-center justify-center bg-gray-200 text-gray-700 rounded font-medium uppercase';
  }

  static generateFlagStyle(size: number, isFallback: boolean): string {
    const baseSize = isFallback ? size : size;
    return `width: ${baseSize}px; height: ${baseSize}px; font-size: ${size}px; line-height: ${size}px;`;
  }

  static getAllClasses(className: string): string {
    const baseClasses = this.getBaseClasses();
    return `${baseClasses} ${className}`;
  }
}