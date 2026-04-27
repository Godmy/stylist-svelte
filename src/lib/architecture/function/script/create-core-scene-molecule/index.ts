import { createSceneAtom } from '$stylist/architecture/function/script/create-scene-atom';
import type { SceneMolecule } from '$stylist/architecture/type/struct/scene-molecule';

export function createCoreSceneMolecule(): SceneMolecule {
	return {
		id: 'core',
		label: 'Core scene',
		description: 'Primary cube and immediate debug volume',
		atoms: [
			createSceneAtom({
				id: 'cube-core',
				kind: 'cube',
				material: { kind: 'accent' },
				geometry: { type: 'cube' },
				transform: {
					position: { x: 0, y: 0, z: 0 },
					scale: { x: 2.4, y: 2.4, z: 2.4 }
				},
				motion: {
					spin: { x: 0.5, y: 1 }
				},
				metadata: {
					label: 'Core cube',
					description: 'Reference object for camera and shader debugging',
					tags: ['core']
				},
				boundsRadius: 2.4
			})
		]
	};
}
