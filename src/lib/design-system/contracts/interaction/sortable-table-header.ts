import type { HTMLAttributes } from 'svelte/elements';
import type { SortDirection } from '../../tokens/interaction/sort-directions';

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
   * @default 'none'
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

// Presets moved from presets\sortable-table-header.ts

export const sortableTableHeaderPresets: Record<string, Partial<SortableTableHeaderProps>> = {
  default: {
    title: 'Column',
    currentSortDirection: 'none'
  },
  ascending: {
    title: 'Column',
    currentSortDirection: 'asc'
  },
  descending: {
    title: 'Column',
    currentSortDirection: 'desc'
  }
};
