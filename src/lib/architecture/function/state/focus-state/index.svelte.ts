import type { FocusState } from '$stylist/architecture/interface/recipe/focus-state/index';
import type { FocusTarget } from '$stylist/architecture/interface/slot/focus-target/index';

export function createFocusState(initial?: Partial<FocusState>) {
	const state = $state<FocusState>({
		target: initial?.target ?? null,
		isFocused: initial?.isFocused ?? false,
		isFullscreen: initial?.isFullscreen ?? false
	});

	return {
		get target() { return state.target; },
		get isFocused() { return state.isFocused; },
		get isFullscreen() { return state.isFullscreen; },
		setTarget(target: FocusTarget | null) { state.target = target; },
		setFocused(focused: boolean) { state.isFocused = focused; },
		setFullscreen(fullscreen: boolean) { state.isFullscreen = fullscreen; }
	};
}

export default createFocusState;
