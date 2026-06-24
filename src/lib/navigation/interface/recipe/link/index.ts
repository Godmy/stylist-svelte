import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { LinkSpecificProps } from '$stylist/navigation/interface/recipe/link-specific-props';

export interface RecipeLink
	extends ComputeIntersectAll<
			[
				SlotTheme,
				ILabelSlot,
				IIconSlot,
				IClickable,
				IFocusable,
				ISizable,
				HTMLAttributes<HTMLAnchorElement>
			]
		>,
		LinkSpecificProps {}
