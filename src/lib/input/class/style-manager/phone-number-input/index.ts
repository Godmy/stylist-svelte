/**
 * Style manager for PhoneNumberInput component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class PhoneNumberInputStyleManager {
  /**
   * Creates CSS class string for PhoneNumberInput container
   * @returns CSS class string for the PhoneNumberInput container
   */
  static generateContainerClass(): string {
    return 'w-full';
  }
  
  /**
   * Creates CSS class string for PhoneNumberInput element
   * @param error - Whether the input has an error
   * @returns Combined CSS class string for the PhoneNumberInput element
   */
  static generateInputClass(error: boolean = false): string {
    const baseClass = 'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2';

    const errorClass = error
      ? 'border-[--color-danger-500] focus:ring-[--color-danger-500] focus:border-[--color-danger-500]'
      : 'border-[--color-border-secondary] focus:ring-[--color-primary-500] focus:border-[--color-primary-500]';

    return `${baseClass} ${errorClass}`.trim();
  }

  /**
   * Creates CSS class string for PhoneNumberInput help text
   * @param error - Whether the input has an error
   * @returns Combined CSS class string for the PhoneNumberInput help text
   */
  static generateHelpTextClass(error: boolean = false): string {
    const baseClass = 'mt-2 text-sm';

    const errorClass = error
      ? 'text-[--color-danger-600]'
      : 'text-[--color-text-secondary]';

    return `${baseClass} ${errorClass}`.trim();
  }
}

