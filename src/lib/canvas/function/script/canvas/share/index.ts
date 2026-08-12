import type { CanvasObject } from '$stylist/canvas/type/object/canvas-object';

export function cloneCanvasObjects(value: readonly CanvasObject[] = []): CanvasObject[] {
	return value.map((object) => ({
		...object,
		points: object.points?.map((point) => ({ ...point }))
	}));
}
