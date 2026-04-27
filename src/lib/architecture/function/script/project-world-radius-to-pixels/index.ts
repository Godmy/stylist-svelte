import type { Camera } from '$stylist/architecture/class/manager/camera';

export function projectWorldRadiusToPixels(
	camera: Camera,
	canvas: HTMLCanvasElement,
	worldRadius: number,
	distance: number
): number {
	if (distance <= 0) {
		return 0;
	}

	return (canvas.clientHeight * worldRadius) / (2 * Math.tan(camera.getFov() / 2) * distance);
}
