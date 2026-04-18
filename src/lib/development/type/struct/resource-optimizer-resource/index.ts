import type { ResourceOptimizerResourceType } from '$stylist/development/type/struct/resource-optimizer-resource-type';

export type ResourceOptimizerResource = {
	id: string;
	name: string;
	url: string;
	type: ResourceOptimizerResourceType;
	size: number;
	transferSize?: number;
	loadTime?: number;
	status: 'loading' | 'loaded' | 'error' | 'cached';
	priority: 'high' | 'normal' | 'low';
	isOptimized: boolean;
};
