/**
 * Style manager for StepConnector component
 * Follows the Single Responsibility Principle by managing only styling concerns
 * Uses CSS variables from the theme system
 */
export class StepConnectorStyleManager {
  /**
   * Creates CSS class string for StepConnector component
   * @param status - The status of the step connector (pending, active, completed, error)
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the StepConnector component
   */
  static generateClass(status: 'pending' | 'active' | 'completed' | 'error' = 'pending', customClass?: string): string {
    const baseClass = 'h-px flex-grow';

    const statusClasses = {
      pending: 'bg-[--color-background-tertiary]',
      active: 'bg-[--color-primary-500]',
      completed: 'bg-[--color-success-500]',
      error: 'bg-[--color-danger-500]'
    };

    const statusClass = statusClasses[status];

    return customClass ? `${baseClass} ${statusClass} ${customClass}`.trim() : `${baseClass} ${statusClass}`.trim();
  }
}