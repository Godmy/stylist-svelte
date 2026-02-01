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

/**
 * Style manager for ProgressCircle component
 * Follows the Single Responsibility Principle by managing only styling concerns
 * Uses CSS variables from the theme system
 */
export class ProgressCircleStyleManager {
  /**
   * Creates CSS class string for ProgressCircle component
   * @param size - The size of the progress circle (sm, md, lg)
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the ProgressCircle component
   */
  static generateContainerClass(size: 'sm' | 'md' | 'lg' = 'md', customClass?: string): string {
    const sizeClasses = {
      sm: 'w-12 h-12 text-xs',
      md: 'w-16 h-16 text-sm',
      lg: 'w-24 h-24 text-base'
    };

    const baseClass = `relative inline-flex items-center justify-center ${sizeClasses[size]}`;

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the progress circle SVG element
   * @returns CSS class string for the SVG element
   */
  static generateSvgClass(): string {
    return 'h-full w-full';
  }

  /**
   * Creates CSS class string for the background circle
   * @returns CSS class string for the background circle
   */
  static generateBackgroundCircleClass(): string {
    return 'opacity-20 text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the progress circle
   * @param color - The color of the progress circle
   * @returns Combined CSS class string for the progress circle
   */
  static generateProgressCircleClass(color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray' = 'primary'): string {
    const colorClasses = {
      primary: 'text-[--color-primary-600]',
      secondary: 'text-[--color-secondary-600]',
      success: 'text-[--color-success-600]',
      warning: 'text-[--color-warning-600]',
      danger: 'text-[--color-danger-600]',
      info: 'text-[--color-primary-600]', // using primary as default for info
      gray: 'text-[--color-text-secondary]'
    };

    return `transition-all ease-out ${colorClasses[color]}`.trim();
  }

  /**
   * Creates CSS class string for the percentage label
   * @returns CSS class string for the percentage label
   */
  static generateLabelClass(): string {
    return 'absolute text-xs font-medium text-[--color-text-primary]';
  }
}

