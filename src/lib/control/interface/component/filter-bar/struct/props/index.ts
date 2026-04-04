import type { Snippet } from 'svelte';
import type { ToggleFilter } from '$stylist/control/type/struct/filter-bar/toggle-filter';
import type { TagFilter } from '$stylist/control/type/struct/filter-bar/tag-filter';
import type { RangeFilter } from '$stylist/control/type/struct/filter-bar/range-filter';

// FilterBar props interface
export interface IFilterBarProps {
  toggles?: ToggleFilter[];
  tags?: TagFilter[];
  range?: RangeFilter;
  onClear?: () => void;
  class?: string;
  children?: Snippet;
}
