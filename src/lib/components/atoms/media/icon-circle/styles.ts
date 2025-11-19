/**
 * @file IconCircle Style Manager
 * @description Style management for IconCircle component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles styling logic for IconCircle
 */

/**
 * Style manager for IconCircle component
 * Manages all class names and styling for the IconCircle atom
 */
export class IconCircleStyleManager {
  /**
   * Gets the base classes for the IconCircle component
   * @param variant - Visual variant of the icon circle
   * @param size - Size of the icon circle
   * @param gradient - Whether to use gradient background
   * @param className - Additional CSS classes to append
   * @returns Combined string of base and additional classes
   */
  static getBaseClasses(
    variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' = 'primary',
    size: 'sm' | 'md' | 'lg' | 'xl' = 'md',
    gradient: boolean = false,
    className?: string
  ): string {
    // Base classes
    const baseClasses = 'icon-circle flex items-center justify-center rounded-full';
    
    // Size classes
    const sizeClasses = this.getSizeClasses(size);
    
    // Variant classes
    const variantClasses = this.getVariantClasses(variant, gradient);
    
    const allClasses = `${baseClasses} ${sizeClasses} ${variantClasses}`;
    return className ? `${allClasses} ${className}` : allClasses;
  }

  /**
   * Gets the size-specific classes for the IconCircle component
   * @param size - Size of the icon circle
   * @returns Size-specific classes
   */
  static getSizeClasses(size: 'sm' | 'md' | 'lg' | 'xl'): string {
    switch (size) {
      case 'sm':
        return 'w-8 h-8 text-xs';
      case 'lg':
        return 'w-16 h-16 text-lg';
      case 'xl':
        return 'w-20 h-20 text-xl';
      case 'md':
      default:
        return 'w-12 h-12 text-base';
    }
  }

  /**
   * Gets the variant-specific classes for the IconCircle component
   * @param variant - Visual variant of the icon circle
   * @param gradient - Whether to use gradient background
   * @returns Variant-specific classes
   */
  static getVariantClasses(
    variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info',
    gradient: boolean
  ): string {
    if (gradient) {
      // Return gradient classes based on variant
      switch (variant) {
        case 'primary':
          return 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white';
        case 'secondary':
          return 'bg-gradient-to-r from-gray-500 to-gray-700 text-white';
        case 'success':
          return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white';
        case 'warning':
          return 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white';
        case 'danger':
          return 'bg-gradient-to-r from-red-500 to-rose-600 text-white';
        case 'info':
          return 'bg-gradient-to-r from-cyan-500 to-sky-600 text-white';
        default:
          return 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white';
      }
    } else {
      // Return solid color classes based on variant
      switch (variant) {
        case 'primary':
          return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
        case 'secondary':
          return 'bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400';
        case 'success':
          return 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400';
        case 'warning':
          return 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400';
        case 'danger':
          return 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400';
        case 'info':
          return 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400';
        default:
          return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
      }
    }
  }
}