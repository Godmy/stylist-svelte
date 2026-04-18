import type { SlotFormSelectionState } from '$stylist/form/interface/slot/form-selection-state';

export function toggleCollapsed(state: SlotFormSelectionState, collapsible: boolean) {
	if (collapsible) {
		state.isCollapsed = !state.isCollapsed;
	}
}
