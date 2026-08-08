import type { RecipeInputFieldProps } from '$stylist/input/interface/recipe/input-field-props';
import type { SlotInputField } from '$stylist/input/interface/slot/input-field';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

export interface RecipeInputField
	extends ComputeIntersectAll<
		[
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
			RecipeInputFieldProps,
			SlotInputField,
			ILabelSlot,
			ICaptionSlot,
			IIconSlot,
			IStatusSlot,
			IFocusable,
			ISizable
		]
	> {}
