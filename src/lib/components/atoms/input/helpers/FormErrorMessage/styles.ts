/**
 * Style manager for FormErrorMessage component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class FormErrorMessageStyleManager {
  /**
   * Creates CSS class string for FormErrorMessage component
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the FormErrorMessage component
   */
  static generateClass(customClass?: string): string {
    const baseClass = 'mt-1 text-sm text-[--color-danger-600] dark:text-[--color-danger-400]';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }
}