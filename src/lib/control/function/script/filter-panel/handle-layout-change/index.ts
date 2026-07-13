import type { SlotFilterPanelState } from '$stylist/control/interface/slot/filter-panel-state';
import type { FilterPanelLayout } from '$stylist/control/type/alias/filter-panel-layout';
import type { FilterChangePayload } from '$stylist/control/type/struct/filter-panel/filterchangepayload';
import { handleFilterChange } from '$stylist/control/function/script/filter-panel/handle-filter-change';

export function handleLayoutChange(
	e: Event,
	state: SlotFilterPanelState,
	onFilterChange?: (payload: FilterChangePayload) => void
) {
	const target = e.target as HTMLSelectElement;
	state.currentLayout = target.value as FilterPanelLayout;
	handleFilterChange(state, onFilterChange);
}
