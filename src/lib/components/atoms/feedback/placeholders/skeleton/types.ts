import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface ISkeletonProps
 * 
 * Defines the interface for Skeleton component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of Skeleton component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface ISkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Variant of the skeleton (text, circular, rectangular)
   * @default 'text'
   */
  variant?: 'text' | 'circular' | 'rectangular';
  
  /**
   * Width of the skeleton element
   * @default '100%'
   */
  width?: string;
  
  /**
   * Height of the skeleton element
   * @default '1rem' for text, '2rem' for circular, '4rem' for rectangular
   */
  height?: string;
  
  /**
   * Additional CSS classes to apply to the skeleton
   */
  class?: string;
}

/**
 * @typedef SkeletonVariant
 * 
 * Defines allowed skeleton variants
 */
export type SkeletonVariant = 'text' | 'circular' | 'rectangular';