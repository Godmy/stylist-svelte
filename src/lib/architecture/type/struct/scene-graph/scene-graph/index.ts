import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';
import type { SceneMolecule } from '$stylist/architecture/type/struct/scene-molecule';
import type { SceneCameraPreset } from '$stylist/token/type/alias/scene-camera-preset';

export type SceneGraph = {
	id: string;
	label: string;
	molecules: readonly SceneMolecule[];
	atoms: readonly SceneAtom[];
	boundsRadius: number;
	focusTarget: {
		x: number;
		y: number;
		z: number;
	};
	defaultPreset: SceneCameraPreset;
};
