import type { FilterPanelProps, FilterPanelLayout } from '$stylist/form/type/struct/filter-panel';

export interface SlotFilterPanelState {
	objectsVisible: boolean;
	interfacesVisible: boolean;
	unionsVisible: boolean;
	enumsVisible: boolean;
	scalarsVisible: boolean;
	inputsVisible: boolean;
	currentLayout: FilterPanelLayout;
	rootClass: string;
	filterSectionClass: string;
	filterHeaderClass: string;
	filterOptionsClass: string;
	filterItemClass: string;
	layoutControlsClass: string;
}
