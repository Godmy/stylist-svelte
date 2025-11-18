import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface IProgressCircleProps
 * 
 * Defines the interface for ProgressCircle component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of ProgressCircle component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface IProgressCircleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Progress percentage (0-100)
   * @default 0
   */
  progress?: number;
  
  /**
   * Size of the progress circle
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Color variant of the progress circle
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
  
  /**
   * Width of the progress circle stroke
   * @default 8
   */
  strokeWidth?: number;
  
  /**
   * Additional CSS classes to apply to the progress circle
   */
  class?: string;
}

/**
 * @typedef ProgressCircleSize
 * 
 * Defines allowed progress circle sizes
 */
export type ProgressCircleSize = 'sm' | 'md' | 'lg';

/**
 * @typedef ProgressCircleColor
 * 
 * Defines allowed progress circle colors
 */
export type ProgressCircleColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';