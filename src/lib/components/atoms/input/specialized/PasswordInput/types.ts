import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface IPasswordInputProps
 *
 * Defines the interface for PasswordInput component properties based on SOLID principles.
 *
 * Single Responsibility Principle: This interface solely defines the structure of PasswordInput component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface IPasswordInputProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Current value of the password input (supports two-way binding)
   */
  value?: string;

  /**
   * Placeholder text for the password input
   * @default 'Введите пароль'
   */
  placeholder?: string;

  /**
   * Whether the password input is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the password input is required
   * @default false
   */
  required?: boolean;

  /**
   * Whether the password input has an error
   * @default false
   */
  error?: boolean;

  /**
   * Help text to display below the password input
   */
  helpText?: string;

  /**
   * Additional CSS classes to apply to the password input container
   */
  class?: string;
}