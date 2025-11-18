import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface ICharacterCountProps
 * 
 * Defines the interface for CharacterCount component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of CharacterCount component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface ICharacterCountProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Current number of characters
   * @default 0
   */
  current?: number;
  
  /**
   * Maximum number of characters
   * @default 100
   */
  max?: number;
  
  /**
   * Whether to show percentage
   * @default false
   */
  showPercentage?: boolean;
  
  /**
   * Additional CSS classes to apply to the character count
   */
  class?: string;
  
  /**
   * Content to render inside the character count (optional)
   */
  content?: any;
}