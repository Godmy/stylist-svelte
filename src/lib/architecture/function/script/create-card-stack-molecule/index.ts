import { createSceneAtom } from '$stylist/architecture/function/script/create-scene-atom';
import type { SceneMolecule } from '$stylist/architecture/type/struct/scene-molecule';

export function createCardStackMolecule(): SceneMolecule {
	return {
		id: 'card-stack',
		label: 'Card stack',
		description: 'Layered cards for depth debugging',
		atoms: [
			createSceneAtom({
				id: 'card-stack-back',
				kind: 'panel',
				material: { kind: 'muted' },
				geometry: { type: 'box', width: 2.8, height: 1.8, depth: 0.12 },
				transform: {
					position: { x: -0.6, y: -0.15, z: -8.6 },
					rotation: { x: -0.06, y: 0.1, z: -0.08 }
				},
				metadata: { label: 'Card stack back', tags: ['stack'] },
				boundsRadius: 1.6
			}),
			createSceneAtom({
				id: 'card-stack-mid',
				kind: 'panel',
				material: { kind: 'matte-panel', color: [0.88, 0.86, 0.82] },
				geometry: { type: 'box', width: 2.7, height: 1.75, depth: 0.12 },
				transform: {
					position: { x: 0.05, y: 0.05, z: -8.1 },
					rotation: { x: -0.03, y: 0.14, z: 0.02 }
				},
				metadata: { label: 'Card stack mid', tags: ['stack'] },
				boundsRadius: 1.55
			}),
			createSceneAtom({
				id: 'card-stack-front',
				kind: 'panel',
				material: { kind: 'solid', color: [0.94, 0.95, 0.98] },
				geometry: { type: 'box', width: 2.6, height: 1.7, depth: 0.12 },
				transform: {
					position: { x: 0.7, y: 0.28, z: -7.55 },
					rotation: { y: 0.18, z: 0.08 }
				},
				metadata: { label: 'Card stack front', tags: ['stack'] },
				boundsRadius: 1.5
			})
		]
	};
}
