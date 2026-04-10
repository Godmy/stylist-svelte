import type { FormSelectionState } from '$stylist/form/function/state/form-selection';

export function toggleCollapsed(state: FormSelectionState, collapsible: boolean) {
	if (collapsible) {
		state.isCollapsed = !state.isCollapsed;
	}
}
