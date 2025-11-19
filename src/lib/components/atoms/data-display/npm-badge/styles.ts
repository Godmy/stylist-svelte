/**
 * @file NPMBadge Style Manager
 * @description Style management for NPMBadge component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles styling logic for NPMBadge
 */

/**
 * Style manager for NPMBadge component
 * Manages all class names and styling for the NPMBadge atom
 */
export class NPMBadgeStyleManager {
  /**
   * Gets the base classes for the NPMBadge component
   * @param type - Type of the NPM badge
   * @param className - Additional CSS classes to append
   * @returns Combined string of base and additional classes
   */
  static getBaseClasses(type: 'version' | 'downloads' | 'license' | 'size' | 'custom', className?: string): string {
    // Base classes for all badges
    const baseClasses = 'npm-badge inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    
    // Type-specific color classes
    const typeClasses = this.getTypeClasses(type);
    
    const allClasses = `${baseClasses} ${typeClasses}`;
    return className ? `${allClasses} ${className}` : allClasses;
  }

  /**
   * Gets the type-specific classes for the NPMBadge component
   * @param type - Type of the NPM badge
   * @returns Type-specific color classes
   */
  static getTypeClasses(type: 'version' | 'downloads' | 'license' | 'size' | 'custom'): string {
    switch (type) {
      case 'version':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'downloads':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'license':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'size':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'custom':
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  }

  /**
   * Gets the link wrapper classes for the NPMBadge component
   * @returns Link wrapper classes
   */
  static getLinkWrapperClasses(): string {
    return 'hover:opacity-80 transition-opacity duration-200';
  }
}