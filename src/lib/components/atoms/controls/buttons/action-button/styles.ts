/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing action button styling logic
 * Uses CSS variables from the theme system
 */
export class ActionButtonStyleManager {
  /**
   * Creates CSS class string for the button
   * @param variant - Button variant
   * @param size - Button size
   * @param disabled - Whether the button is disabled
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the button
   */
  static getButtonClass(
    variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default' = 'default',
    size: 'sm' | 'md' | 'lg' = 'md',
    disabled: boolean = false,
    customClass: string = ''
  ): string {
    const baseClass = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variantClasses: Record<string, string> = {
      primary: 'bg-[--color-primary-500] hover:bg-[--color-primary-600] text-[--color-text-inverse]',
      secondary: 'bg-[--color-secondary-500] hover:bg-[--color-secondary-600] text-[--color-text-inverse]',
      success: 'bg-[--color-success-500] hover:bg-[--color-success-600] text-[--color-text-inverse]',
      warning: 'bg-[--color-warning-500] hover:bg-[--color-warning-600] text-[--color-text-inverse]',
      danger: 'bg-[--color-danger-500] hover:bg-[--color-danger-600] text-[--color-text-inverse]',
      default: 'bg-[--color-background-secondary] hover:bg-[--color-background-tertiary] text-[--color-text-primary]'
    };
    
    const sizeClasses: Record<string, string> = {
      sm: 'px-[--spacing-sm] py-[--spacing-xs] text-sm',
      md: 'px-[--spacing-md] py-[--spacing-sm] text-base',
      lg: 'px-[--spacing-lg] py-[--spacing-md] text-lg'
    };
    
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    
    return [baseClass, variantClasses[variant], sizeClasses[size], disabledClass, customClass]
      .filter(Boolean)
      .join(' ');
  }
}