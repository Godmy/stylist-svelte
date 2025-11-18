import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface IPhoneNumberInputProps
 *
 * Defines the interface for PhoneNumberInput component properties based on SOLID principles.
 *
 * Single Responsibility Principle: This interface solely defines the structure of PhoneNumberInput component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface IPhoneNumberInputProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Current value of the phone number input (supports two-way binding)
   */
  value?: string;
  
  /**
   * Placeholder text for the phone number input
   * @default '+7 (___) ___-__-__'
   */
  placeholder?: string;
  
  /**
   * Whether the phone number input is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the phone number input is required
   * @default false
   */
  required?: boolean;
  
  /**
   * Whether the phone number input has an error
   * @default false
   */
  error?: boolean;
  
  /**
   * Help text to display below the phone number input
   */
  helpText?: string;
  
  /**
   * Additional CSS classes to apply to the phone number input container
   */
  class?: string;
}