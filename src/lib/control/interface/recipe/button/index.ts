import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotButtonAttributesBase } from '$stylist/control/interface/slot/button-attributes-base';
import type { SlotButtonControl } from '$stylist/control/interface/slot/button-control';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { RecipeBorder } from '$stylist/layout/interface/recipe/border';
import type { RecipeThemeBackground } from '$stylist/layout/interface/recipe/background';
import type { BehaviorShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized } from '$stylist/layout/interface/behavior/sized';
import type { ContainerProps } from '$stylist/layout/type/struct/container/container-props';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeButton
	extends ComputeIntersectAll<
		[
			SlotButtonAttributesBase,
			SlotButtonControl,
			SlotChildren,
			SlotText,
			SlotIcon,
			SlotBadge,
			BehaviorClickable,
			BehaviorFocusable,
			BehaviorSized,
			BehaviorShapeable,
			ContainerProps,
			RecipeThemeBackground,
			RecipeBorder,
			SlotTheme
		]
	> {
	loadingLabel?: string;
}
