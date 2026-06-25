import type { GraphPosition3D } from '$stylist/graph/type/struct/graph-position-3d';

export interface GraphNode {
	id: string;
	label: string;
	position: GraphPosition3D;
	size?: number;
	accent?: readonly [number, number, number];
	description?: string;
}
