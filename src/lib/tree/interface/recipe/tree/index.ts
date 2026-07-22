import type { TreeNode } from '$stylist/tree/type/struct/tree-node';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeTree extends HTMLAttributes<HTMLDivElement> {
	nodes: TreeNode[];
	class?: string;
}
