import type { SlotContent } from '$stylist/theme/interface/slot/content';
import type { ContractFavicon } from '$stylist/media/interface/contract/favicon';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { Snippet } from 'svelte';

export interface RecipeFavicon
	extends ComputeIntersectAll<
		[
			ContractFavicon,
			SlotThemeBorder,
			SlotTypography,
			SlotContent
		]
	> {
	size?: number;
	url?: string;
	error?: boolean;
	onError?: () => void;
	content?: Snippet;
	class?: string;
}
