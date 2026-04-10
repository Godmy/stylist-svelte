import type { ToggleFilter } from '../filter-bar/toggle-filter';
import type { TagFilter } from '../filter-bar/tag-filter';
import type { RangeFilter } from '../filter-bar/range-filter';

export type FilterBarProps = {
	toggles?: ToggleFilter[];
	tags?: TagFilter[];
	range?: RangeFilter;
	onClear?: () => void;
	class?: string;
};
