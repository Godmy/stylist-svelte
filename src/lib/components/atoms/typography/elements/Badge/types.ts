/**
 * @interface IBadgeProps
 *
 * Defines the interface for Badge component properties based on SOLID principles.
 *
 * Single Responsibility Principle: This interface solely defines the structure of Badge component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
import type { HTMLAttributes } from 'svelte/elements';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface IBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The variant of the badge (affects color and style)
   * @default 'default'
   */
  variant?: BadgeVariant;

  /**
   * The size of the badge
   * @default 'md'
   */
  size?: BadgeSize;

  /**
   * Additional CSS classes to apply to the badge
   */
  class?: string;
}

/**
 * @typedef {IBadgeProps & { variant?: BadgeVariant; size?: BadgeSize; }} BadgeProps
 * 
 * Combines the base Badge props with specific variant and size options.
 */
export type BadgeProps = IBadgeProps & {
  variant?: BadgeVariant;
  size?: BadgeSize;
};