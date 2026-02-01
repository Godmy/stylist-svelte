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

/**
 * Style manager for TableSkeleton component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class TableSkeletonStyleManager {
  /**
   * Creates CSS class string for TableSkeleton component
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the TableSkeleton component
   */
  static generateClass(customClass?: string): string {
    const baseClass = 'overflow-x-auto';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }
  
  /**
   * Creates CSS class string for the table element
   * @returns CSS class string for the table element
   */
  static generateTableClass(): string {
    return 'min-w-full divide-y divide-gray-200';
  }
  
  /**
   * Creates CSS class string for the table header
   * @returns CSS class string for the table header
   */
  static generateHeaderClass(): string {
    return 'bg-gray-50';
  }
  
  /**
   * Creates CSS class string for table header cells
   * @returns CSS class string for table header cells
   */
  static generateHeaderCellClass(): string {
    return 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider';
  }
  
  /**
   * Creates CSS class string for the table body
   * @returns CSS class string for the table body
   */
  static generateBodyClass(): string {
    return 'bg-white divide-y divide-gray-200';
  }
  
  /**
   * Creates CSS class string for table data cells
   * @returns CSS class string for table data cells
   */
  static generateDataCellClass(): string {
    return 'px-6 py-4 whitespace-nowrap';
  }
}

