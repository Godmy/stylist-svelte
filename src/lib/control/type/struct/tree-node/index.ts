export interface TreeNode {
	id: string;
	label: string;
	children?: TreeNode[];
	expanded?: boolean;
}
