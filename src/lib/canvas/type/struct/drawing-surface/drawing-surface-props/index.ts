import type { HTMLCanvasAttributes } from 'svelte/elements';
import type { DrawingSurfaceTool } from '../drawing-surface-tool';

export type DrawingSurfaceProps = {
	width?: number;
	height?: number;
	drawingEnabled?: boolean;
	tool?: DrawingSurfaceTool;
	strokeColor?: string;
	strokeWidth?: number;
	backgroundColor?: string;
} & HTMLCanvasAttributes;
