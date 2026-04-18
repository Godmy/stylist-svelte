import type { PresentationMode } from '$stylist/architecture/type/struct/presentation-mode/index';

export function createPresentationMode(initial?: PresentationMode) {
	let mode = $state<PresentationMode>(initial ?? 'overview');

	return {
		get mode() { return mode; },
		setMode(newMode: PresentationMode) { mode = newMode; }
	};
}

export default createPresentationMode;
