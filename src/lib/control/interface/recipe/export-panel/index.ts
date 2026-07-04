import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotExportPanel } from '$stylist/control/interface/slot/export-panel';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeExportPanel
	extends ComputeIntersectAll<
		[
			SlotExportPanel,
			SlotChildren,
			SlotText,
			SlotText,
			BehaviorSelectable<string>,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {}
