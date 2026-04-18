import { drawCanvasObject } from '$stylist/canvas/function/script/canvas-draw-object';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';

export function drawCanvasObjects(
	ctx: CanvasRenderingContext2D,
	canvas: HTMLCanvasElement,
	objects: readonly CanvasObject[],
	selectedObjectId: string | null
): void {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (const object of objects) {
		drawCanvasObject(ctx, object, object.id === selectedObjectId);
	}
}
