import type { TokenZIndex } from '$stylist/layout/type/enum/z-index';

export type SceneNodePoint = {
	x: number;
	y: number;
	z?: number;
	space?: 'world' | 'local';
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
