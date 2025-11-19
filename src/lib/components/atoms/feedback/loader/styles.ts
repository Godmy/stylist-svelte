/**
 * Style manager for Loader component
 * Follows the Single Responsibility Principle by managing only styling concerns
 * Uses CSS variables from the theme system
 */
export class LoaderStyleManager {
  /**
   * Creates CSS class string for Loader component
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the Loader component
   */
  static generateClass(customClass?: string): string {
    const baseClass = 'inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[--color-primary-500] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }
}