import type { SceneAtom } from '$stylist/graph/type/object/scene-atom/scene-atom';

export type SceneMolecule = {
	id: string;
	label: string;
	description?: string;
	atoms: readonly SceneAtom[];
};
