import type { TypeDomainComponentDescriptor } from '$stylist/domain/type/object/domain-component-descriptor';
import type { TypeDomainScreen } from '$stylist/domain/type/alias/domain-screen';
import type { TypeDomainTreeNode } from '$stylist/domain/type/object/domain-tree-node';
export interface RecipeDomainPlayground {
	tree?: TypeDomainTreeNode[];
	descriptors?: TypeDomainComponentDescriptor[];
	initialScreen?: TypeDomainScreen;
	initialDomain?: string;
	initialCluster?: string;
	initialJoint?: string;
	initialPreviewMode?: 'file' | 'markdown' | 'story' | 'json-tree' | 'di';
	class?: string;
}
