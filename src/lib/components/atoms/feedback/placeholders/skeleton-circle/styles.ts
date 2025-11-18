/**
 * Style manager for SkeletonCircle component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class SkeletonCircleStyleManager {
  /**
   * Creates CSS class string for SkeletonCircle component
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the SkeletonCircle component
   */
  static generateClass(customClass?: string): string {
    const baseClass = 'rounded-full bg-[--color-bg-tertiary] animate-pulse';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }
}