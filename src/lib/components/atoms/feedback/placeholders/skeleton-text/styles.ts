/**
 * Style manager for SkeletonText component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class SkeletonTextStyleManager {
  /**
   * Creates CSS class string for SkeletonText component
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the SkeletonText component
   */
  static generateClass(customClass?: string): string {
    const baseClass = 'h-4 bg-[--color-bg-tertiary] rounded-md animate-pulse';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }
}