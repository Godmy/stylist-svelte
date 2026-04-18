import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';

export function cloneCanvasObjects(value: readonly CanvasObject[] = []): CanvasObject[] {
	return value.map((object) => ({
		...object,
		points: object.points?.map((point) => ({ ...point }))
	}));
}
