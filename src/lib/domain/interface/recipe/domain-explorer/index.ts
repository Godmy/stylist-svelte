import type { TypeDomainTreeNode } from '$stylist/domain/type/object/domain-tree-node';
import type { DeviceFrameViewport } from '$stylist/domain/type/alias/device-frame-viewport';
export interface RecipeDomainExplorer {
	tree: TypeDomainTreeNode[];
	initialDomain?: string;
	initialCluster?: string;
	initialJoint?: string;
	initialPreviewMode?: 'file' | 'markdown' | 'story' | 'json-tree' | 'di';
	onSelectionChange?: (selection: {
		domain: string;
		cluster: string;
		joint: string;
		family: string;
		entityPath: string;
		files: { name: string; path: string }[];
	}) => void;
	storyDevice?: DeviceFrameViewport;
	deviceViewportVisible?: boolean;
	class?: string;
}
