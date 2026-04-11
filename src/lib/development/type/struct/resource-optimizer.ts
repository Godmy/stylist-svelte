import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type ResourceType = 'image' | 'script' | 'stylesheet' | 'font' | 'api' | 'other';

export type Resource = {
	id: string;
	name: string;
	url: string;
	type: ResourceType;
	size: number;
	transferSize?: number;
	loadTime?: number;
	status: 'loading' | 'loaded' | 'error' | 'cached';
	priority: 'high' | 'normal' | 'low';
	isOptimized: boolean;
};

export type OptimizationSuggestion = {
	id: string;
	resourceId: string;
	type: 'compress' | 'resize' | 'cache' | 'preload' | 'lazy-load' | 'cdn';
	description: string;
	estimatedSavings: number;
	implementationEffort: 'low' | 'medium' | 'high';
};

export type Props = {
	resources: Resource[];
	suggestions?: OptimizationSuggestion[];
	showResourceDetails?: boolean;
	showOptimizationSuggestions?: boolean;
	showPrioritization?: boolean;
	showSizeComparison?: boolean;
	onResourceOptimize?: (resourceId: string) => void;
	onApplySuggestions?: () => void;
	title?: string;
	description?: string;
	class?: string;
} & InformationHTMLAttributes<HTMLElement>;
