import type { GraphNodeCardRecipe } from '$stylist/science/interface/recipe/graph-node-card';

export type GraphNodeCardData = GraphNodeCardRecipe & {
	name: string;
	type: string;
	description?: string;
	fields?: { name: string; type: string; isRequired?: boolean }[];
};
