import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotSearchBar as BaseSearchBarProps } from '$stylist/form/interface/slot/search-bar';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeSearchBarProps
	extends ComputeIntersectAll<
		[BaseSearchBarProps, HTMLAttributes<HTMLDivElement>, SlotInteraction]
	> {}
