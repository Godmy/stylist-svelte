import type { NodeIconProps as LegacyNodeIconProps1 } from '$stylist/media/interface/recipe/node-icon-node-icon-props';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { BehaviorElevatable as IElevatable } from '$stylist/layout/interface/behavior/elevatable';
import type { BehaviorMotionPreset as IMotionToken } from '$stylist/animation/interface/behavior/motion-preset';

export interface RecipeNodeIcon
	extends ComputeIntersectAll<
		[
			LegacyNodeIconProps1,
			SlotTheme,
			IMediaSlot,
			ILabelSlot,
			ICaptionSlot,
			IClickable,
			IElevatable,
			IMotionToken,
			HTMLAttributes<HTMLDivElement>
		]
	> {
	size?: number;
}
