import type { HTMLAttributes } from 'svelte/elements';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotImage } from '$stylist/image/interface/slot/image';
export interface RecipePostCard
	extends ComputeIntersectAll<
		[
			SlotTheme,
			SlotText,
			SlotImage,
			SlotBadge,
			SlotIcon,
			SlotChildren,
			HTMLAttributes<HTMLElement>
		]
	> {
	title?: string;
	subtitle?: string;
	image?: string;
	date?: string;
	excerpt?: string;
	author?: string;
	tags?: string[];
	actions?: {
label: string;
	onClick?: () => void;
}[];
}
