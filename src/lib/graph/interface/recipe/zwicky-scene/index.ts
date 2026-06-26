import type { GraphJsonInput } from '$stylist/graph/type/struct/graph-json-input';

export interface RecipeZwickyScene {
	title?: string;
	data?: GraphJsonInput;
	canvasClass?: string;
	overlayClass?: string;
	class?: string;
	onNodeSelect?: (nodeId: string, path: string) => void;
}
