import { getCanvasObjectBounds } from '$stylist/canvas/function/script/canvas-get-object-bounds';
import type { SharedCanvasPoint } from '$stylist/canvas/type/struct/shared-canvas';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';

export function hitTestCanvasObject(
	objects: readonly CanvasObject[],
	point: SharedCanvasPoint
): CanvasObject | null {
	for (let index = objects.length - 1; index >= 0; index -= 1) {
		const object = objects[index];
		const bounds = getCanvasObjectBounds(object);

		if (!bounds) continue;

		const withinBounds =
			point.x >= bounds.x &&
			point.x <= bounds.x + bounds.width &&
			point.y >= bounds.y &&
			point.y <= bounds.y + bounds.height;

		if (withinBounds) {
			return object;
		}
	}

	return null;
}
