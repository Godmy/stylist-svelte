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