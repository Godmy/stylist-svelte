import type { TokenZIndex } from '$stylist/layout/type/enum/z-index';

export type SceneNodePoint = {
	x: number;
	y: number;
	z?: number;
	space?: 'world' | 'local';
};
