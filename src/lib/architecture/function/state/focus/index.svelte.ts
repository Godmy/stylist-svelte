import type { FocusTarget } from '../focus-target/index.svelte.ts';
import type { FocusState } from '../focus-state/index.svelte.ts';

export function useFocus() {
	let state = $state<FocusState>({
		target: null,
		isFocused: false,
		isFullscreen: false
	});

	const focus = (target: FocusTarget) => {
		state.target = target;
		state.isFocused = true;
		state.isFullscreen = false;
	};

	const releaseFocus = () => {
		state.target = null;
		state.isFocused = false;
		state.isFullscreen = false;
	};

	const enterFullscreen = () => {
		if (state.target) {
			state.isFullscreen = true;
		}
	};

	const exitFullscreen = () => {
		state.isFullscreen = false;
	};

	const toggleFullscreen = () => {
		if (state.isFullscreen) {
			exitFullscreen();
			return;
		}

		enterFullscreen();
	};

	const isTargetFocused = (id: string) => {
		return state.target?.id === id && state.isFocused;
	};

	return {
		get state() {
			return state;
		},
		get target() {
			return state.target;
		},
		get isFocused() {
			return state.isFocused;
		},
		get isFullscreen() {
			return state.isFullscreen;
		},
		focus,
		releaseFocus,
		enterFullscreen,
		exitFullscreen,
		toggleFullscreen,
		isTargetFocused
	};
}

export default useFocus;
