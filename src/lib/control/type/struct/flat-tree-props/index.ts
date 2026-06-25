import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { TreeNode } from '$stylist/control/type/struct/tree-node';

export type FlatTreeProps = HTMLAttributes<HTMLDivElement> & SlotInteraction & {
	nodes: TreeNode[];
	class?: string;
};
