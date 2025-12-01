import type { IQuoteRequestStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing QuoteRequest styling logic
 * Uses CSS variables from the theme system
 */
export class QuoteRequestStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'quote-request-base p-6 max-w-2xl mx-auto';

    return `${baseClasses} ${className}`;
  }

  static getFormClasses(): string {
    return 'quote-request-form space-y-6';
  }

  static getItemClasses(): string {
    return 'quote-item p-4 border rounded-lg mb-2';
  }

  static getAllClasses(className: string): string {
    return this.getBaseClasses(className);
  }
}