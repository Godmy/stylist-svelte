import type { HTMLAttributes } from 'svelte/elements';

export type SortDirection = 'asc' | 'desc' | null;

export interface SortableTableHeaderProps extends HTMLAttributes<HTMLTableHeaderCellElement> {
  /**
   * Title for the table header
   */
  title: string;
  
  /**
   * Key to sort by
   */
  sortKey?: string;
  
  /**
   * Current sort key
   */
  currentSortKey?: string;
  
  /**
   * Current sort direction
   * @default null
   */
  currentSortDirection?: SortDirection;
  
  /**
   * Additional CSS classes
   */
  class?: string;
  
  /**
   * Canonical callback fired when the header receives value input
   */
  onValueInput?: (key: string) => void;
  
  /**
   * Canonical callback fired when the header value is changed
   */
  onValueChange?: (key: string) => void;
}