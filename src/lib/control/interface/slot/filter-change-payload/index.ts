import type { FilterPanelLayout } from '$stylist/control/type/alias/filter-panel-layout';

export interface SlotFilterChangePayload {
	showObjects: boolean;
	showInterfaces: boolean;
	showUnions: boolean;
	showEnums: boolean;
	showScalars: boolean;
	showInputs: boolean;
	layout: FilterPanelLayout;
}
