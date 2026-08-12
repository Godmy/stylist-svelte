import type { SlotFilterPanelState } from '$stylist/control/interface/slot/filter-panel-state';
import type { FilterChangePayload } from '$stylist/control/type/object/filter-panel/filterchangepayload';
import { handleFilterChange } from '$stylist/control/function/script/filter-panel/handle-filter-change';

export function handleReset(
	state: SlotFilterPanelState,
	onFilterChange?: (payload: FilterChangePayload) => void,
	onReset?: () => void
) {
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
