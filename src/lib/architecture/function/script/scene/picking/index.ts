import type { Camera } from '$stylist/architecture/class/manager/camera';
import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';
import { getAtomBoundsRadius } from '$stylist/architecture/function/script/get-atom-bounds-radius';

export function pickSceneAtom(
	atoms: readonly SceneAtom[],
	camera: Camera | null,
	canvas: HTMLCanvasElement | null,
	clientX: number,
	clientY: number
): SceneAtom | null {
	if (!canvas || !camera) {
		return null;
	}

	const canvasRect = canvas.getBoundingClientRect();
	const localX = clientX - canvasRect.left;
	const localY = clientY - canvasRect.top;
	let bestAtom: SceneAtom | null = null;
	let bestScore = Number.POSITIVE_INFINITY;

	for (const atom of atoms) {
		if (atom.visible === false || atom.selectable === false) {
			continue;
		}

		const projection = projectPointToScreen(camera, canvas, atom.transform.position);

		if (!projection) {
			continue;
		}

		const dx = projection.x - localX;
		const dy = projection.y - localY;
		const distanceToPointer = Math.hypot(dx, dy);
		const projectedRadius = projectWorldRadiusToPixels(
			camera,
			canvas,
			getAtomBoundsRadius(atom),
			projection.distance
		);
		const threshold = Math.min(20, Math.max(8, projectedRadius * 0.45));

		if (distanceToPointer > threshold) {
			continue;
		}

		const score = distanceToPointer + Math.max(0, projection.depth) * 8;

		if (score < bestScore) {
			bestScore = score;
			bestAtom = atom;
		}
	}

	return bestAtom;
}

function projectPointToScreen(
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

function projectWorldRadiusToPixels(
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

function multiplyMatrixVector(
	matrix: Float32Array,
	vector: readonly [number, number, number, number]
): [number, number, number, number] {
	return [
		matrix[0] * vector[0] + matrix[4] * vector[1] + matrix[8] * vector[2] + matrix[12] * vector[3],
		matrix[1] * vector[0] + matrix[5] * vector[1] + matrix[9] * vector[2] + matrix[13] * vector[3],
		matrix[2] * vector[0] + matrix[6] * vector[1] + matrix[10] * vector[2] + matrix[14] * vector[3],
		matrix[3] * vector[0] + matrix[7] * vector[1] + matrix[11] * vector[2] + matrix[15] * vector[3]
	];
}
