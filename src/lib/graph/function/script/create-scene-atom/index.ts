import type { SceneAtom } from '$stylist/graph/type/object/scene-atom/scene-atom';

export function createSceneAtom(atom: SceneAtom): SceneAtom {
	return {
		selectable: true,
		boundsRadius: 1,
		...atom
	};
}
