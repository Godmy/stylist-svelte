import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface IProgressBarProps
 * 
 * Defines the interface for ProgressBar component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of ProgressBar component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface IProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Current progress value
   */
  value: number;
  
  /**
   * Maximum value
   * @default 100
   */
  max?: number;
  
  /**
   * Text label to display with the progress bar
   */
  label?: string;
  
  /**
   * Whether to display the percentage value
   * @default true
   */
  showPercentage?: boolean;
  
  /**
   * Size of the progress bar
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Visual variant of the progress bar
   * @default 'primary'
   */
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  
  /**
   * Additional CSS classes to apply to the progress bar
   */
  class?: string;
}

/**
 * @typedef ProgressBarSize
 * 
 * Defines allowed progress bar sizes
 */
export type ProgressBarSize = 'sm' | 'md' | 'lg';

/**
 * @typedef ProgressBarVariant
 * 
 * Defines allowed progress bar variants
 */
export type ProgressBarVariant = 'primary' | 'success' | 'warning' | 'danger';