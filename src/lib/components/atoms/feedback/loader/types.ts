import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface ILoaderProps
 * 
 * Defines the interface for Loader component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of Loader component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface ILoaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS classes to apply to the loader
   */
  class?: string;
}

/**
 * @typedef LoaderAccessibilityRole
 * 
 * Defines allowed accessibility roles for the loader component
 */
export type LoaderAccessibilityRole = 'status' | 'progressbar' | 'alert' | 'alertdialog';