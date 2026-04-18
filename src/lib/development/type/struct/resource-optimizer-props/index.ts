import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { ResourceOptimizerResource } from '$stylist/development/type/struct/resource-optimizer-resource';
import type { ResourceOptimizerOptimizationSuggestion } from '$stylist/development/type/struct/resource-optimizer-optimization-suggestion';

export type ResourceOptimizerProps = {
	resources: ResourceOptimizerResource[];
	suggestions?: ResourceOptimizerOptimizationSuggestion[];
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
