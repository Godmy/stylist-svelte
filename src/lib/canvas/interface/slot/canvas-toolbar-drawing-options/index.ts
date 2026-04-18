import type { CanvasToolbarDrawingTool } from '$stylist/canvas/type/enum/canvas-toolbar-drawing-tool';

export interface CanvasToolbarDrawingOptions {
	lineWidth: number;
	strokeColor: string;
	tool: CanvasToolbarDrawingTool;
	mode: 'draw' | 'erase';
}
