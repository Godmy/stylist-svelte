import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { ContainerProps } from '$stylist/layout/type/struct/container/container-props';
import type { RecipeBorder } from '$stylist/layout/interface/recipe/border';
import type { RecipeThemeBackground } from '$stylist/layout/interface/recipe/background';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeButtonComposed
	extends ComputeIntersectAll<
		[
			ComputeIntersectAll<
				[
					ILabelSlot,
					IIconSlot,
					IBadgeSlot,
					IClickable,
					IFocusable,
					ISized,
					IShapeable,
					ContainerProps,
					RecipeThemeBackground,
					RecipeBorder,
					HTMLButtonAttributes
				]
			>,
			SlotChildren
		]
	> {
	loadingLabel?: string;
	block?: boolean;
}
