import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

import type { HTMLAttributes } from 'svelte/elements';
import type { SlotTextarea as BaseTextAreaProps } from '$stylist/input/interface/slot/textarea';

export interface RecipeTextArea
	extends ComputeIntersectAll<
		[
			BaseTextAreaProps,
			HTMLAttributes<HTMLTextAreaElement>,
			ILabelSlot,
			ICaptionSlot,
			IIconSlot,
			IFocusable,
			ISizable
		]
	> {}
