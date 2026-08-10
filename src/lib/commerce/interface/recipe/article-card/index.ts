import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotImage as IMediaSlot } from '$stylist/image/interface/slot/image';
export interface RecipeArticleCard
	extends ComputeIntersectAll<
		[
			SlotTheme,
			ComputeIntersectAll<
				[ILabelSlot, ICaptionSlot, IMediaSlot, IBadgeSlot, IIconSlot, HTMLAttributes<HTMLElement>]
			>,
			SlotChildren
		]
	> {
	title?: string;
	subtitle?: string;
	image?: string;
	actions?: ({
label: string;
	onClick?: () => void;
})[];
}
