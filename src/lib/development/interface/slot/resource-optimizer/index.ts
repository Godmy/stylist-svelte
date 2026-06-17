import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { ResourceOptimizerOptimizationSuggestion } from '$stylist/development/type/struct/resource-optimizer-optimization-suggestion';
import type { ResourceOptimizerResource } from '$stylist/development/type/struct/resource-optimizer-resource';

export interface SlotResourceOptimizer extends InformationHTMLAttributes<HTMLElement> {
	resources?: ResourceOptimizerResource[];
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
}
