import type { GraphNodeCategory } from '$stylist/token/type/alias/graph-node-category';

export interface GraphNodeDraft {
	title: string;
	category: GraphNodeCategory;
	summary: string;
	color: string;
	accent: string;
	width: number;
	height: number;
	details: string;
}

