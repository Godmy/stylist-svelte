import type { SharedCanvasPoint } from '$stylist/canvas/type/struct/shared-canvas';

export function getCanvasPointerPosition(
	event: MouseEvent,
	canvas: HTMLCanvasElement
): SharedCanvasPoint {
	const rect = canvas.getBoundingClientRect();

	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
}
