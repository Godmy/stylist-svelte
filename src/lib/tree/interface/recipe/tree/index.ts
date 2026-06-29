import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { TreeNode } from '$stylist/tree/type/struct/tree-node';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeTree extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	nodes: TreeNode[];
	class?: string;
}
