import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { BehaviorMotionPreset } from '$stylist/animation/interface/behavior/motion-preset';
import type { SlotTooltip } from '$stylist/information/interface/slot/tooltip';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized } from '$stylist/layout/interface/behavior/sized';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeTooltip
	extends ComputeIntersectAll<
		[
			SlotTooltip,
			HTMLAttributes<HTMLElement>,
			SlotChildren,
			SlotText,
			SlotText,
			BehaviorFocusable,
			BehaviorSized,
			BehaviorShapeable,
			BehaviorMotionPreset,
			SlotTheme,
			HTMLAttributes<HTMLDivElement>
		]
	> {}
