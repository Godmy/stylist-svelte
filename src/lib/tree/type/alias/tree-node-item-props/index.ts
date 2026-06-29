import type { TreeNodeItemNode } from '$stylist/tree/type/struct/tree-node-item-node';

export type TreeNodeItemProps = {
	[key: string]: any;
	node: TreeNodeItemNode;
	onSelectCallback?: (key: string) => void;
};
