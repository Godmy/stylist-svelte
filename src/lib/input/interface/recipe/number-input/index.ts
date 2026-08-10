import type { SlotNumberInput } from '$stylist/input/interface/slot/number-input';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeNumberInput
	extends ComputeIntersectAll<
		[
			SlotNumberInput,
			HTMLAttributes<HTMLInputElement>,
			ILabelSlot,
			ICaptionSlot,
			IIconSlot,
			IFocusable,
			Omit<ISizable, 'size'>
		]
	> {}
