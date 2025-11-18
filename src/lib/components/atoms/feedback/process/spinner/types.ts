import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface ISpinnerProps
 * 
 * Defines the interface for Spinner component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of Spinner component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface ISpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Size of the spinner
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * Color variant of the spinner
   * @default 'primary'
   */
  variant?: 'primary' | 'white' | 'gray';
  
  /**
   * Accessible label for the spinner
   * @default 'Loading...'
   */
  label?: string;
  
  /**
   * Additional CSS classes to apply to the spinner
   */
  class?: string;
}

/**
 * @typedef SpinnerSize
 * 
 * Defines allowed spinner sizes
 */
export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * @typedef SpinnerVariant
 * 
 * Defines allowed spinner variants
 */
export type SpinnerVariant = 'primary' | 'white' | 'gray';