import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';
import type { SceneMolecule } from '$stylist/architecture/type/struct/scene-molecule';

function atom(atom: SceneAtom): SceneAtom {
	return {
		selectable: true,
		boundsRadius: 1,
		...atom
	};
}

export function createPrimaryLayoutMolecule(): SceneMolecule {
	return {
		id: 'layout-shell',
		label: 'Primary layout shell',
		description: 'Sidebar and content surface',
		atoms: [
			atom({
				id: 'shell-surface',
				kind: 'layout',
				material: { kind: 'matte-panel' },
				geometry: { type: 'box', width: 4.2, height: 3.4, depth: 0.16 },
				transform: {
					position: { x: -8.4, y: 0.2, z: -2.2 },
					rotation: { y: 0.36 }
				},
				metadata: { label: 'App shell', tags: ['layout', 'shell'] },
				boundsRadius: 2.8
			}),
			atom({
				id: 'shell-sidebar',
				kind: 'panel',
				material: { kind: 'muted' },
				geometry: { type: 'box', width: 0.74, height: 2.8, depth: 0.18 },
				transform: {
					position: { x: -9.7, y: 0.12, z: -2.0 },
					rotation: { y: 0.36 }
				},
				metadata: { label: 'Sidebar', tags: ['layout', 'sidebar'] },
				boundsRadius: 1.6
			}),
			atom({
				id: 'shell-topbar',
				kind: 'panel',
				material: { kind: 'accent', color: [0.44, 0.62, 0.9] },
				geometry: { type: 'box', width: 3.3, height: 0.34, depth: 0.18 },
				transform: {
					position: { x: -8.05, y: 1.52, z: -2.1 },
					rotation: { y: 0.36 }
				},
				metadata: { label: 'Top app bar', tags: ['layout', 'topbar'] },
				boundsRadius: 1.7
			}),
			atom({
				id: 'shell-card-a',
				kind: 'panel',
				material: { kind: 'solid' },
				geometry: { type: 'box', width: 1.2, height: 0.78, depth: 0.14 },
				transform: {
					position: { x: -7.65, y: 0.4, z: -1.95 },
					rotation: { y: 0.36 }
				},
				metadata: { label: 'Content card A', tags: ['layout', 'card'] },
				boundsRadius: 0.8
			}),
			atom({
				id: 'shell-card-b',
				kind: 'panel',
				material: { kind: 'solid' },
				geometry: { type: 'box', width: 1.6, height: 1.02, depth: 0.14 },
				transform: {
					position: { x: -8.55, y: -0.7, z: -2.15 },
					rotation: { y: 0.36 }
				},
				metadata: { label: 'Content card B', tags: ['layout', 'card'] },
				boundsRadius: 0.95
			})
		]
	};
}
