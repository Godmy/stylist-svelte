import type { SelectionMode } from '$stylist/architecture/type/struct/selection-mode/index';

const DEFAULT_MODE: SelectionMode = 'single';

export function createSelectionMode(initial?: SelectionMode) {
	let mode = $state<SelectionMode>(initial ?? DEFAULT_MODE);

	return {
		get mode() { return mode; },
		setMode(newMode: SelectionMode) { mode = newMode; }
	};
}

export default createSelectionMode;
