/**
 * Style manager for Input component
 * Follows the Single Responsibility Principle by managing only styling concerns
 * Uses CSS variables from the theme system
 */
export class InputStyleManager {
  /**
   * Creates CSS class string for Input container
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the Input container
   */
  static generateContainerClass(customClass?: string): string {
    const baseClass = 'mb-[--spacing-md]';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for Input label
   * @returns CSS class string for the Input label
   */
  static generateLabelClass(): string {
    return 'block text-sm font-medium text-[--color-text-primary] mb-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for Input element
   * @param hasError - Whether the input has errors
   * @param disabled - Whether the input is disabled
   * @returns Combined CSS class string for the Input element
   */
  static generateInputClass(hasError: boolean = false, disabled: boolean = false): string {
    const baseClass = 'w-full px-3 py-2 border rounded-md shadow-sm';

    const errorClass = hasError
      ? 'border-[--color-danger-500] focus:ring-[--color-danger-500] focus:border-[--color-danger-500]'
      : 'border-[--color-border-primary] focus:ring-[--color-primary-500] focus:border-[--color-primary-500]';

    const disabledClass = disabled
      ? 'bg-[--color-background-secondary] cursor-not-allowed'
      : '';

    return `${baseClass} ${errorClass} ${disabledClass}`.trim();
  }

  /**
   * Creates CSS class string for Input error message
   * @returns CSS class string for the Input error message
   */
  static generateErrorClass(): string {
    return 'mt-[--spacing-xs] text-sm text-[--color-danger-600]';
  }

  /**
   * Creates CSS class string for required indicator
   * @returns CSS class string for the required indicator
   */
  static generateRequiredClass(): string {
    return 'text-[--color-danger-500]';
  }
}