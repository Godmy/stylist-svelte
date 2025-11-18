import type { HTMLInputAttributes } from 'svelte/elements';

/**
 * @interface IEmailInputProps
 * 
 * Defines the interface for EmailInput component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of EmailInput component props.
 * Open/Closed Principle: Extended through intersection with HTMLInputAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLInputAttributes type for dependency.
 */
export interface IEmailInputProps extends HTMLInputAttributes {
  /**
   * Current value of the email input (supports two-way binding)
   */
  value?: string;
  
  /**
   * Placeholder text for the email input
   * @default 'Введите email'
   */
  placeholder?: string;
  
  /**
   * Whether the email input is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the email input is required
   * @default false
   */
  required?: boolean;
  
  /**
   * Whether the email input has an error
   * @default false
   */
  error?: boolean;
  
  /**
   * Help text to display below the email input
   */
  helpText?: string;
  
  /**
   * Additional CSS classes to apply to the email input container
   */
  class?: string;
}