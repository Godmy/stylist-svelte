import type { SlotContent } from '$stylist/theme/interface/slot/content';
import type { ContractFavicon } from '$stylist/media/interface/contract/favicon';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeFavicon
	extends ComputeIntersectAll<
		[
			ContractFavicon,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
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