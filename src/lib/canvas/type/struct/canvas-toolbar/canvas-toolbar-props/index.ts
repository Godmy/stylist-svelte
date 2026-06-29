import type { CanvasToolbarDrawingTool } from '$stylist/canvas/type/alias/canvas-toolbar-drawing-tool';
import type { CanvasToolbarDrawingOptions } from '$stylist/canvas/interface/slot/canvas-toolbar-drawing-options';

export type CanvasToolbarProps = {
	selectedTool?: CanvasToolbarDrawingTool;
	drawingOptions?: CanvasToolbarDrawingOptions;
};

