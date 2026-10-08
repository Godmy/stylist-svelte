import type { TypeDomainTreeInput } from '$stylist/domain/type/alias/domain-tree-input';
import type { TypeDomainTreeNode } from '$stylist/domain/type/object/domain-tree-node';

export function normalizeDomainTree(tree: TypeDomainTreeInput): TypeDomainTreeNode[] {
	if (Array.isArray(tree)) return tree;
	return Object.entries(tree).map(([name, clusters]) => ({
		name,
		cluster: Object.entries(clusters).map(([name, joints]) => ({
			name,
			joint: Object.entries(joints).map(([name, family]) => ({ name, family }))
		}))
	}));
}
