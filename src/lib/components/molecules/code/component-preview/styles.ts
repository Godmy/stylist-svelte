/**
 * @file ComponentPreview Style Manager
 * @description Style management for ComponentPreview component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles styling logic for ComponentPreview
 */

/**
 * Style manager for ComponentPreview component
 * Manages all class names and styling for the ComponentPreview molecule
 */
export class ComponentPreviewStyleManager {
  /**
   * Gets the base classes for the ComponentPreview component
   * @param className - Additional CSS classes to append
   * @returns Combined string of base and additional classes
   */
  static getBaseClasses(className?: string): string {
    const baseClasses = 'component-preview bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700';
    return className ? `${baseClasses} ${className}` : baseClasses;
  }

  /**
   * Gets the header classes for the ComponentPreview component
   * @returns Header classes
   */
  static getHeaderClasses(): string {
    return 'px-6 py-4 border-b border-gray-200 dark:border-gray-700';
  }

  /**
   * Gets the title classes for the ComponentPreview component
   * @returns Title classes
   */
  static getTitleClasses(): string {
    return 'text-lg font-bold text-gray-900 dark:text-white';
  }

  /**
   * Gets the description classes for the ComponentPreview component
   * @returns Description classes
   */
  static getDescriptionClasses(): string {
    return 'text-sm text-gray-600 dark:text-gray-300 mt-1';
  }

  /**
   * Gets the preview container classes for the ComponentPreview component
   * @returns Preview container classes
   */
  static getPreviewContainerClasses(): string {
    return 'p-6 border-b border-gray-200 dark:border-gray-700';
  }

  /**
   * Gets the demo container classes for the ComponentPreview component
   * @returns Demo container classes
   */
  static getDemoContainerClasses(): string {
    return 'flex items-center justify-center min-h-[100px] p-4 bg-gray-50 dark:bg-gray-900 rounded';
  }

  /**
   * Gets the code container classes for the ComponentPreview component
   * @returns Code container classes
   */
  static getCodeContainerClasses(): string {
    return 'p-0'; // Padding handled by code block
  }

  /**
   * Gets the tab container classes for the ComponentPreview component
   * @returns Tab container classes
   */
  static getTabContainerClasses(): string {
    return 'border-b border-gray-200 dark:border-gray-700';
  }

  /**
   * Gets the tab list classes for the ComponentPreview component
   * @returns Tab list classes
   */
  static getTabListClasses(): string {
    return 'flex -mb-px';
  }

  /**
   * Gets the tab button classes for the ComponentPreview component
   * @param isActive - Whether the tab is currently active
   * @returns Tab button classes
   */
  static getTabButtonClasses(isActive: boolean): string {
    const baseClasses = 'py-2 px-4 text-sm font-medium border-b-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-t-lg';
    const activeClasses = isActive 
      ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700' 
      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300';
    return `${baseClasses} ${activeClasses}`;
  }
}