/**
 * @file StatCard Style Manager
 * @description Style management for StatCard component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles styling logic for StatCard
 */

/**
 * Style manager for StatCard component
 * Manages all class names and styling for the StatCard molecule
 */
export class StatCardStyleManager {
  /**
   * Gets the base classes for the StatCard component
   * @param variant - Visual variant of the stat card
   * @param className - Additional CSS classes to append
   * @returns Combined string of base and additional classes
   */
  static getBaseClasses(variant: 'default' | 'gradient' = 'default', className?: string): string {
    const baseClasses = 'stat-card bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700';
    
    const variantClasses = this.getVariantClasses(variant);
    
    const allClasses = `${baseClasses} ${variantClasses}`;
    return className ? `${allClasses} ${className}` : allClasses;
  }

  /**
   * Gets the variant-specific classes for the StatCard component
   * @param variant - Visual variant of the stat card
   * @returns Variant-specific classes
   */
  static getVariantClasses(variant: 'default' | 'gradient'): string {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20';
      case 'default':
      default:
        return '';
    }
  }

  /**
   * Gets the icon container classes for the StatCard component
   * @returns Icon container classes
   */
  static getIconContainerClasses(): string {
    return 'mb-4';
  }

  /**
   * Gets the title classes for the StatCard component
   * @returns Title classes
   */
  static getTitleClasses(): string {
    return 'stat-card-title text-sm font-medium text-gray-500 dark:text-gray-400 mb-1';
  }

  /**
   * Gets the value classes for the StatCard component
   * @returns Value classes
   */
  static getValueClasses(): string {
    return 'stat-card-value text-2xl font-bold text-gray-900 dark:text-white';
  }

  /**
   * Gets the trend container classes for the StatCard component
   * @returns Trend container classes
   */
  static getTrendContainerClasses(): string {
    return 'flex items-center mt-1';
  }

  /**
   * Gets the trend text classes for the StatCard component
   * @param trend - Trend direction
   * @returns Trend text classes
   */
  static getTrendTextClasses(trend?: 'up' | 'down' | 'neutral'): string {
    const baseClasses = 'text-xs font-medium';
    
    switch (trend) {
      case 'up':
        return `${baseClasses} text-green-600 dark:text-green-400`;
      case 'down':
        return `${baseClasses} text-red-600 dark:text-red-400`;
      case 'neutral':
      default:
        return `${baseClasses} text-gray-500 dark:text-gray-400`;
    }
  }

  /**
   * Gets the trend icon classes for the StatCard component
   * @param trend - Trend direction
   * @returns Trend icon classes
   */
  static getTrendIconClasses(trend?: 'up' | 'down' | 'neutral'): string {
    const baseClasses = 'w-3 h-3 mr-1';
    
    switch (trend) {
      case 'up':
        return `${baseClasses} text-green-600 dark:text-green-400`;
      case 'down':
        return `${baseClasses} text-red-600 dark:text-red-400`;
      case 'neutral':
      default:
        return `${baseClasses} text-gray-500 dark:text-gray-400`;
    }
  }

  /**
   * Gets the description classes for the StatCard component
   * @returns Description classes
   */
  static getDescriptionClasses(): string {
    return 'stat-card-description text-xs text-gray-500 dark:text-gray-400 mt-2';
  }
}