import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge } from '$stylist/layout/interface/slot/badge';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotStatus } from '$stylist/ai/interface/slot/status';
import type { Snippet } from 'svelte';
export interface RecipeDataDisplayCard
	extends ComputeIntersectAll<
		[SlotTheme, SlotText, SlotText, SlotBadge, SlotStatus, HTMLAttributes<HTMLDivElement>]
	> {
	title?: string;
	subtitle?: string;
	description?: string;
	image?: string;
	footer?: Snippet;
	actions?: Snippet;
	imageClass?: string;
	headerClass?: string;
	bodyClass?: string;
	footerClass?: string;
	actionsClass?: string;
}
