import type { HTMLAttributes } from 'svelte/elements';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotChildren } from '$stylist/layout/interface/slot/children';

export interface RecipeBlockquote
	extends ComputeIntersectAll<
		[
			SlotTheme, 
			SlotChildren, 
			HTMLAttributes<HTMLQuoteElement>
		]
	> {
		cite?: string;
		citeUrl?: string;
		sourceLabel?: string;
		footerPrefix?: string;
		withBorder?: boolean;
		withBackground?: boolean;
	}
