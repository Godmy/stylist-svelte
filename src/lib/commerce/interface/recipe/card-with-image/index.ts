import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge } from '$stylist/layout/interface/slot/badge';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotImage } from '$stylist/image/interface/slot/image';
import type { Snippet } from 'svelte';
export interface RecipeCardWithImage
	extends ComputeIntersectAll<
		[
			SlotTheme,
			SlotText,
			SlotText,
			SlotImage,
			SlotBadge,
			SlotIcon,
			HTMLAttributes<HTMLDivElement>
		]
	> {
	title?: string;
	subtitle?: string;
	description?: string;
	image?: string;
	imageClass?: string;
	footer?: Snippet;
	actions?: Snippet;
	headerClass?: string;
	bodyClass?: string;
	footerClass?: string;
	actionsClass?: string;
}
