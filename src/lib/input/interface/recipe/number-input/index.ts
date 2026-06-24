import type { RecipeNumberInputProps as LegacyNumberInputProps1 } from '$stylist/input/interface/recipe/number-input-props';
import type { SlotNumberInput as Slot } from '$stylist/input/interface/slot/number-input';
import type { SlotNumberInput as SlotNumberInput } from '$stylist/input/interface/slot/number-input';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeNumberInput
	extends ComputeIntersectAll<
		[
			LegacyNumberInputProps1,
			Slot,
			SlotNumberInput,
			ILabelSlot,
			ICaptionSlot,
			IIconSlot,
			IFocusable,
			ISizable
		]
	> {}
