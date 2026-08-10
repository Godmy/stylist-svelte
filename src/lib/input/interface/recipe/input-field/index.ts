import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

import type { HTMLAttributes } from 'svelte/elements';
import type { SlotInputBase as BaseInputFieldProps } from '$stylist/input/interface/slot/input-base';

export interface RecipeInputField
	extends ComputeIntersectAll<
		[
			BaseInputFieldProps,
			HTMLAttributes<HTMLInputElement>,
			{
				required?: boolean;
				requiredLabel?: string;
			},
			{
				label?: string;
				helperText?: string;
				error?: boolean;
				errorMessage?: string;
			},
			({
helperText?: string;
}),
			ILabelSlot,
			ICaptionSlot,
			IIconSlot,
			IStatusSlot,
			IFocusable,
			ISizable
		]
	> {
}
