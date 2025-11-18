/**
 * Style manager for PasswordInput component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class PasswordInputStyleManager {
  /**
   * Creates CSS class string for PasswordInput container
   * @returns CSS class string for the PasswordInput container
   */
  static generateContainerClass(): string {
    return 'w-full relative';
  }
  
  /**
   * Creates CSS class string for PasswordInput element
   * @param error - Whether the input has an error
   * @returns Combined CSS class string for the PasswordInput element
   */
  static generateInputClass(error: boolean = false): string {
    const baseClass = 'w-full px-3 py-2 pr-10 border rounded-md shadow-sm focus:outline-none focus:ring-2';
    
    const errorClass = error
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500';
    
    return `${baseClass} ${errorClass}`.trim();
  }
  
  /**
   * Creates CSS class string for PasswordInput visibility toggle button
   * @returns CSS class string for the visibility toggle button
   */
  static generateToggleButtonClass(): string {
    return 'absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700';
  }
  
  /**
   * Creates CSS class string for PasswordInput help text
   * @param error - Whether the input has an error
   * @returns Combined CSS class string for the PasswordInput help text
   */
  static generateHelpTextClass(error: boolean = false): string {
    const baseClass = 'mt-2 text-sm';
    
    const errorClass = error
      ? 'text-red-600'
      : 'text-gray-500';
    
    return `${baseClass} ${errorClass}`.trim();
  }
}