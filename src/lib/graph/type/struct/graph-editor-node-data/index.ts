import type { RecipeLitegraphNode } from '$stylist/graph/interface/recipe/litegraph-node';

export type GraphEditorNodeData = RecipeLitegraphNode & {
	properties?: readonly {
		id: string;
		name: string;
		type?: string;
		value?: unknown;
		label?: string;
	}[];
};
