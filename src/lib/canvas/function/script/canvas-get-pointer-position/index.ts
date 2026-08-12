import type { Point2D } from '$stylist/architecture/interface/slot/point-2d';

export function getCanvasPointerPosition(
	event: MouseEvent,
	canvas: HTMLCanvasElement
): Point2D {
	const rect = canvas.getBoundingClientRect();

	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
}
