import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface IFormHelperTextProps
 * 
 * Defines the interface for FormHelperText component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of FormHelperText component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface IFormHelperTextProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Helper text
   * @default ''
   */
  text?: string;
  
  /**
   * Variant of the helper text
   * @default 'default'
   */
  variant?: 'default' | 'info' | 'success' | 'warning' | 'danger';
  
  /**
   * Additional CSS classes to apply to the helper text
   */
  class?: string;
  
  /**
   * Content to render inside the helper text (optional)
   */
  content?: any;
}

/**
 * @typedef FormHelperTextVariant
 * 
 * Defines allowed helper text variants
 */
export type FormHelperTextVariant = 'default' | 'info' | 'success' | 'warning' | 'danger';

/**
 * Style manager for FormHelperText component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class FormHelperTextStyleManager {
  /**
   * Creates CSS class string for FormHelperText component
   * @param variant - The variant of the helper text ('default' | 'info' | 'success' | 'warning' | 'danger')
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the FormHelperText component
   */
  static generateClass(variant: 'default' | 'info' | 'success' | 'warning' | 'danger' = 'default', customClass?: string): string {
    const variantClasses = {
      default: 'text-[--color-text-secondary]',
      info: 'text-[--color-primary-600] dark:text-[--color-primary-400]',
      success: 'text-[--color-success-600] dark:text-[--color-success-400]',
      warning: 'text-[--color-warning-600] dark:text-[--color-warning-400]',
      danger: 'text-[--color-danger-600] dark:text-[--color-danger-400]'
    };

    const baseClass = `mt-1 text-sm ${variantClasses[variant]}`;

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }
}

