import { createCanvasObjectId } from '$stylist/canvas/function/script/canvas-create-object-id';
import type { Point2D } from '$stylist/architecture/type/struct/point-2d';
import type { SharedCanvasTool } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-tool';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';

export function createDraftCanvasObject(
	tool: SharedCanvasTool,
	point: Point2D,
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
