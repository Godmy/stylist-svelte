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