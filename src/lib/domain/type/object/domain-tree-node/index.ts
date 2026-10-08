import type { TypeDomainTreeCluster } from '$stylist/domain/type/object/domain-tree-cluster';

export type TypeDomainTreeNode = {
	name: string;
	cluster?: TypeDomainTreeCluster[];
	clusters?: TypeDomainTreeCluster[];
};
