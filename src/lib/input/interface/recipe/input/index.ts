import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { InputSpecificProps } from '$stylist/input/type/struct/input-specific-props';

export interface RecipeInput
	extends ComputeIntersectAll<
			[
				SlotTheme,
				ILabelSlot,
				ICaptionSlot,
				IIconSlot,
				IStatusSlot,
				IFocusable,
				ISizable,
				HTMLAttributes<HTMLInputElement>
			]
		>,
		InputSpecificProps {}
