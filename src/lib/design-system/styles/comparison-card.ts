/**
 * @file ComparisonCard Style Manager
 * @description Style management for ComparisonCard component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 *
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles styling logic for ComparisonCard
 */

/**
 * Style manager for ComparisonCard component
 * Manages all class names and styling for the ComparisonCard molecule
 */
export class ComparisonCardStyleManager {
  /**
   * Gets the base classes for the ComparisonCard component
   * @param className - Additional CSS classes to append
   * @returns Combined string of base and additional classes
   */
  static getBaseClasses(className?: string): string {
    const baseClasses = 'comparison-card bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700';
    return className ? `${baseClasses} ${className}` : baseClasses;
  }

  /**
   * Gets the header classes for the ComparisonCard component
   * @returns Header classes
   */
  static getHeaderClasses(): string {
    return 'px-6 py-4 border-b border-gray-200 dark:border-gray-700';
  }

  /**
   * Gets the title classes for the ComparisonCard component
   * @returns Title classes
   */
  static getTitleClasses(): string {
    return 'text-lg font-bold text-gray-900 dark:text-white';
  }

  /**
   * Gets the comparison container classes for the ComparisonCard component
   * @returns Comparison container classes
   */
  static getComparisonContainerClasses(): string {
    return 'grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200 dark:divide-gray-700';
  }

  /**
   * Gets the section classes for the ComparisonCard component
   * @returns Section classes
   */
  static getSectionClasses(): string {
    return 'p-6';
  }

  /**
   * Gets the section title classes for the ComparisonCard component
   * @returns Section title classes
   */
  static getSectionTitleClasses(): string {
    return 'text-lg font-semibold mb-4 text-center';
  }

  /**
   * Gets the comparison list classes for the ComparisonCard component
   * @returns Comparison list classes
   */
  static getComparisonListClasses(): string {
    return 'space-y-3';
  }

  /**
   * Gets the comparison item classes for the ComparisonCard component
   * @returns Comparison item classes
   */
  static getComparisonItemClasses(): string {
    return 'flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-0';
  }

  /**
   * Gets the comparison label classes for the ComparisonCard component
   * @returns Comparison label classes
   */
  static getComparisonLabelClasses(): string {
    return 'text-sm font-medium text-gray-700 dark:text-gray-300';
  }

  /**
   * Gets the comparison value classes for the ComparisonCard component
   * @returns Comparison value classes
   */
  static getComparisonValueClasses(): string {
    return 'text-sm text-gray-900 dark:text-white font-medium';
  }

  /**
   * Gets the before section title classes for the ComparisonCard component
   * @returns Before section title classes
   */
  static getBeforeTitleClasses(): string {
    return 'text-lg font-semibold mb-4 text-center text-red-600 dark:text-red-400';
  }

  /**
   * Gets the after section title classes for the ComparisonCard component
   * @returns After section title classes
   */
  static getAfterTitleClasses(): string {
    return 'text-lg font-semibold mb-4 text-center text-green-600 dark:text-green-400';
  }
}