import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';

export type SceneMolecule = {
	id: string;
	label: string;
	description?: string;
	atoms: readonly SceneAtom[];
};
