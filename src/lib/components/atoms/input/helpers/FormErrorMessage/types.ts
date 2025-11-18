import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface IFormErrorMessageProps
 * 
 * Defines the interface for FormErrorMessage component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of FormErrorMessage component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface IFormErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Error text
   * @default ''
   */
  text?: string;
  
  /**
   * Whether to show the error
   * @default true
   */
  visible?: boolean;
  
  /**
   * Additional CSS classes to apply to the error message
   */
  class?: string;
  
  /**
   * Content to render inside the error message (optional)
   */
  content?: any;
}