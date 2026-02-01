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

/**
 * Style manager for ProgressBar component
 * Follows the Single Responsibility Principle by managing only styling concerns
 * Uses CSS variables from the theme system
 */
export class ProgressBarStyleManager {
  /**
   * Creates CSS class string for ProgressBar container
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the ProgressBar container
   */
  static generateContainerClass(customClass?: string): string {
    return customClass ? customClass : '';
  }

  /**
   * Creates CSS class string for ProgressBar label wrapper
   * @returns CSS class string for the ProgressBar label wrapper
   */
  static generateLabelWrapperClass(): string {
    return 'flex justify-between items-center mb-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for ProgressBar labels
   * @returns CSS class string for the ProgressBar labels
   */
  static generateLabelClass(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for ProgressBar background track
   * @param size - The size of the progress bar (sm, md, lg)
   * @returns Combined CSS class string for the ProgressBar background track
   */
  static generateTrackClass(size: 'sm' | 'md' | 'lg' = 'md'): string {
    const sizeClasses = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
    };

    return `w-full bg-[--color-background-tertiary] rounded-full ${sizeClasses[size]} overflow-hidden`.trim();
  }

  /**
   * Creates CSS class string for ProgressBar fill
   * @param size - The size of the progress bar (sm, md, lg)
   * @param variant - The color variant of the progress bar (primary, success, warning, danger)
   * @returns Combined CSS class string for the ProgressBar fill
   */
  static generateFillClass(size: 'sm' | 'md' | 'lg' = 'md', variant: 'primary' | 'success' | 'warning' | 'danger' = 'primary'): string {
    const sizeClasses = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
    };

    const variantClasses = {
      primary: 'bg-[--color-primary-600]',
      success: 'bg-[--color-success-600]',
      warning: 'bg-[--color-warning-600]',
      danger: 'bg-[--color-danger-600]'
    };

    return `${sizeClasses[size]} ${variantClasses[variant]} rounded-full transition-all duration-300 ease-in-out`.trim();
  }
}

