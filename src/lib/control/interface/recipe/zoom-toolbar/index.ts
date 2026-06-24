import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotZoomToolbar } from '$stylist/control/interface/slot/zoom-toolbar';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeZoomToolbar
	extends ComputeIntersectAll<
		[SlotZoomToolbar, SlotText, SlotIcon, BehaviorClickable, BehaviorFocusable, BehaviorSizable]
	> {}
