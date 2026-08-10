import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/layout/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { LinkSpecificProps } from '$stylist/navigation/interface/recipe/link-specific-props';

import type { SlotLink as BaseLinkProps } from '$stylist/typography/interface/slot/link';

export interface RecipeLink
	extends ComputeIntersectAll<
		[
			Omit<BaseLinkProps, 'target'>,
			SlotTheme,
			ILabelSlot,
			IIconSlot,
			IClickable,
			IFocusable,
			ISizable
		]
	>,
		LinkSpecificProps {}
