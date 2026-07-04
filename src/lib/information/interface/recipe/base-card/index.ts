import type { BaseCardProps as LegacyBaseCardProps1 } from '$stylist/information/type/struct/base-card-props';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';

export interface RecipeBaseCard
	extends ComputeIntersectAll<
		[
			LegacyBaseCardProps1,
			SlotTheme,
			ComputeIntersectAll<
				[
					LegacyBaseCardProps1,
					ILabelSlot,
					ICaptionSlot,
					IMediaSlot,
					IBadgeSlot,
					HTMLAttributes<HTMLDivElement>
				]
			>,
			SlotChildren
		]
	> {
	title?: string;
	description?: string;
	variant?: string;
	size?: TokenSize;
	disabled?: boolean;
	headerClass?: string;
	bodyClass?: string;
}
