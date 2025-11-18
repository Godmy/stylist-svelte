/**
 * Style manager for Skeleton component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class SkeletonStyleManager {
  /**
   * Creates CSS class string for Skeleton component based on variant
   * @param variant - The skeleton variant (text, circular, rectangular)
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the Skeleton component
   */
  static generateClass(variant: 'text' | 'circular' | 'rectangular' = 'text', customClass?: string): string {
    const baseClass = 'animate-pulse bg-gray-200';
    
    const variantClasses = {
      text: 'rounded',
      circular: 'rounded-full',
      rectangular: 'rounded-md'
    };
    
    const variantClass = variantClasses[variant];
    
    return customClass ? `${baseClass} ${variantClass} ${customClass}`.trim() : `${baseClass} ${variantClass}`.trim();
  }
  
  /**
   * Gets the default height for the specified variant
   * @param variant - The skeleton variant
   * @returns Default height value
   */
  static getDefaultHeight(variant: 'text' | 'circular' | 'rectangular' = 'text'): string {
    const defaultHeights = {
      text: '1rem',
      circular: '2rem',
      rectangular: '4rem'
    };
    
    return defaultHeights[variant];
  }
}