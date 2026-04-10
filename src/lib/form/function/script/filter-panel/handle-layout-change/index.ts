import type { FilterPanelState } from '$stylist/form/function/state/filter-panel';
import type { FilterPanelLayout, FilterChangePayload } from '$stylist/form/type/struct/filter-panel';
import { handleFilterChange } from '$stylist/form/function/script/filter-panel/handle-filter-change';

export function handleLayoutChange(e: Event, state: FilterPanelState, onFilterChange?: (payload: FilterChangePayload) => void) {
	const target = e.target as HTMLSelectElement;
	state.currentLayout = target.value as FilterPanelLayout;
	handleFilterChange(state, onFilterChange);
}
