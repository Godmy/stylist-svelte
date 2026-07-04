import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
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
} & HTMLAttributes<HTMLElement> & SlotThemeBorder & SlotTypography;
