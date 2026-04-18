import type { SharedCanvasPoint } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-point';

export type CanvasObject = {
	[key: string]: any;
	id: string;
	type?: string;
	points?: SharedCanvasPoint[];
};
