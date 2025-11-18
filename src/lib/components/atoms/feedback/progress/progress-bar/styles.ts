/**
 * Style manager for ProgressBar component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class ProgressBarStyleManager {
  /**
   * Creates CSS class string for ProgressBar container
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the ProgressBar container
   */
  static generateContainerClass(customClass?: string): string {
    return customClass ? customClass : '';
  }
  
  /**
   * Creates CSS class string for ProgressBar label wrapper
   * @returns CSS class string for the ProgressBar label wrapper
   */
  static generateLabelWrapperClass(): string {
    return 'flex justify-between items-center mb-1';
  }
  
  /**
   * Creates CSS class string for ProgressBar labels
   * @returns CSS class string for the ProgressBar labels
   */
  static generateLabelClass(): string {
    return 'text-sm font-medium text-gray-700';
  }
  
  /**
   * Creates CSS class string for ProgressBar background track
   * @param size - The size of the progress bar (sm, md, lg)
   * @returns Combined CSS class string for the ProgressBar background track
   */
  static generateTrackClass(size: 'sm' | 'md' | 'lg' = 'md'): string {
    const sizeClasses = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
    };
    
    return `w-full bg-gray-200 rounded-full ${sizeClasses[size]} overflow-hidden`.trim();
  }
  
  /**
   * Creates CSS class string for ProgressBar fill
   * @param size - The size of the progress bar (sm, md, lg)
   * @param variant - The color variant of the progress bar (primary, success, warning, danger)
   * @returns Combined CSS class string for the ProgressBar fill
   */
  static generateFillClass(size: 'sm' | 'md' | 'lg' = 'md', variant: 'primary' | 'success' | 'warning' | 'danger' = 'primary'): string {
    const sizeClasses = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
    };

    const variantClasses = {
      primary: 'bg-indigo-600',
      success: 'bg-green-600',
      warning: 'bg-yellow-600',
      danger: 'bg-red-600'
    };
    
    return `${sizeClasses[size]} ${variantClasses[variant]} rounded-full transition-all duration-300 ease-in-out`.trim();
  }
}