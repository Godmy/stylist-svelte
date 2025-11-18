import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface ITextareaProps
 *
 * Defines the interface for Textarea component properties based on SOLID principles.
 *
 * Single Responsibility Principle: This interface solely defines the structure of Textarea component props.
 * Open/Closed Principle: Extended through intersection with HTMLTextareaAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLTextareaAttributes type for dependency.
 */
export interface ITextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  /**
   * Unique identifier for the textarea field (required)
   */
  id: string;

  /**
   * Label text for the textarea field (required)
   */
  label: string;

  /**
   * Current value of the textarea (supports two-way binding)
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
   * Whether the textarea is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Placeholder text for the textarea
   */
  placeholder?: string;

  /**
   * Number of visible text lines for the control
   * @default 3
   */
  rows?: number;

  /**
   * Maximum number of characters allowed in the textarea
   */
  maxlength?: number;

  /**
   * Additional CSS classes to apply to the textarea container
   */
  class?: string;
}