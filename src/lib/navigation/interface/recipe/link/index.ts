import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorClickable } from '$stylist/layout/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { LinkSpecificProps } from '$stylist/navigation/interface/recipe/link-specific-props';
import type { SlotLink } from '$stylist/typography/interface/slot/link';
export interface RecipeLink
	extends ComputeIntersectAll<
		[
			Omit<SlotLink, 'target'>,
			SlotTheme,
			SlotText,
			SlotIcon,
			BehaviorClickable,
			BehaviorFocusable,
			BehaviorSizable
		]
	>,
		LinkSpecificProps {}
