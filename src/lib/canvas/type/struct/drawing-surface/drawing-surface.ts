import type { HTMLCanvasAttributes } from 'svelte/elements';

export type DrawingSurfaceTool = 'pen' | 'eraser' | 'select';

export type DrawingSurfaceCanvasClearedEvent = {};
export type DrawingSurfaceExposeMethodsEvent = { clear: () => void };

export type DrawingSurfaceProps = {
	width?: number;
	height?: number;
	drawingEnabled?: boolean;
	tool?: DrawingSurfaceTool;
	strokeColor?: string;
	strokeWidth?: number;
	backgroundColor?: string;
} & HTMLCanvasAttributes;
