/**
 * Style manager for StepIcon component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class StepIconStyleManager {
  /**
   * Creates CSS class string for StepIcon component
   * @param status - The status of the step icon (pending, active, completed, error)
   * @param size - The size of the step icon (sm, md, lg)
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the StepIcon component
   */
  static generateClass(
    status: 'pending' | 'active' | 'completed' | 'error' = 'pending',
    size: 'sm' | 'md' | 'lg' = 'md',
    customClass?: string
  ): string {
    const baseClass = 'inline-flex items-center justify-center rounded-full font-medium';
    
    const statusClasses = {
      pending: 'bg-gray-200 text-gray-600 border-2 border-gray-200',
      active: 'bg-primary-500 text-white border-2 border-primary-500',
      completed: 'bg-green-500 text-white border-2 border-green-500',
      error: 'bg-red-500 text-white border-2 border-red-500'
    };
    
    const sizeClasses = {
      sm: 'w-6 h-6 text-xs',
      md: 'w-8 h-8 text-sm',
      lg: 'w-10 w-10 text-base'
    };
    
    const statusClass = statusClasses[status];
    const sizeClass = sizeClasses[size];
    
    return customClass ? `${baseClass} ${statusClass} ${sizeClass} ${customClass}`.trim() : `${baseClass} ${statusClass} ${sizeClass}`.trim();
  }
}