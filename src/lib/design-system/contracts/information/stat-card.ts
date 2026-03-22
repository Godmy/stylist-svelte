/**
 * @file StatCard Types
 * @description Type definitions for StatCard component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 */

import type { TokenTrend } from '$stylist/design-system/tokens/information/trend';
import type { TokenBackground } from '$stylist/design-system/tokens/information/background';

/**
 * Trend options for StatCard
 */
/**
 * Variant options for StatCard
 */
/**
 * Props interface for StatCard component
 * Single Responsibility: Define the contract for StatCard component
 */
export interface IStatCardProps {
  /**
   * Title of the statistic
   */
  title: string;

  /**
   * Value of the statistic (number or formatted string)
   */
  value: string | number;

  /**
   * Icon name or SVG to display with the stat
   * @default undefined
   */
  icon?: string;

  /**
   * Trend direction of the statistic
   * @default undefined
   */
  trend?: TokenTrend;

  /**
   * Value of the trend (e.g. "+12.5%")
   * @default undefined
   */
  trendValue?: string;

  /**
   * Description of the statistic
   * @default undefined
   */
  description?: string;

  /**
   * Visual variant of the stat card
   * @default 'default'
   */
  variant?: TokenBackground;

  /**
   * Whether to use animated number display
   * @default false
   */
  animated?: boolean;

  /**
   * Additional CSS classes to apply to the component
   */
  class?: string;
}




