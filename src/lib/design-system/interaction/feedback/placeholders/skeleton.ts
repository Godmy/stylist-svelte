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

/**
 * Style manager for Skeleton component
 * Follows the Single Responsibility Principle by managing only styling concerns
 * Uses CSS variables from the theme system
 */
export class SkeletonStyleManager {
  /**
   * Creates CSS class string for Skeleton component based on variant
   * @param variant - The skeleton variant (text, circular, rectangular)
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the Skeleton component
   */
  static generateClass(variant: 'text' | 'circular' | 'rectangular' = 'text', customClass?: string): string {
    const baseClass = 'animate-pulse bg-[--color-background-tertiary]';

    const variantClasses = {
      text: 'rounded',
      circular: 'rounded-full',
      rectangular: 'rounded-md'
    };

    const variantClass = variantClasses[variant];

    return customClass ? `${baseClass} ${variantClass} ${customClass}`.trim() : `${baseClass} ${variantClass}`.trim();
  }

  /**
   * Gets the default height for the specified variant
   * @param variant - The skeleton variant
   * @returns Default height value
   */
  static getDefaultHeight(variant: 'text' | 'circular' | 'rectangular' = 'text'): string {
    const defaultHeights = {
      text: '1rem',
      circular: '2rem',
      rectangular: '4rem'
    };

    return defaultHeights[variant];
  }
}

