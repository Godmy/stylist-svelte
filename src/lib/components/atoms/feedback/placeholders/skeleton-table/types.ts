import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface ITableSkeletonProps
 * 
 * Defines the interface for TableSkeleton component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of TableSkeleton component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface ITableSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Number of rows in the skeleton table
   * @default 5
   */
  rows?: number;
  
  /**
   * Number of columns in the skeleton table
   * @default 4
   */
  columns?: number;
  
  /**
   * Additional CSS classes to apply to the table skeleton
   */
  class?: string;
}
