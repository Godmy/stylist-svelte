/**
 * @file IconCircle Types
 * @description Type definitions for IconCircle component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 */

/**
 * Variant options for IconCircle
 */
export type IconCircleVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

/**
 * Size options for IconCircle
 */
export type IconCircleSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Props interface for IconCircle component
 * Single Responsibility: Define the contract for IconCircle component
 */
export interface IIconCircleProps {
  /**
   * Name of the icon to display (from icon pack)
   */
  icon: string;

  /**
   * Visual variant of the icon circle
   * @default 'primary'
   */
  variant?: IconCircleVariant;

  /**
   * Size of the icon circle
   * @default 'md'
   */
  size?: IconCircleSize;

  /**
   * Whether to use gradient background
   * @default false
   */
  gradient?: boolean;

  /**
   * Additional CSS classes to apply to the component
   */
  class?: string;
}