import type { SceneAtom } from '$stylist/graph/type/struct/scene-atom/scene-atom';
import { MATERIAL_PALETTE } from '$stylist/graph/const/record/material-palette';

export function resolveSceneAtomBaseColor(atom: SceneAtom): readonly [number, number, number] {
	return (
		atom.material?.color ?? atom.geometry.color ?? MATERIAL_PALETTE[atom.material?.kind ?? 'solid']
	);
}
