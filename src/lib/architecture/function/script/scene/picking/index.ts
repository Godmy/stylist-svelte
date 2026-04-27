import type { Camera } from '$stylist/architecture/class/manager/camera';
import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';
import { getAtomBoundsRadius } from '$stylist/architecture/function/script/get-atom-bounds-radius';
import { projectPointToScreen } from '$stylist/architecture/function/script/project-point-to-screen';
import { projectWorldRadiusToPixels } from '$stylist/architecture/function/script/project-world-radius-to-pixels';

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
