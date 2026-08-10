import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSelectable as ISelectable } from '$stylist/control/interface/behavior/selectable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

import type { RecipeToggleGroupRootProps as BaseToggleGroupProps } from '$stylist/control/interface/recipe/toggle-group-root-props';

export interface RecipeToggleGroup
	extends ComputeIntersectAll<
		[
			BaseToggleGroupProps,
			ILabelSlot,
			IIconSlot,
			ISelectable<string[]>,
			IFocusable,
			ISizable
		]
	> {}
