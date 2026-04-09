import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';
import type { SceneMaterialKind } from '$stylist/architecture/type/struct/scene-material-kind';
import { MATERIAL_PALETTE } from '$stylist/architecture/const/record/material-palette';

export function resolveSceneAtomBaseColor(atom: SceneAtom): readonly [number, number, number] {
	return atom.material?.color ?? atom.geometry.color ?? MATERIAL_PALETTE[atom.material?.kind ?? 'solid'];
}
