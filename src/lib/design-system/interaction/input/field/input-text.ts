import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface IInputProps
 *
 * Defines the interface for Input component properties based on SOLID principles.
 *
 * Single Responsibility Principle: This interface solely defines the structure of Input component props.
 * Open/Closed Principle: Extended through intersection with HTMLInputAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLInputAttributes type for dependency.
 */
export interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Unique identifier for the input field (required)
   */
  id: string;
  
  /**
   * Label text for the input field (required)
   */
  label: string;
  
  /**
   * Input type ('text', 'email', 'password', etc.)
   * @default 'text'
   */
  type?: string;
  
  /**
   * Current value of the input (supports two-way binding)
   */
  value?: string;
  
  /**
   * Array of error messages to display
   */
  errors?: string[];
  
  /**
   * Whether the field is required
   * @default false
   */
  required?: boolean;
  
  /**
   * Whether the input is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Placeholder text for the input
   */
  placeholder?: string;
  
  /**
   * Minimum value for numeric inputs
   */
  min?: number;
  
  /**
   * Maximum value for numeric inputs
   */
  max?: number;
  
  /**
   * Step increment for numeric inputs
   */
  step?: number;
  
  /**
   * Additional CSS classes to apply to the input container
   */
  class?: string;

  /**
   * Name attribute for the input field (for form submissions)
   */
  name?: string;
}

/**
 * Style manager for Input component
 * Follows the Single Responsibility Principle by managing only styling concerns
 * Uses CSS variables from the theme system
 */
export class InputStyleManager {
  /**
   * Creates CSS class string for Input container
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the Input container
   */
  static generateContainerClass(customClass?: string): string {
    const baseClass = 'mb-[--spacing-md]';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for Input label
   * @returns CSS class string for the Input label
   */
  static generateLabelClass(): string {
    return 'block text-sm font-medium text-[--color-text-primary] mb-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for Input element
   * @param hasError - Whether the input has errors
   * @param disabled - Whether the input is disabled
   * @returns Combined CSS class string for the Input element
   */
  static generateInputClass(hasError: boolean = false, disabled: boolean = false): string {
    const baseClass = 'w-full px-3 py-2 border rounded-md shadow-sm';

    const errorClass = hasError
      ? 'border-[--color-danger-500] focus:ring-[--color-danger-500] focus:border-[--color-danger-500]'
      : 'border-[--color-border-primary] focus:ring-[--color-primary-500] focus:border-[--color-primary-500]';

    const disabledClass = disabled
      ? 'bg-[--color-background-secondary] cursor-not-allowed'
      : '';

    return `${baseClass} ${errorClass} ${disabledClass}`.trim();
  }

  /**
   * Creates CSS class string for Input error message
   * @returns CSS class string for the Input error message
   */
  static generateErrorClass(): string {
    return 'mt-[--spacing-xs] text-sm text-[--color-danger-600]';
  }

  /**
   * Creates CSS class string for required indicator
   * @returns CSS class string for the required indicator
   */
  static generateRequiredClass(): string {
    return 'text-[--color-danger-500]';
  }
}

