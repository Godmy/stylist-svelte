import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';
import type { SceneMolecule } from '$stylist/architecture/type/struct/scene-molecule';

function atom(atom: SceneAtom): SceneAtom {
	return {
		selectable: true,
		boundsRadius: 1,
		...atom
	};
}

export function createMobileSheetMolecule(): SceneMolecule {
	return {
		id: 'mobile-sheet',
		label: 'Mobile bottom sheet',
		description: 'Phone surface with a bottom sheet',
		atoms: [
			atom({
				id: 'mobile-frame',
				kind: 'layout',
				material: { kind: 'muted', color: [0.32, 0.36, 0.44] },
				geometry: { type: 'box', width: 2.3, height: 4.6, depth: 0.2 },
				transform: {
					position: { x: 0.2, y: -0.05, z: 9.1 },
					rotation: { y: 0.08 }
				},
				metadata: { label: 'Mobile frame', tags: ['mobile'] },
				boundsRadius: 2.5
			}),
			atom({
				id: 'mobile-screen',
				kind: 'panel',
				material: { kind: 'matte-panel', color: [0.9, 0.92, 0.96] },
				geometry: { type: 'box', width: 2.0, height: 4.2, depth: 0.08 },
				transform: {
					position: { x: 0.2, y: -0.05, z: 9.18 },
					rotation: { y: 0.08 }
				},
				metadata: { label: 'Mobile screen', tags: ['mobile', 'screen'] },
				boundsRadius: 2.2
			}),
			atom({
				id: 'mobile-sheet-panel',
				kind: 'panel',
				material: { kind: 'accent', color: [0.72, 0.82, 0.98] },
				geometry: { type: 'box', width: 1.86, height: 1.45, depth: 0.12 },
				transform: {
					position: { x: 0.2, y: -1.45, z: 9.25 },
					rotation: { y: 0.08 }
				},
				metadata: { label: 'Bottom sheet', tags: ['mobile', 'sheet'] },
				boundsRadius: 1.2
			})
		]
	};
}
