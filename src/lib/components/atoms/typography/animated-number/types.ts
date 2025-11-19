/**
 * @file AnimatedNumber Types
 * @description Type definitions for AnimatedNumber component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 */

/**
 * Animation easing options for AnimatedNumber
 */
export type AnimatedNumberEasing = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';

/**
 * Props interface for AnimatedNumber component
 * Single Responsibility: Define the contract for AnimatedNumber component
 */
export interface IAnimatedNumberProps {
  /**
   * The target value to animate to
   */
  value: number;

  /**
   * Duration of the animation in milliseconds
   * @default 2000
   */
  duration?: number;

  /**
   * Delay before the animation starts in milliseconds
   * @default 0
   */
  delay?: number;

  /**
   * Easing function for the animation
   * @default 'ease-out'
   */
  easing?: AnimatedNumberEasing;

  /**
   * Custom format function for the number display
   * @default n => n.toString()
   */
  format?: (n: number) => string;

  /**
   * Prefix string to display before the number (e.g. "$")
   * @default ''
   */
  prefix?: string;

  /**
   * Suffix string to display after the number (e.g. "+", "K")
   * @default ''
   */
  suffix?: string;

  /**
   * Separator for thousands (e.g. ",")
   * @default ','
   */
  separator?: string;

  /**
   * Number of decimal places to show
   * @default 0
   */
  decimals?: number;

  /**
   * Additional CSS classes to apply to the component
   */
  class?: string;
}