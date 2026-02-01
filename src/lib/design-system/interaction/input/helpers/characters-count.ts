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

/**
 * Style manager for CharacterCount component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class CharacterCountStyleManager {
  /**
   * Creates CSS class string for CharacterCount component
   * @param ratio - The ratio of current to max characters (0-1)
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the CharacterCount component
   */
  static generateClass(ratio: number, customClass?: string): string {
    let colorClass = '';
    if (ratio > 0.9) {
      colorClass = 'text-[--color-danger-600] dark:text-[--color-danger-400]';
    } else if (ratio > 0.75) {
      colorClass = 'text-[--color-warning-600] dark:text-[--color-warning-400]';
    } else {
      colorClass = 'text-[--color-text-tertiary] dark:text-[--color-text-tertiary]';
    }
    
    const baseClass = 'text-sm';
    
    return customClass ? `${baseClass} ${colorClass} ${customClass}`.trim() : `${baseClass} ${colorClass}`.trim();
  }
}

