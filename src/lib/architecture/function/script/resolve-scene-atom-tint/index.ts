import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';
import type { SceneInteractionState } from '$stylist/architecture/type/struct/scene-interaction-state';

export function resolveSceneAtomTint(
	atom: SceneAtom,
	interaction: SceneInteractionState
): { color: readonly [number, number, number]; strength: number } {
	if (interaction.selected) {
		return {
			color: [1, 0.96, 0.72],
			strength: atom.kind === 'axis' ? 0.2 : 0.42
		};
	}

	if (interaction.hovered) {
		return {
			color: [0.76, 0.88, 1],
			strength: atom.kind === 'grid-line' ? 0.08 : 0.22
		};
	}

	return { color: [1, 1, 1], strength: 0 };
}
