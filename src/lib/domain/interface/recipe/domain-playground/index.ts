import type { TypeDomainScreen } from '$stylist/domain/type/alias/domain-screen';
import type { TypeDomainTreeInput } from '$stylist/domain/type/alias/domain-tree-input';
export interface RecipeDomainPlayground {
	tree?: TypeDomainTreeInput;
	initialScreen?: TypeDomainScreen;
	initialDomain?: string;
	initialCluster?: string;
	initialJoint?: string;
	initialPreviewMode?: 'file' | 'markdown' | 'story' | 'json-tree' | 'di';
	class?: string;
}
