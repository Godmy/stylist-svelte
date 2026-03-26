import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';

export interface TreeNode {
	id: string;
	label: string;
	children?: TreeNode[];
	expanded?: boolean;
}

export interface VirtualTreeProps extends InteractionHTMLAttributes<HTMLDivElement> {
	nodes: TreeNode[];
	class?: string;
}

export interface FlatTreeProps extends InteractionHTMLAttributes<HTMLDivElement> {
	nodes: TreeNode[];
	class?: string;
}

export interface FolderTreeProps extends InteractionHTMLAttributes<HTMLDivElement> {
	nodes: TreeNode[];
	class?: string;
}

export interface AdvancedVirtualTreeProps extends InteractionHTMLAttributes<HTMLDivElement> {
	nodes: TreeNode[];
	class?: string;
}
