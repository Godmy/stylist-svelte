import { createCanvasObjectId } from '$stylist/canvas/function/script/canvas-create-object-id';
import type { SharedCanvasPoint } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-point';
import type { SharedCanvasTool } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-tool';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';

export function createDraftCanvasObject(
	tool: SharedCanvasTool,
	point: SharedCanvasPoint,
	color: string,
	currentUserId?: string
): CanvasObject | null {
	if (tool === 'select') return null;

	return {
		id: createCanvasObjectId(),
		type: tool === 'rectangle' ? 'rectangle' : tool === 'circle' ? 'circle' : 'text',
		x: point.x,
		y: point.y,
		color,
		userId: currentUserId
	};
}
