import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TreeNode } from '../tree-node';

export interface AdvancedVirtualTreeProps extends InteractionHTMLAttributes<HTMLDivElement> {
	nodes: TreeNode[];
	class?: string;
}
