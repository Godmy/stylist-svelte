import type { ToggleFilter } from '$stylist/commerce/type/struct/filter-bar/toggle-filter';
import type { TagFilter } from '$stylist/commerce/type/struct/filter-bar/tag-filter';
import type { RangeFilter } from '$stylist/commerce/type/struct/filter-bar/range-filter';

// FilterBar props interface
export interface SlotFilterBar {
	toggles?: ToggleFilter[];
	tags?: TagFilter[];
	range?: RangeFilter;
	onClear?: () => void;
	class?: string;
}
