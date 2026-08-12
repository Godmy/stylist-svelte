import type { GraphPosition3D } from '$stylist/graph/type/object/graph-position-3d';

export type GraphNode = {
	id: string;
	label: string;
	position: GraphPosition3D;
	size?: number;
	accent?: readonly [number, number, number];
	description?: string;
}
