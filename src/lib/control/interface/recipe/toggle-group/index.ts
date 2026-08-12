import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/control/interface/behavior/selectable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { RecipeToggleGroupRootProps } from '$stylist/control/interface/recipe/toggle-group-root-props';
export interface RecipeToggleGroup
	extends ComputeIntersectAll<
		[
			RecipeToggleGroupRootProps,
			SlotText,
			SlotIcon,
			BehaviorSelectable<string[]>,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {}
