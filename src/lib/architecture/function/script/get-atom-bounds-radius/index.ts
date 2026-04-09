import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';

export function getAtomBoundsRadius(atom: SceneAtom): number {
	if (atom.boundsRadius) {
		return atom.boundsRadius;
	}

	if (atom.geometry.type === 'cube') {
		const scale = atom.transform.scale?.x ?? 1;

		return 1.8 * scale;
	}

	const scale = atom.transform.scale;
	const width = (atom.geometry.width ?? 1) * (scale?.x ?? 1);
	const height = (atom.geometry.height ?? 1) * (scale?.y ?? 1);
	const depth = (atom.geometry.depth ?? 1) * (scale?.z ?? 1);

	return Math.hypot(width, height, depth) / 2;
}
