/**
 * @file CategoryCard Style Manager
 * @description Style management for CategoryCard component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles styling logic for CategoryCard
 */

/**
 * Style manager for CategoryCard component
 * Manages all class names and styling for the CategoryCard molecule
 */
export class CategoryCardStyleManager {
  /**
   * Gets the base classes for the CategoryCard component
   * @param className - Additional CSS classes to append
   * @returns Combined string of base and additional classes
   */
  static getBaseClasses(className?: string): string {
    const baseClasses = 'category-card bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 cursor-pointer';
    return className ? `${baseClasses} ${className}` : baseClasses;
  }

  /**
   * Gets the link wrapper classes for the CategoryCard component
   * @returns Link wrapper classes
   */
  static getLinkWrapperClasses(): string {
    return 'block h-full p-6';
  }

  /**
   * Gets the header classes for the CategoryCard component
   * @returns Header classes
   */
  static getHeaderClasses(): string {
    return 'flex items-start justify-between mb-4';
  }

  /**
   * Gets the icon container classes for the CategoryCard component
   * @returns Icon container classes
   */
  static getIconContainerClasses(): string {
    return 'mr-4';
  }

  /**
   * Gets the content container classes for the CategoryCard component
   * @returns Content container classes
   */
  static getContentContainerClasses(): string {
    return 'flex-1 min-w-0';
  }

  /**
   * Gets the title classes for the CategoryCard component
   * @returns Title classes
   */
  static getTitleClasses(): string {
    return 'text-lg font-bold text-gray-900 dark:text-white truncate';
  }

  /**
   * Gets the count badge classes for the CategoryCard component
   * @returns Count badge classes
   */
  static getCountBadgeClasses(): string {
    return 'ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
  }

  /**
   * Gets the description classes for the CategoryCard component
   * @returns Description classes
   */
  static getDescriptionClasses(): string {
    return 'text-sm text-gray-600 dark:text-gray-300 mb-3';
  }

  /**
   * Gets the examples container classes for the CategoryCard component
   * @returns Examples container classes
   */
  static getExamplesContainerClasses(): string {
    return 'mt-3';
  }

  /**
   * Gets the examples title classes for the CategoryCard component
   * @returns Examples title classes
   */
  static getExamplesTitleClasses(): string {
    return 'text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1';
  }

  /**
   * Gets the examples list classes for the CategoryCard component
   * @returns Examples list classes
   */
  static getExamplesListClasses(): string {
    return 'flex flex-wrap gap-1';
  }

  /**
   * Gets the example item classes for the CategoryCard component
   * @returns Example item classes
   */
  static getExampleItemClasses(): string {
    return 'text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
  }
}