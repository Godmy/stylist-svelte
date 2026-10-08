import type { TypeDomainTreeJoint } from '$stylist/domain/type/object/domain-tree-joint';

export type TypeDomainTreeCluster = {
	name: string;
	joint?: TypeDomainTreeJoint[];
	joints?: TypeDomainTreeJoint[];
};
