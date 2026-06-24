import type { BehaviorProductSearchEvents } from '$stylist/commerce/interface/behavior/product-search-events';
import type { ContractProductSearch } from '$stylist/commerce/interface/contract/product-search';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
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
