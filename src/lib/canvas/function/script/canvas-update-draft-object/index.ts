import type {
	SharedCanvasPoint,
	SharedCanvasTool
} from '$stylist/canvas/type/struct/shared-canvas';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';

export function updateDraftCanvasObject(
	object: CanvasObject,
	tool: SharedCanvasTool,
	startPoint: SharedCanvasPoint,
	currentPoint: SharedCanvasPoint
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
