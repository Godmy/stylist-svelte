import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';
import type { SceneMolecule } from '$stylist/architecture/type/struct/scene-molecule';

function atom(atom: SceneAtom): SceneAtom {
	return {
		selectable: true,
		boundsRadius: 1,
		...atom
	};
}

export function createDashboardMolecule(): SceneMolecule {
	return {
		id: 'dashboard',
		label: 'Dashboard',
		description: 'Dashboard board with tiles',
		atoms: [
			atom({
				id: 'dashboard-board',
				kind: 'layout',
				material: { kind: 'matte-panel', color: [0.84, 0.88, 0.93] },
				geometry: { type: 'box', width: 4.5, height: 3.2, depth: 0.16 },
				transform: {
					position: { x: 9.4, y: 0.55, z: 2.4 },
					rotation: { y: -0.44 }
				},
				metadata: { label: 'Dashboard board', tags: ['dashboard'] },
				boundsRadius: 2.8
			}),
			atom({
				id: 'dashboard-tile-a',
				kind: 'panel',
				material: { kind: 'solid', color: [0.95, 0.96, 0.98] },
				geometry: { type: 'box', width: 1.35, height: 1.0, depth: 0.14 },
				transform: {
					position: { x: 8.6, y: 1.1, z: 2.45 },
					rotation: { y: -0.44 }
				},
				metadata: { label: 'Dashboard tile A', tags: ['dashboard', 'tile'] },
				boundsRadius: 0.9
			}),
			atom({
				id: 'dashboard-tile-b',
				kind: 'panel',
				material: { kind: 'solid', color: [0.95, 0.96, 0.98] },
				geometry: { type: 'box', width: 1.35, height: 1.0, depth: 0.14 },
				transform: {
					position: { x: 10.15, y: 1.1, z: 1.75 },
					rotation: { y: -0.44 }
				},
				metadata: { label: 'Dashboard tile B', tags: ['dashboard', 'tile'] },
				boundsRadius: 0.9
			}),
			atom({
				id: 'dashboard-chart',
				kind: 'panel',
				material: { kind: 'accent', color: [0.56, 0.74, 0.94] },
				geometry: { type: 'box', width: 2.9, height: 0.92, depth: 0.14 },
				transform: {
					position: { x: 9.3, y: -0.2, z: 2.1 },
					rotation: { y: -0.44 }
				},
				metadata: { label: 'Dashboard chart rail', tags: ['dashboard', 'chart'] },
				boundsRadius: 1.6
			})
		]
	};
}
