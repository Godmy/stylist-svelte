import type { SceneMaterialKind } from '$stylist/graph/type/struct/scene-material-kind';

export type SceneMaterial = {
	kind: SceneMaterialKind;
	color?: readonly [number, number, number];
};
