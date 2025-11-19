/**
 * Style manager for StepIcon component
 * Follows the Single Responsibility Principle by managing only styling concerns
 * Uses CSS variables from the theme system
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
    const baseClass = 'inline-flex items-center justify-center rounded-full font-medium border-2';

    const statusClasses = {
      pending: 'bg-[--color-background-tertiary] text-[--color-text-secondary] border-[--color-background-tertiary]',
      active: 'bg-[--color-primary-500] text-[--color-text-inverse] border-[--color-primary-500]',
      completed: 'bg-[--color-success-500] text-[--color-text-inverse] border-[--color-success-500]',
      error: 'bg-[--color-danger-500] text-[--color-text-inverse] border-[--color-danger-500]'
    };

    const sizeClasses = {
      sm: 'w-6 h-6 text-xs',
      md: 'w-8 h-8 text-sm',
      lg: 'w-10 h-10 text-base'
    };

    const statusClass = statusClasses[status];
    const sizeClass = sizeClasses[size];

    return customClass ? `${baseClass} ${statusClass} ${sizeClass} ${customClass}`.trim() : `${baseClass} ${statusClass} ${sizeClass}`.trim();
  }
}