import type { SlotContent } from '$stylist/architecture/interface/slot/content';
import type { ContractFavicon } from '$stylist/media/interface/contract/favicon';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeFavicon
	extends ComputeIntersectAll<
		[
			ContractFavicon,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			BehaviorBorderToken,
			BehaviorTypography,
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