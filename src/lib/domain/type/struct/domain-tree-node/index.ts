import type { TypeDomainCluster } from '$stylist/domain/type/struct/domain-cluster';

export type TypeDomainTreeNode = {
	name: string;
	clusters: TypeDomainCluster[];
};
