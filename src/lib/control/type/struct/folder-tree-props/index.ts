import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TreeNode } from '../tree-node';

export type FolderTreeProps = InteractionHTMLAttributes<HTMLDivElement> & {
	nodes: TreeNode[];
	class?: string;
}
