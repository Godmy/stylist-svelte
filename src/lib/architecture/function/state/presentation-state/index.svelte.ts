import type { PresentationState } from '$stylist/architecture/interface/recipe/presentation-state/index';
import type { PresentationMode } from '$stylist/architecture/type/struct/presentation-mode/index';
import type { PresentationFrame } from '$stylist/architecture/interface/slot/presentation-frame/index';

export function createPresentationState(initial?: Partial<PresentationState>): PresentationState & {
	setMode: (mode: PresentationMode) => void;
	setCurrentFrame: (index: number) => void;
	setFrames: (frames: PresentationFrame[]) => void;
	togglePlaying: () => void;
} {
	const state = $state<PresentationState>({
		mode: initial?.mode ?? 'overview',
		currentFrameIndex: initial?.currentFrameIndex ?? 0,
		frames: initial?.frames ?? [],
		isPlaying: initial?.isPlaying ?? false
	});

	return {
		get mode() { return state.mode; },
		get currentFrameIndex() { return state.currentFrameIndex; },
		get frames() { return state.frames; },
		get isPlaying() { return state.isPlaying; },
		setMode(mode: PresentationMode) { state.mode = mode; },
		setCurrentFrame(index: number) { state.currentFrameIndex = index; },
		setFrames(frames: PresentationFrame[]) { state.frames = frames; },
		togglePlaying() { state.isPlaying = !state.isPlaying; }
	};
}

export default createPresentationState;
