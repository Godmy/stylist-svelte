/**
 * Form Components Style Manager
 * Provides consistent styling for form-related components
 */

export class FormStyleManager {
  /**
   * Get base classes for form container
   */
  static container(base: string, className?: string): string {
    return `${base} space-y-6 ${className || ''}`.trim();
  }

  /**
   * Get classes for form group
   */
  static group(base: string, className?: string): string {
    return `${base} space-y-4 ${className || ''}`.trim();
  }

  /**
   * Get classes for form field
   */
  static field(base: string, className?: string): string {
    return `${base} space-y-2 ${className || ''}`.trim();
  }

  /**
   * Get classes for form label
   */
  static label(base: string, required?: boolean, className?: string): string {
    const requiredClass = required ? ' after:content-["*"] after:text-[--color-danger-500] after:ml-1' : '';
    return `${base} block text-sm font-medium${requiredClass} ${className || ''}`.trim();
  }

  /**
   * Get classes for form input
   */
  static input(base: string, error?: boolean, disabled?: boolean, className?: string): string {
    const errorClass = error ? 'border-[--color-danger-500] focus:border-[--color-danger-500] focus:ring-[--color-danger-200]' : 'border-[--color-border-secondary] focus:border-[--color-primary-500] focus:ring-[--color-primary-200]';
    const disabledClass = disabled ? 'bg-[--color-background-secondary] cursor-not-allowed opacity-[var(--opacity-60)]' : 'bg-[--color-background-primary]';
    return `${base} ${errorClass} ${disabledClass} border rounded-md px-3 py-2 w-full transition-colors ${className || ''}`.trim();
  }

  /**
   * Get classes for form error message
   */
  static error(base: string, className?: string): string {
    return `${base} text-sm text-[--color-danger-600] ${className || ''}`.trim();
  }

  /**
   * Get classes for form hint
   */
  static hint(base: string, className?: string): string {
    return `${base} text-sm text-[--color-text-secondary] ${className || ''}`.trim();
  }

  /**
   * Get classes for form actions
   */
  static actions(base: string, className?: string): string {
    return `${base} flex items-center justify-end gap-4 pt-4 ${className || ''}`.trim();
  }
}
