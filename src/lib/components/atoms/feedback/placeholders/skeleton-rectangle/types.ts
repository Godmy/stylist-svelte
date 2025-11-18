import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface ISkeletonRectangleProps
 * 
 * Defines the interface for SkeletonRectangle component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of SkeletonRectangle component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface ISkeletonRectangleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Width of the rectangle in pixels
   * @default 120
   */
  width?: number;
  
  /**
   * Height of the rectangle in pixels
   * @default 80
   */
  height?: number;
  
  /**
   * Additional CSS classes to apply to the skeleton rectangle
   */
  class?: string;
  
  /**
   * Content to render inside the skeleton rectangle (optional)
   */
  content?: any;
}
