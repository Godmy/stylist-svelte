import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';
import type { SceneMolecule } from '$stylist/architecture/type/struct/scene-molecule';

function atom(atom: SceneAtom): SceneAtom {
	return {
		selectable: true,
		boundsRadius: 1,
		...atom
	};
}

function createGridLines(axis: 'x' | 'z'): SceneAtom[] {
	const lines: SceneAtom[] = [];

	for (let index = -8; index <= 8; index += 1) {
		if (index === 0) {
			continue;
		}

		lines.push(
			atom({
				id: `grid-${axis}-${index}`,
				kind: 'grid-line',
				material: { kind: 'grid-line' },
				geometry:
					axis === 'x'
						? { type: 'box', width: 16, height: 0.02, depth: 0.02 }
						: { type: 'box', width: 0.02, height: 0.02, depth: 16 },
				transform: {
					position:
						axis === 'x'
							? { x: 0, y: -2.46, z: index }
							: { x: index, y: -2.46, z: 0 }
				},
				metadata: {
					label: `Grid ${axis.toUpperCase()} ${index}`,
					tags: ['grid']
				},
				selectable: false,
				boundsRadius: 8
			})
		);
	}

	return lines;
}

export function createGridMolecule(): SceneMolecule {
	return {
		id: 'grid',
		label: 'Grid and origin',
		description: 'Engineering grid, floor and origin marker',
		atoms: [
			atom({
				id: 'debug-floor',
				kind: 'surface',
				material: { kind: 'surface' },
				geometry: { type: 'box', width: 18, height: 0.08, depth: 18 },
				transform: { position: { x: 0, y: -2.8, z: 0 } },
				metadata: { label: 'Floor plane', tags: ['surface', 'grid'] },
				selectable: false,
				boundsRadius: 12
			}),
			...createGridLines('x'),
			...createGridLines('z'),
			atom({
				id: 'axis-x',
				kind: 'axis',
				material: { kind: 'axis-emissive', color: [0.92, 0.28, 0.28] },
				geometry: { type: 'box', width: 9.5, height: 0.05, depth: 0.05 },
				transform: { position: { x: 4.8, y: -2.1, z: 0 } },
				metadata: { label: 'X axis', tags: ['axis'] },
				boundsRadius: 4.8
			}),
			atom({
				id: 'axis-y',
				kind: 'axis',
				material: { kind: 'axis-emissive', color: [0.25, 0.82, 0.45] },
				geometry: { type: 'box', width: 0.05, height: 9.5, depth: 0.05 },
				transform: { position: { x: 0, y: 2.4, z: 0 } },
				metadata: { label: 'Y axis', tags: ['axis'] },
				boundsRadius: 4.8
			}),
			atom({
				id: 'axis-z',
				kind: 'axis',
				material: { kind: 'axis-emissive', color: [0.3, 0.55, 0.98] },
				geometry: { type: 'box', width: 0.05, height: 0.05, depth: 9.5 },
				transform: { position: { x: 0, y: -2.1, z: 4.8 } },
				metadata: { label: 'Z axis', tags: ['axis'] },
				boundsRadius: 4.8
			}),
			atom({
				id: 'origin-marker',
				kind: 'marker',
				material: { kind: 'accent', color: [0.98, 0.96, 0.85] },
				geometry: { type: 'box', width: 0.24, height: 0.24, depth: 0.24 },
				transform: { position: { x: 0, y: -2.1, z: 0 } },
				metadata: { label: 'Origin marker', tags: ['origin'] },
				boundsRadius: 0.18
			})
		]
	};
}
