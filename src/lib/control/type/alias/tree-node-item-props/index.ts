import type { TreeNodeItemNode } from '$stylist/control/type/struct/tree-node-item-node';

export type TreeNodeItemProps = {
	[key: string]: any;
	node: TreeNodeItemNode;
	onSelectCallback?: (key: string) => void;
};
