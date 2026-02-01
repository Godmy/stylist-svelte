import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface ISpinnerProps
 * 
 * Defines the interface for Spinner component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of Spinner component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface ISpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Size of the spinner
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * Color variant of the spinner
   * @default 'primary'
   */
  variant?: 'primary' | 'white' | 'gray';
  
  /**
   * Accessible label for the spinner
   * @default 'Loading...'
   */
  label?: string;
  
  /**
   * Additional CSS classes to apply to the spinner
   */
  class?: string;
}

/**
 * @typedef SpinnerSize
 * 
 * Defines allowed spinner sizes
 */
export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * @typedef SpinnerVariant
 * 
 * Defines allowed spinner variants
 */
export type SpinnerVariant = 'primary' | 'white' | 'gray';

/**
 * Style manager for Spinner component
 * Follows the Single Responsibility Principle by managing only styling concerns
 * Uses CSS variables from the theme system
 */
export class SpinnerStyleManager {
  /**
   * Creates CSS class string for Spinner component container
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the Spinner component container
   */
  static generateContainerClass(customClass?: string): string {
    const baseClass = 'flex items-center justify-center';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for Spinner icon
   * @param size - The size of the spinner (sm, md, lg, xl)
   * @param variant - The color variant of the spinner (primary, white, gray)
   * @returns Combined CSS class string for the Spinner icon
   */
  static generateIconClass(size: 'sm' | 'md' | 'lg' | 'xl' = 'md', variant: 'primary' | 'white' | 'gray' = 'primary'): string {
    const sizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-8 w-8',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16'
    };

    const variantClasses = {
      primary: 'text-[--color-primary-600]',
      white: 'text-[--color-text-inverse]',
      gray: 'text-[--color-text-secondary]'
    };

    return `animate-spin ${sizeClasses[size]} ${variantClasses[variant]}`.trim();
  }

  /**
   * Creates CSS class string for the screen reader label
   * @returns CSS class string for the screen reader label
   */
  static generateLabelClass(): string {
    return 'sr-only';
  }
}

