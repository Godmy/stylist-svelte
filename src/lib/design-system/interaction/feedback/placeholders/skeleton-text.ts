import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface ISkeletonTextProps
 * 
 * Defines the interface for SkeletonText component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of SkeletonText component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface ISkeletonTextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Width of the text skeleton (in percentage or pixels)
   * @default '100%'
   */
  width?: string;
  
  /**
   * Additional CSS classes to apply to the skeleton text
   */
  class?: string;
  
  /**
   * Content to render inside the skeleton text (optional)
   */
  content?: any;
}

/**
 * Style manager for SkeletonText component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class SkeletonTextStyleManager {
  /**
   * Creates CSS class string for SkeletonText component
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the SkeletonText component
   */
  static generateClass(customClass?: string): string {
    const baseClass = 'h-4 bg-[--color-bg-tertiary] rounded-md animate-pulse';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }
}

