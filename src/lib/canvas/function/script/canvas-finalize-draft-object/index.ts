import { updateDraftCanvasObject } from '$stylist/canvas/function/script/canvas-update-draft-object';
import type { Point2D } from '$stylist/architecture/type/struct/point-2d';
import type { SharedCanvasTool } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-tool';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';

export function finalizeDraftCanvasObject(
	object: CanvasObject,
	tool: SharedCanvasTool,
	startPoint: Point2D,
	endPoint: Point2D
): CanvasObject {
	if (tool === 'rectangle') {
		return updateDraftCanvasObject(object, tool, startPoint, endPoint);
	}

	if (tool === 'text') {
		return {
			...object,
			text: object.text || 'Text'
		};
	}

	if (tool === 'circle') {
		return {
			...object,
			radius: object.radius ?? Math.hypot(endPoint.x - startPoint.x, endPoint.y - startPoint.y)
		};
	}

	return object;
}
