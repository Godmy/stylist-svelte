import type { SceneMaterialKind } from '$stylist/architecture/type/struct/scene-material-kind';

export type SceneMaterial = {
	kind: SceneMaterialKind;
	color?: readonly [number, number, number];
};
