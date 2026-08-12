import type { SceneMaterialKind } from '$stylist/graph/type/object/scene-material-kind';

export type SceneMaterial = {
	kind: SceneMaterialKind;
	color?: readonly [number, number, number];
};
