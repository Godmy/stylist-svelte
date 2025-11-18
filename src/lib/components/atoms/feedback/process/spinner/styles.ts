/**
 * Style manager for Spinner component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class SpinnerStyleManager {
  /**
   * Creates CSS class string for Spinner component container
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the Spinner component container
   */
  static generateContainerClass(customClass?: string): string {
    const baseClass = 'flex items-center justify-center';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }
  
  /**
   * Creates CSS class string for Spinner icon
   * @param size - The size of the spinner (sm, md, lg, xl)
   * @param variant - The color variant of the spinner (primary, white, gray)
   * @returns Combined CSS class string for the Spinner icon
   */
  static generateIconClass(size: 'sm' | 'md' | 'lg' | 'xl' = 'md', variant: 'primary' | 'white' | 'gray' = 'primary'): string {
    const sizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-8 w-8',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16'
    };

    const variantClasses = {
      primary: 'text-indigo-600',
      white: 'text-white',
      gray: 'text-gray-600'
    };
    
    return `animate-spin ${sizeClasses[size]} ${variantClasses[variant]}`.trim();
  }
  
  /**
   * Creates CSS class string for the screen reader label
   * @returns CSS class string for the screen reader label
   */
  static generateLabelClass(): string {
    return 'sr-only';
  }
}