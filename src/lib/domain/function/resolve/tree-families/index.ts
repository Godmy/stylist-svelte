import type { TypeDomainTreeJoint } from '$stylist/domain/type/object/domain-tree-joint';
import type { TypeDomainTreeEntity } from '$stylist/domain/type/object/domain-tree-entity';

export function resolveTreeFamilies(joint: TypeDomainTreeJoint): TypeDomainTreeEntity[] {
	const families = joint.family ?? joint.entities ?? [];
	return Array.isArray(families)
		? families
		: Object.entries(families).map(([name, preset]) => ({ name, preset }));
}
