import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TableSpecificProps } from '$stylist/table/interface/recipe/table-specific-props';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable as ISelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorScrollable as IScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeTable
	extends ComputeIntersectAll<
			[
				ILabelSlot,
				IIconSlot,
				ISelectable<string | string[]>,
				IClickable,
				IFocusable,
				ISized,
				IShapeable,
				ISpaced,
				IScrollable,
				SlotTheme,
				HTMLAttributes<HTMLTableElement>
			]
		>,
		TableSpecificProps {}
