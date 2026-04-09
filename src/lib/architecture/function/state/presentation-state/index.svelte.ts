import type { PresentationMode } from '../presentation-mode/index.svelte.ts';
import type { PresentationFrame } from '../presentation-frame/index.svelte.ts';

export interface PresentationState {
	mode: PresentationMode;
	currentFrameIndex: number;
	frames: PresentationFrame[];
	isPlaying: boolean;
}
