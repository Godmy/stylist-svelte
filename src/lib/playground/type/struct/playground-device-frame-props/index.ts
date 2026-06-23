import type { Snippet } from 'svelte';
import type { PlaygroundCanvasShellViewportSize } from '$stylist/playground/type/struct/playground-canvas-shell-viewport-size';

export type PlaygroundDeviceFrameProps = {
	device: PlaygroundCanvasShellViewportSize;
	children?: Snippet;
};
