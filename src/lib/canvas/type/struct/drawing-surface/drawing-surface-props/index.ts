import type { HTMLCanvasAttributes } from 'svelte/elements';

export type DrawingSurfaceProps = {
	width?: number;
	height?: number;
	drawingEnabled?: boolean;
	tool?: 'pen' | 'eraser' | 'select';
	strokeColor?: string;
	strokeWidth?: number;
	backgroundColor?: string;
} & HTMLCanvasAttributes;
