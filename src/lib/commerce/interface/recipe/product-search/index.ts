import type { BehaviorProductSearchEvents } from '$stylist/commerce/interface/behavior/product-search-events';
import type { ContractProductSearch } from '$stylist/commerce/interface/contract/product-search';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeProductSearch
	extends ComputeIntersectAll<
		[
			ContractProductSearch,
			SlotTheme,
			ILabelSlot,
			IIconSlot,
			BehaviorProductSearchEvents,
			HTMLAttributes<HTMLDivElement>
		]
	> {
	placeholder?: string;
	onSearch?: (query: string) => void;
	suggestions?: string[];
	onSuggestionSelect?: (suggestion: string) => void;
}