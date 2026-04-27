import { createSceneAtom } from '$stylist/architecture/function/script/create-scene-atom';
import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';

export function createGridLines(axis: 'x' | 'z'): SceneAtom[] {
	const lines: SceneAtom[] = [];

	for (let index = -8; index <= 8; index += 1) {
		if (index === 0) {
			continue;
		}

		lines.push(
			createSceneAtom({
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
