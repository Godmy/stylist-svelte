import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotButtonDom } from '$stylist/control/interface/slot/button-dom';
import type { SlotPageButton } from '$stylist/control/interface/slot/page-button';
import type { Props } from '$stylist/information/type/struct/props';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipePageButton
	extends ComputeIntersectAll<
		[
			SlotPageButton,
			Omit<Props, 'children' | 'page' | 'isActive'>,
			SlotButtonDom,
			SlotChildren,
			SlotLabel,
			BehaviorClickable,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {}