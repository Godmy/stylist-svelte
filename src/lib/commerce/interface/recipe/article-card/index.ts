import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { ArticleCardAction } from '$stylist/commerce/interface/slot/article-card-action';

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
	actions?: ArticleCardAction[];
}
