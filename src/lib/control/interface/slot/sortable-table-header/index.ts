import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSortDirection } from '$stylist/interaction/type/record/sort-direction';

export interface SlotSortableTableHeader extends HTMLAttributes<HTMLTableHeaderCellElement> {
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
  currentSortDirection?: TokenSortDirection;
  
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
