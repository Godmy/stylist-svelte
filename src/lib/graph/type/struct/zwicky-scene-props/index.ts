import type { HTMLAttributes } from 'svelte/elements';
import type { GraphJsonInput } from '$stylist/graph/type/struct/graph-json-input';

export type ZwickySceneProps = {
	title?: string;
	data?: GraphJsonInput;
	canvasClass?: string;
	overlayClass?: string;
	onNodeSelect?: (nodeId: string, path: string) => void;
} & HTMLAttributes<HTMLDivElement>;
