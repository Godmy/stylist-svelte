import type { HTMLAttributes } from 'svelte/elements';
import type { SlotSearchBar as BaseSearchBarProps } from '$stylist/search/interface/slot/search-bar';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeSearchBarProps
	extends ComputeIntersectAll<[BaseSearchBarProps, HTMLAttributes<HTMLDivElement>]> {}
