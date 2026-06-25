import type { SceneAtom } from '$stylist/graph/type/struct/scene-atom/scene-atom';
import type { SceneMolecule } from '$stylist/graph/type/struct/scene-molecule';
import type { GraphConnection } from '$stylist/graph/type/struct/graph-connection';
import type { GraphNode } from '$stylist/graph/type/struct/graph-node';
import type { SceneCameraPreset } from '$stylist/token/type/alias/scene-camera-preset';

export type SceneGraph = {
	id: string;
	label: string;
	nodes: readonly GraphNode[];
	connections: readonly GraphConnection[];
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
