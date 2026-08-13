import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { FilterPanelLayout } from '$stylist/control/type/alias/filter-panel-layout';
import type { SlotFilterChangePayload } from '$stylist/control/interface/slot/filter-change-payload';

export interface RecipeFilterPanel extends ComputeIntersectAll<[]> {
	showObjects?: boolean;
	showInterfaces?: boolean;
	showUnions?: boolean;
	showEnums?: boolean;
	showScalars?: boolean;
	showInputs?: boolean;
	layout?: FilterPanelLayout;
	onFilterChange?: (payload: SlotFilterChangePayload) => void;
	onReset?: () => void;
}
