import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { FeedbackSpecificProps } from '$stylist/control/interface/recipe/feedback-specific-props';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotStatus } from '$stylist/information/interface/slot/status';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorMotionPreset } from '$stylist/animation/interface/behavior/motion-preset';
import type { BehaviorShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized } from '$stylist/layout/interface/behavior/sized';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeFeedback
	extends ComputeIntersectAll<
			[
				SlotText,
				SlotStatus,
				SlotIcon,
				BehaviorClickable,
				BehaviorFocusable,
				BehaviorSized,
				BehaviorShapeable,
				BehaviorMotionPreset,
				SlotTheme,
				HTMLAttributes<HTMLDivElement>
			]
		>,
		FeedbackSpecificProps {}
