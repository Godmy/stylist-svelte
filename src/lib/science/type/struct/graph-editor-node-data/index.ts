import type { LitegraphNodeRecipe } from '$stylist/science/interface/recipe/litegraph-node';

export type GraphEditorNodeData = LitegraphNodeRecipe & {
	properties?: readonly {
		id: string;
		name: string;
		type?: string;
		value?: unknown;
		label?: string;
	}[];
};
