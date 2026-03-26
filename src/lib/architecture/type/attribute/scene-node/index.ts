import type { TokenZIndex } from '$stylist/architecture/type/token/z-index';

export type SceneNodePoint = {
	x: number;
	y: number;
};

export type SceneNode = {
	id: string;
	title: string;
	label?: string;
	description?: string;
	iconText?: string;
	position: SceneNodePoint;
	depth: number;
	accent: string;
	layer?: TokenZIndex;
	children?: readonly SceneNode[];
};
