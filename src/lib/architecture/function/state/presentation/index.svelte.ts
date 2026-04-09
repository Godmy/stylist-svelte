import type { PresentationMode } from '../presentation-mode/index.svelte.ts';
import type { PresentationFrame } from '../presentation-frame/index.svelte.ts';
import type { PresentationState } from '../presentation-state/index.svelte.ts';

function usePresentation(initialFrames?: PresentationFrame[]) {
	let state = $state<PresentationState>({
		mode: 'overview',
		currentFrameIndex: 0,
		frames: initialFrames ?? [],
		isPlaying: false
	});

	const setMode = (mode: PresentationMode) => {
		state.mode = mode;
	};

	const toggleMode = () => {
		const modes: PresentationMode[] = ['overview', 'editor', 'presentation'];
		const currentIndex = modes.indexOf(state.mode);
		state.mode = modes[(currentIndex + 1) % modes.length];
	};

	const goToFrame = (index: number) => {
		if (index >= 0 && index < state.frames.length) {
			state.currentFrameIndex = index;
		}
	};

	const next = () => {
		if (state.currentFrameIndex < state.frames.length - 1) {
			state.currentFrameIndex++;
		} else if (state.isPlaying) {
			stop();
		}
	};

	const prev = () => {
		if (state.currentFrameIndex > 0) {
			state.currentFrameIndex--;
		}
	};

	const goToStart = () => {
		state.currentFrameIndex = 0;
	};

	const getCurrentFrame = (): PresentationFrame | null => {
		if (state.frames.length === 0) return null;
		return state.frames[state.currentFrameIndex];
	};

	const play = () => {
		state.isPlaying = true;
	};

	const stop = () => {
		state.isPlaying = false;
	};

	const togglePlay = () => {
		state.isPlaying = !state.isPlaying;
	};

	const addFrame = (frame: PresentationFrame) => {
		state.frames.push(frame);
	};

	const removeFrame = (index: number) => {
		if (index >= 0 && index < state.frames.length) {
			state.frames.splice(index, 1);
			if (state.currentFrameIndex >= state.frames.length) {
				state.currentFrameIndex = Math.max(0, state.frames.length - 1);
			}
		}
	};

	const updateFrame = (index: number, frame: Partial<PresentationFrame>) => {
		if (index >= 0 && index < state.frames.length) {
			state.frames[index] = { ...state.frames[index], ...frame };
		}
	};

	return {
		get state() {
			return state;
		},
		get mode() {
			return state.mode;
		},
		get currentFrameIndex() {
			return state.currentFrameIndex;
		},
		get frames() {
			return state.frames;
		},
		get isPlaying() {
			return state.isPlaying;
		},
		get currentFrame() {
			return getCurrentFrame();
		},
		setMode,
		toggleMode,
		goToFrame,
		next,
		prev,
		goToStart,
		play,
		stop,
		togglePlay,
		addFrame,
		removeFrame,
		updateFrame
	};
}

export { usePresentation };
export default usePresentation;
