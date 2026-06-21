import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotButtonDom } from '$stylist/control/interface/slot/button-dom';
import type { SlotCopyButton } from '$stylist/control/interface/slot/copy-button';
import type { Props } from '$stylist/information/type/struct/props';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/media/interface/slot/icon';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeCopyButton
	extends ComputeIntersectAll<
		[
			SlotCopyButton,
			Omit<
				Props,
				'children' | 'text' | 'label' | 'successMessage' | 'showIcon' | 'onSuccess' | 'onError'
			>,
			SlotButtonDom,
			SlotChildren,
			SlotLabel,
			SlotIcon,
			BehaviorClickable,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {}