import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

/**
 * @interface IExpandableCardProps
 * @description Interface for ExpandableCard component props following SOLID principles
 * Separates the concerns of the component by defining all external contracts
 */
export interface IExpandableCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
  /**
   * Title of the expandable card
   */
  title: string;

  /**
   * Subtitle of the expandable card (optional)
   */
  subtitle?: string;

  /**
   * Summary content to display when collapsed
   */
  summary: Snippet;

  /**
   * Detailed content to display when expanded
   */
  details: Snippet;

  /**
   * Whether the card should be expanded by default
   * @default false
   */
  defaultExpanded?: boolean;

  /**
   * Whether the card is disabled (cannot be toggled)
   * @default false
   */
  disabled?: boolean;

  /**
   * Variant of the expandable card
   * @default 'default'
   */
  variant?: 'default' | 'minimal' | 'outlined' | 'filled';

  /**
   * Additional CSS classes for the main card container
   */
  class?: string;

  /**
   * Additional CSS classes for the header section
   */
  headerClass?: string;

  /**
   * Additional CSS classes for the summary section
   */
  summaryClass?: string;

  /**
   * Additional CSS classes for the details section
   */
  detailsClass?: string;

  /**
   * Additional CSS classes for the chevron icon
   */
  chevronClass?: string;
}