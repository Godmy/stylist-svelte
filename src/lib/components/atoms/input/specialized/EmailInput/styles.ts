/**
 * Style manager for EmailInput component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class EmailInputStyleManager {
  /**
   * Creates CSS class string for EmailInput container
   * @returns CSS class string for the EmailInput container
   */
  static generateContainerClass(): string {
    return 'w-full';
  }
  
  /**
   * Creates CSS class string for EmailInput element
   * @param error - Whether the input has an error
   * @returns Combined CSS class string for the EmailInput element
   */
  static generateInputClass(error: boolean = false): string {
    const baseClass = 'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2';
    
    const errorClass = error
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500';
    
    return `${baseClass} ${errorClass}`.trim();
  }
  
  /**
   * Creates CSS class string for EmailInput help text
   * @param error - Whether the input has an error
   * @returns Combined CSS class string for the EmailInput help text
   */
  static generateHelpTextClass(error: boolean = false): string {
    const baseClass = 'mt-2 text-sm';
    
    const errorClass = error
      ? 'text-red-600'
      : 'text-gray-500';
    
    return `${baseClass} ${errorClass}`.trim();
  }
}