/**
 * @file CategoryCard Types
 * @description Type definitions for CategoryCard component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 */

/**
 * Props interface for CategoryCard component
 * Single Responsibility: Define the contract for CategoryCard component
 */
export interface ICategoryCardProps {
  /**
   * Title of the category
   */
  title: string;

  /**
   * Icon name or identifier for the category
   */
  icon: string;

  /**
   * Number of items in the category
   */
  count: number;

  /**
   * Description of the category
   */
  description: string;

  /**
   * Link to navigate to when the card is clicked
   */
  link: string;

  /**
   * Array of example component names in this category
   * @default []
   */
  examples?: string[];

  /**
   * Additional CSS classes to apply to the component
   */
  class?: string;
}