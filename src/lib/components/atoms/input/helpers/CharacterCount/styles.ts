/**
 * Style manager for CharacterCount component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class CharacterCountStyleManager {
  /**
   * Creates CSS class string for CharacterCount component
   * @param ratio - The ratio of current to max characters (0-1)
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the CharacterCount component
   */
  static generateClass(ratio: number, customClass?: string): string {
    let colorClass = '';
    if (ratio > 0.9) {
      colorClass = 'text-[--color-danger-600] dark:text-[--color-danger-400]';
    } else if (ratio > 0.75) {
      colorClass = 'text-[--color-warning-600] dark:text-[--color-warning-400]';
    } else {
      colorClass = 'text-[--color-text-tertiary] dark:text-[--color-text-tertiary]';
    }
    
    const baseClass = 'text-sm';
    
    return customClass ? `${baseClass} ${colorClass} ${customClass}`.trim() : `${baseClass} ${colorClass}`.trim();
  }
}