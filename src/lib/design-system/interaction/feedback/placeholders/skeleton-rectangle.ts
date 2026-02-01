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

/**
 * Style manager for SkeletonRectangle component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class SkeletonRectangleStyleManager {
  /**
   * Creates CSS class string for SkeletonRectangle component
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the SkeletonRectangle component
   */
  static generateClass(customClass?: string): string {
    const baseClass = 'bg-[--color-bg-tertiary] rounded-md animate-pulse';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }
}

