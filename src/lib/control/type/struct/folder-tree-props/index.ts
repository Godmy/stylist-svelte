import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { TreeNode } from '../tree-node';

export type FolderTreeProps = InteractionHTMLAttributes<HTMLDivElement> & {
	nodes: TreeNode[];
	class?: string;
};
