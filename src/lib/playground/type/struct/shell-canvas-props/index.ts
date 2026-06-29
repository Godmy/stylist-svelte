import type { ComponentType, Snippet } from 'svelte';
import type { PlaygroundCanvasShellViewportSize as ShellCanvasViewportSize } from '$stylist/playground/type/alias/playground-canvas-shell-viewport-size';
import type { PlaygroundCanvasShellBackgroundType as ShellCanvasBackgroundType } from '$stylist/playground/type/alias/playground-canvas-shell-background-type';

export type ShellCanvasProps = {
	component?: ComponentType | null;
	props?: Record<string, any>;
	children?: Snippet;
	viewport?: ShellCanvasViewportSize;
	zoom?: number;
	background?: ShellCanvasBackgroundType;
	showGrid?: boolean;
	showDeviceFrame?: boolean;
	onZoomChange?: (zoom: number) => void;
};

