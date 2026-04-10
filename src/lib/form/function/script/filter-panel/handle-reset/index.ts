import type { FilterPanelState } from '$stylist/form/function/state/filter-panel';
import type { FilterChangePayload } from '$stylist/form/type/struct/filter-panel';
import { handleFilterChange } from '$stylist/form/function/script/filter-panel/handle-filter-change';

export function handleReset(state: FilterPanelState, onFilterChange?: (payload: FilterChangePayload) => void, onReset?: () => void) {
	state.objectsVisible = true;
	state.interfacesVisible = true;
	state.unionsVisible = true;
	state.enumsVisible = true;
	state.scalarsVisible = true;
	state.inputsVisible = true;
	state.currentLayout = 'force-directed';
	handleFilterChange(state, onFilterChange);
	onReset?.();
}
