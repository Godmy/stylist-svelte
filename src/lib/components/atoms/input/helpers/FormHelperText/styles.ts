/**
 * Style manager for FormHelperText component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class FormHelperTextStyleManager {
  /**
   * Creates CSS class string for FormHelperText component
   * @param variant - The variant of the helper text ('default' | 'info' | 'success' | 'warning' | 'danger')
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the FormHelperText component
   */
  static generateClass(variant: 'default' | 'info' | 'success' | 'warning' | 'danger' = 'default', customClass?: string): string {
    const variantClasses = {
      default: 'text-[--color-text-secondary]',
      info: 'text-[--color-primary-600] dark:text-[--color-primary-400]',
      success: 'text-[--color-success-600] dark:text-[--color-success-400]',
      warning: 'text-[--color-warning-600] dark:text-[--color-warning-400]',
      danger: 'text-[--color-danger-600] dark:text-[--color-danger-400]'
    };

    const baseClass = `mt-1 text-sm ${variantClasses[variant]}`;

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }
}