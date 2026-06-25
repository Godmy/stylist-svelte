import type { CardProps as LegacyCardProps1 } from '$stylist/layout/type/struct/layout-extended/card-props';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorElevatable as IElevatable } from '$stylist/layout/interface/behavior/elevatable';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeCard
	extends ComputeIntersectAll<
		[
			LegacyCardProps1,
			ICaptionSlot,
			IMediaSlot,
			IStatusSlot,
			IClickable,
			ISized,
			IShapeable,
			ISpaced,
			IElevatable,
			SlotTheme,
			HTMLAttributes<HTMLDivElement>
		]
	> {}
