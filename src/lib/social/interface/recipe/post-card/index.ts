import type { HTMLAttributes } from 'svelte/elements';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotMedia } from '$stylist/media/interface/slot/media';
import type { BehaviorPostCard } from '$stylist/social/interface/behavior/post-card';

export interface RecipePostCard
	extends ComputeIntersectAll<
		[
			SlotTheme,
			SlotText,
			SlotMedia,
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
	actions?: BehaviorPostCard[];
}
