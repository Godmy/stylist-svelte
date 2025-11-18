import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface IPinInputDigitProps
 * 
 * Defines the interface for PinInputDigit component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of PinInputDigit component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface IPinInputDigitProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Current value of the digit
   * @default ''
   */
  value?: string;
  
  /**
   * Whether the digit is focused
   * @default false
   */
  focused?: boolean;
  
  /**
   * Whether the digit is invalid
   * @default false
   */
  invalid?: boolean;
}