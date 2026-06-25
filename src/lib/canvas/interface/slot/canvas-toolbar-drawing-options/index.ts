import type { CanvasToolbarDrawingTool } from '$stylist/token/type/alias/canvas-toolbar-drawing-tool';

export interface CanvasToolbarDrawingOptions {
	lineWidth: number;
	strokeColor: string;
	tool: CanvasToolbarDrawingTool;
	mode: 'draw' | 'erase';
}

