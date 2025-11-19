/**
 * @file NPMBadge Types
 * @description Type definitions for NPMBadge component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 */

/**
 * Type options for NPMBadge
 */
export type NPMBadgeType = 'version' | 'downloads' | 'license' | 'size' | 'custom';

/**
 * Props interface for NPMBadge component
 * Single Responsibility: Define the contract for NPMBadge component
 */
export interface INPMBadgeProps {
  /**
   * Type of the NPM badge
   */
  type: NPMBadgeType;

  /**
   * Value to display in the badge
   */
  value: string;

  /**
   * Label for custom badge type
   * @default undefined
   */
  label?: string;

  /**
   * Hex color for custom badge
   * @default undefined
   */
  color?: string;

  /**
   * URL to link to when clicked
   * @default undefined
   */
  link?: string;

  /**
   * Additional CSS classes to apply to the component
   */
  class?: string;
}