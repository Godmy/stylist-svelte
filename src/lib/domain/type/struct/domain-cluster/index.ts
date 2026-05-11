import type { TypeDomainJoint } from '$stylist/domain/type/struct/domain-joint';

export type TypeDomainCluster = {
	name: string;
	joints: TypeDomainJoint[];
};
