import type { SlotChildren } from '$stylist/theme/interface/slot/children';

import type { BehaviorFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/control/interface/behavior/selectable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeFilterBar
	extends ComputeIntersectAll<
		[SlotChildren, SlotText, SlotText, BehaviorSelectable<string[]>, BehaviorFocusable, BehaviorSizable]
	> {
	toggles?: {
	id: string;
	label: string;
	description?: string;
	checked?: boolean;
}[];
	tags?: {
	id: string;
	label: string;
	active?: boolean;
}[];
	range?: {
	id: string;
	label: string;
	min: number;
	max: number;
	step?: number;
	value?: number;
	unit?: string;
};
	onClear?: () => void;
	class?: string;
}
