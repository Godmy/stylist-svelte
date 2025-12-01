import type { IResponseViewerStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing ResponseViewer styling logic
 * Uses CSS variables from the theme system
 */
export class ResponseViewerStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'response-viewer-base border rounded-lg overflow-hidden';

    return `${baseClasses} ${className}`;
  }

  static getContentClasses(): string {
    return 'response-content p-4 font-mono text-sm whitespace-pre-wrap max-h-96 overflow-auto';
  }

  static getJSONClasses(): string {
    return 'response-json text-green-700';
  }

  static getXMLClasses(): string {
    return 'response-xml text-blue-700';
  }

  static getTextClasses(): string {
    return 'response-text text-gray-700';
  }

  static getAllClasses(className: string): string {
    const baseClasses = this.getBaseClasses(className);
    const contentClasses = this.getContentClasses();

    return `${baseClasses} ${contentClasses}`;
  }
}