import type { SceneMaterialKind } from '../scene-material-kind';

export type SceneMaterial = {
	kind: SceneMaterialKind;
	color?: readonly [number, number, number];
};
