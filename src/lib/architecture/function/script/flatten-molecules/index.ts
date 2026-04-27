import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';
import type { SceneMolecule } from '$stylist/architecture/type/struct/scene-molecule';

export function flattenMolecules(molecules: readonly SceneMolecule[]): readonly SceneAtom[] {
	return molecules.flatMap((molecule) =>
		molecule.atoms.map((atom: SceneAtom) => ({
			...atom,
			moleculeId: molecule.id
		}))
	);
}
