import type { TypeDomainFile } from '$stylist/domain/type/struct/domain-file';

export type TypeDomainEntity = {
	name: string;
	path: string;
	files: TypeDomainFile[];
};
