import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';
import type { SceneMaterialKind } from '$stylist/architecture/type/struct/scene-material-kind';

export const MATERIAL_PALETTE: Record<SceneMaterialKind, readonly [number, number, number]> = {
	solid: [0.79, 0.83, 0.9],
	'matte-panel': [0.86, 0.88, 0.92],
	'axis-emissive': [0.88, 0.36, 0.36],
	surface: [0.15, 0.18, 0.24],
	'grid-line': [0.24, 0.29, 0.37],
	accent: [0.46, 0.68, 0.96],
	muted: [0.56, 0.62, 0.72]
};
