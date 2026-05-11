import type { TypeDomainEntity } from '$stylist/domain/type/struct/domain-entity';

export type TypeDomainJoint = {
	name: string;
	entities: TypeDomainEntity[];
};
