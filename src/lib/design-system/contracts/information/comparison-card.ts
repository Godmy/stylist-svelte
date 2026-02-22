/**
 * @file ComparisonCard Types
 * @description Type definitions for ComparisonCard component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 */

/**
 * Interface for comparison items
 */
export interface IComparisonItem {
  /**
   * Label for the comparison item
   */
  label: string;

  /**
   * Value for the comparison item
   */
  value: string;
}

/**
 * Interface for before/after comparison data
 */
export interface IComparisonData {
  /**
   * Title for the before section
   */
  title: string;

  /**
   * Array of comparison items for this section
   */
  items: IComparisonItem[];
}

/**
 * Props interface for ComparisonCard component
 * Single Responsibility: Define the contract for ComparisonCard component
 */
export interface IComparisonCardProps {
  /**
   * Data for the before comparison
   */
  before: IComparisonData;

  /**
   * Data for the after comparison
   */
  after: IComparisonData;

  /**
   * Title of the comparison card
   * @default 'Before vs After'
   */
  title?: string;

  /**
   * Additional CSS classes to apply to the component
   */
  class?: string;
}