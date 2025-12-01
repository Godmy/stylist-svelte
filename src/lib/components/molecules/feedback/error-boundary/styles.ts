import type { IErrorBoundaryProps } from './types';

/**
 * @class ErrorBoundaryStyleManager
 * @description Style manager for ErrorBoundary component following SOLID principles
 * Separates the styling concerns from the component logic (SRP)
 * Provides a centralized way to manage CSS classes based on props and theme
 */
export class ErrorBoundaryStyleManager {
  /**
   * Get base CSS classes for the error boundary container
   */
  static getBaseClasses(): string {
    return 'flex items-start p-6 rounded-lg border';
  }

  /**
   * Get CSS classes based on theme and props
   */
  static getThemedClasses(props?: Partial<IErrorBoundaryProps>): string {
    // Using CSS variables from the theme system
    return `${this.getBaseClasses()} 
      bg-[--color-background-danger-muted] 
      border-[--color-border-danger] 
      text-[--color-text-danger]`;
  }

  /**
   * Get content container classes
   */
  static getContentClasses(): string {
    return 'flex items-start';
  }

  /**
   * Get header classes
   */
  static getHeaderClasses(): string {
    return 'text-lg font-medium text-[--color-text-danger-strong]';
  }

  /**
   * Get body classes
   */
  static getBodyClasses(): string {
    return 'mt-2';
  }

  /**
   * Get footer classes
   */
  static getFooterClasses(): string {
    return 'mt-4';
  }

  /**
   * Get details container classes
   */
  static getDetailsClasses(): string {
    return 'mt-4';
  }

  /**
   * Get preformatted text classes for error details
   */
  static getDetailsTextClasses(): string {
    return 'mt-2 p-4 rounded text-sm overflow-auto bg-[--color-background-danger-subtle] text-[--color-text-danger]';
  }

  /**
   * Get icon classes
   */
  static getIconClasses(): string {
    return 'h-6 w-6 text-[--color-icon-danger]';
  }

  /**
   * Get summary element classes for details section
   */
  static getSummaryClasses(): string {
    return 'cursor-pointer text-[--color-text-danger] font-medium';
  }
}