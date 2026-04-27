import type { Camera } from '$stylist/architecture/class/manager/camera';
import { multiplyMatrixVector } from '$stylist/architecture/function/script/multiply-matrix-vector';

export function projectPointToScreen(
	camera: Camera,
	canvas: HTMLCanvasElement,
	point: { x: number; y: number; z: number }
): { x: number; y: number; depth: number; distance: number } | null {
	const view = camera.getViewMatrix().toArray();
	const projection = camera.getProjectionMatrix().toArray();
	const cameraPosition = camera.getPosition();
	const viewPosition = multiplyMatrixVector(view, [point.x, point.y, point.z, 1]);
	const clipPosition = multiplyMatrixVector(projection, viewPosition);

	if (clipPosition[3] <= 0) {
		return null;
	}

	const ndcX = clipPosition[0] / clipPosition[3];
	const ndcY = clipPosition[1] / clipPosition[3];
	const ndcZ = clipPosition[2] / clipPosition[3];

	return {
		x: (ndcX * 0.5 + 0.5) * canvas.clientWidth,
		y: (1 - (ndcY * 0.5 + 0.5)) * canvas.clientHeight,
		depth: ndcZ,
		distance: Math.hypot(
			cameraPosition[0] - point.x,
			cameraPosition[1] - point.y,
			cameraPosition[2] - point.z
		)
	};
}
