import { updateDraftCanvasObject } from '$stylist/canvas/function/script/canvas-update-draft-object';
import type {
	SharedCanvasPoint,
	SharedCanvasTool
} from '$stylist/canvas/type/struct/shared-canvas';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';

export function finalizeDraftCanvasObject(
	object: CanvasObject,
	tool: SharedCanvasTool,
	startPoint: SharedCanvasPoint,
	endPoint: SharedCanvasPoint
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
