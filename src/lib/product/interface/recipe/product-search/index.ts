import type { BehaviorProductSearchEvents } from '$stylist/product/interface/behavior/product-search-events';
import type { ContractProductSearch } from '$stylist/product/interface/contract/product-search';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeProductSearch
	extends ComputeIntersectAll<
		[
			ContractProductSearch,
			SlotTheme,
			SlotText,
			SlotIcon,
			BehaviorProductSearchEvents,
			HTMLAttributes<HTMLDivElement>
	]
	> {
	placeholder?: string;
}
