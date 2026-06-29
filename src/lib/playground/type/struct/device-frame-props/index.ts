import type { Snippet } from 'svelte';
import type { PlaygroundCanvasShellViewportSize as ShellCanvasViewportSize } from '$stylist/playground/type/alias/playground-canvas-shell-viewport-size';

export type DeviceFrameProps = {
	device: ShellCanvasViewportSize;
	children?: Snippet;
};

