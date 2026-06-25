import type { Snippet } from 'svelte';
import type { PlaygroundCanvasShellViewportSize } from '$stylist/token/type/alias/playground-canvas-shell-viewport-size';

export type PlaygroundDeviceFrameProps = {
	device: PlaygroundCanvasShellViewportSize;
	children?: Snippet;
};

