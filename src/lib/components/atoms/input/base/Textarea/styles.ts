/**
 * Style manager for Textarea component
 * Follows the Single Responsibility Principle by managing only styling concerns
 * Uses CSS variables from the theme system
 */
export class TextareaStyleManager {
  /**
   * Creates CSS class string for Textarea container
   * @param className - Additional CSS classes to append
   * @returns CSS class string for the Textarea container
   */
  static generateContainerClass(className?: string): string {
    const baseClass = 'mb-[--spacing-md]';
    return className ? `${baseClass} ${className}` : baseClass;
  }

  /**
   * Creates CSS class string for Textarea label wrapper
   * @returns CSS class string for the Textarea label wrapper
   */
  static generateLabelWrapperClass(): string {
    return 'flex justify-between';
  }

  /**
   * Creates CSS class string for Textarea label
   * @returns CSS class string for the Textarea label
   */
  static generateLabelClass(): string {
    return 'block text-sm font-medium text-[--color-text-primary] mb-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for Textarea counter
   * @returns CSS class string for the Textarea counter
   */
  static generateCounterClass(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for Textarea element
   * @param hasError - Whether the textarea has errors
   * @param disabled - Whether the textarea is disabled
   * @returns Combined CSS class string for the Textarea element
   */
  static generateTextareaClass(hasError: boolean = false, disabled: boolean = false): string {
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
   * Creates CSS class string for Textarea error message
   * @returns CSS class string for the Textarea error message
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