/**
 * Style manager for PinInputDigit component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class PinInputDigitStyleManager {
  /**
   * Creates CSS class string for PinInputDigit component
   * @param focused - Whether the digit is focused
   * @param invalid - Whether the digit is invalid
   * @returns Combined CSS class string for the PinInputDigit component
   */
  static generateClass(focused: boolean = false, invalid: boolean = false): string {
    const baseClass = 'w-12 h-12 flex items-center justify-center border rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] transition-colors duration-200';
    
    if (invalid) {
      return `${baseClass} border-[--color-danger-500] bg-[--color-danger-50] text-[--color-danger-700]`.trim();
    } else if (focused) {
      return `${baseClass} border-[--color-primary-500] bg-[--color-bg-primary] text-[--color-text-primary]`.trim();
    } else {
      return `${baseClass} border-[--color-border-primary] bg-[--color-bg-primary] text-[--color-text-primary]`.trim();
    }
  }
}