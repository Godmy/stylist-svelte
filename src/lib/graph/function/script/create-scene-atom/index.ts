import type { SceneAtom } from '$stylist/graph/type/struct/scene-atom/scene-atom';

export function createSceneAtom(atom: SceneAtom): SceneAtom {
	return {
		selectable: true,
		boundsRadius: 1,
		...atom
	};
}
