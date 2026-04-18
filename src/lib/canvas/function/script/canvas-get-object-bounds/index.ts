import { getPathBounds } from '$stylist/canvas/function/script/canvas-get-path-bounds';
import type {
	SharedCanvasObjectBounds
} from '$stylist/canvas/type/struct/shared-canvas';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';

export function getCanvasObjectBounds(
	object: CanvasObject
): SharedCanvasObjectBounds | null {
	switch (object.type) {
		case 'rectangle':
			if (object.width == null || object.height == null) return null;
			return { x: object.x, y: object.y, width: object.width, height: object.height };
		case 'circle':
			if (object.radius == null) return null;
			return {
				x: object.x - object.radius,
				y: object.y - object.radius,
				width: object.radius * 2,
				height: object.radius * 2
			};
		case 'text': {
			const width = Math.max(64, (object.text?.length ?? 0) * 10);
			return { x: object.x, y: object.y - 18, width, height: 24 };
		}
		case 'path':
			if (!object.points?.length) return null;
			return getPathBounds(object.points);
		default:
			return null;
	}
}
