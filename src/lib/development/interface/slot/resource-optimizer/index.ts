import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { ResourceOptimizerOptimizationSuggestion } from '$stylist/development/type/struct/resource-optimizer-optimization-suggestion';
import type { ResourceOptimizerResource } from '$stylist/development/type/struct/resource-optimizer-resource';

export interface SlotResourceOptimizer extends HTMLAttributes<HTMLElement>, SlotThemeBorder, SlotTypography {
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
