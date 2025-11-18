import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface ISkeletonCircleProps
 * 
 * Defines the interface for SkeletonCircle component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of SkeletonCircle component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface ISkeletonCircleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Size of the circle in pixels
   * @default 40
   */
  size?: number;
  
  /**
   * Additional CSS classes to apply to the skeleton circle
   */
  class?: string;
  
  /**
   * Content to render inside the skeleton circle (optional)
   */
  content?: any;
}
