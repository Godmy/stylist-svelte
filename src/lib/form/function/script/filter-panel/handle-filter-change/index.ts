import type { FilterPanelState } from '$stylist/form/function/state/filter-panel';
import type { FilterChangePayload } from '$stylist/form/type/struct/filter-panel';

export function handleFilterChange(state: FilterPanelState, onFilterChange?: (payload: FilterChangePayload) => void) {
	onFilterChange?.({
		showObjects: state.objectsVisible,
		showInterfaces: state.interfacesVisible,
		showUnions: state.unionsVisible,
		showEnums: state.enumsVisible,
		showScalars: state.scalarsVisible,
		showInputs: state.inputsVisible,
		layout: state.currentLayout as string
	});
}
