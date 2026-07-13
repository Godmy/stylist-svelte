import type { InputFieldRequiredProps } from '$stylist/input/type/struct/input-field-required-props';
import type { InputFieldBaseProps } from '$stylist/input/type/struct/input-field-base-props';
import type { RecipeInputFieldProps } from '$stylist/input/interface/recipe/input-field-props';
import type { SlotInputField } from '$stylist/input/interface/slot/input-field';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

export interface RecipeInputField
	extends ComputeIntersectAll<
		[
			InputFieldRequiredProps,
			InputFieldBaseProps,
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
