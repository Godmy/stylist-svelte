import type { FocusTarget } from '../focus-target/index.svelte.ts';

export interface FocusState {
	target: FocusTarget | null;
	isFocused: boolean;
	isFullscreen: boolean;
}
