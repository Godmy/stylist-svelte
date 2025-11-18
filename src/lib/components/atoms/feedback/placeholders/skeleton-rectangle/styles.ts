/**
 * Style manager for SkeletonRectangle component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class SkeletonRectangleStyleManager {
  /**
   * Creates CSS class string for SkeletonRectangle component
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the SkeletonRectangle component
   */
  static generateClass(customClass?: string): string {
    const baseClass = 'bg-[--color-bg-tertiary] rounded-md animate-pulse';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }
}