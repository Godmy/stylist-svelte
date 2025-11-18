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
