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

/**
 * Style manager for SkeletonCircle component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class SkeletonCircleStyleManager {
  /**
   * Creates CSS class string for SkeletonCircle component
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the SkeletonCircle component
   */
  static generateClass(customClass?: string): string {
    const baseClass = 'rounded-full bg-[--color-bg-tertiary] animate-pulse';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }
}

