/**
 * Style manager for Textarea component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class TextareaStyleManager {
  /**
   * Creates CSS class string for Textarea container
   * @param className - Additional CSS classes to append
   * @returns CSS class string for the Textarea container
   */
  static generateContainerClass(className?: string): string {
    const baseClass = 'mb-4';
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
    return 'block text-sm font-medium text-gray-700 mb-1';
  }
  
  /**
   * Creates CSS class string for Textarea counter
   * @returns CSS class string for the Textarea counter
   */
  static generateCounterClass(): string {
    return 'text-sm text-gray-500';
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
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500';
    
    const disabledClass = disabled 
      ? 'bg-gray-100 cursor-not-allowed' 
      : '';
    
    return `${baseClass} ${errorClass} ${disabledClass}`.trim();
  }
  
  /**
   * Creates CSS class string for Textarea error message
   * @returns CSS class string for the Textarea error message
   */
  static generateErrorClass(): string {
    return 'mt-1 text-sm text-red-600';
  }
  
  /**
   * Creates CSS class string for required indicator
   * @returns CSS class string for the required indicator
   */
  static generateRequiredClass(): string {
    return 'text-red-500';
  }
}