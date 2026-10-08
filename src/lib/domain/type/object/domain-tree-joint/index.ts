import type { TypeDomainTreeEntity } from '$stylist/domain/type/object/domain-tree-entity';
import type { TypeFilePreset } from '$stylist/domain/type/alias/file-preset';

export type TypeDomainTreeJoint = {
	name: string;
	family?: Record<string, TypeFilePreset> | TypeDomainTreeEntity[];
	entities?: TypeDomainTreeEntity[];
};
