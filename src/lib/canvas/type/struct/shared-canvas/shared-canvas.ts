import type { CanvasObject } from '$stylist/interaction/interface/component/shared-canvas/other';
import type { SHARED_CANVAS_TOOL_DEFINITIONS } from '$stylist/canvas/const/struct/canvas';

export type SharedCanvasTool = (typeof SHARED_CANVAS_TOOL_DEFINITIONS)[number]['id'];

export type SharedCanvasToolDefinition = (typeof SHARED_CANVAS_TOOL_DEFINITIONS)[number];

export type SharedCanvasPoint = {
	x: number;
	y: number;
};

export type SharedCanvasObjectBounds = {
	x: number;
	y: number;
	width: number;
	height: number;
};

export type SharedCanvasDraftObject = CanvasObject | null;
