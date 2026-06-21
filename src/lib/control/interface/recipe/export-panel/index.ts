import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotExportPanel } from '$stylist/control/interface/slot/export-panel';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeExportPanel
	extends ComputeIntersectAll<
		[
			SlotExportPanel,
			SlotChildren,
			SlotLabel,
			SlotCaption,
			BehaviorSelectable<string>,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {}