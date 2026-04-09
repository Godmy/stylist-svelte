import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';
import type { SceneGraph } from '$stylist/architecture/type/struct/scene-graph';
import type { SceneMolecule } from '$stylist/architecture/type/struct/scene-molecule';
import { createGridMolecule } from '$stylist/architecture/function/script/scene/molecule/index';
import { createCoreSceneMolecule } from '$stylist/architecture/function/script/create-core-scene-molecule';
import { createPrimaryLayoutMolecule } from '$stylist/architecture/function/script/create-primary-layout-molecule';
import { createCardStackMolecule } from '$stylist/architecture/function/script/create-card-stack-molecule';
import { createDashboardMolecule } from '$stylist/architecture/function/script/create-dashboard-molecule';
import { createMobileSheetMolecule } from '$stylist/architecture/function/script/create-mobile-sheet-molecule';

function flattenMolecules(molecules: readonly SceneMolecule[]): readonly SceneAtom[] {
	return molecules.flatMap((molecule) =>
		molecule.atoms.map((atom: SceneAtom) => ({
			...atom,
			moleculeId: molecule.id
		}))
	);
}

export function createDemoSceneGraph(): SceneGraph {
	const molecules = [
		createGridMolecule(),
		createCoreSceneMolecule(),
		createPrimaryLayoutMolecule(),
		createCardStackMolecule(),
		createDashboardMolecule(),
		createMobileSheetMolecule()
	] as const;

	return {
		id: 'scene-demo',
		label: 'Scene debug demo',
		molecules,
		atoms: flattenMolecules(molecules),
		boundsRadius: 20,
		focusTarget: { x: 0, y: -0.2, z: 0 },
		defaultPreset: 'iso'
	};
}
