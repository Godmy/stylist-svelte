import type { TokenZIndex } from '$stylist/layout/type/enum/z-index';

export type SceneNode = {
	id: string;
	title: string;
	label?: string;
	description?: string;
	iconText?: string;
	position: import('../../scene-node-point').SceneNodePoint;
	depth: number;
	accent: string;
	layer?: TokenZIndex;
	children?: readonly SceneNode[];
};
