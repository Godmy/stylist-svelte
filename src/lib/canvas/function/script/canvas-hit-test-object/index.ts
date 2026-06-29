import { getCanvasObjectBounds } from '$stylist/canvas/function/script/canvas-get-object-bounds';
import type { Point2D } from '$stylist/architecture/type/struct/point-2d';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';

export function hitTestCanvasObject(
	objects: readonly CanvasObject[],
	point: Point2D
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
