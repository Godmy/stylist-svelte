import type { Point2D } from '$stylist/architecture/type/struct/point-2d';
import type { SharedCanvasTool } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-tool';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';

export function updateDraftCanvasObject(
	object: CanvasObject,
	tool: SharedCanvasTool,
	startPoint: Point2D,
	currentPoint: Point2D
): CanvasObject {
	if (tool === 'rectangle') {
		return {
			...object,
			x: Math.min(startPoint.x, currentPoint.x),
			y: Math.min(startPoint.y, currentPoint.y),
			width: Math.abs(currentPoint.x - startPoint.x),
			height: Math.abs(currentPoint.y - startPoint.y)
		};
	}

	if (tool === 'circle') {
		return {
			...object,
			radius: Math.hypot(currentPoint.x - object.x, currentPoint.y - object.y)
		};
	}

	return object;
}
