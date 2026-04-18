export type ResourceOptimizerOptimizationSuggestion = {
	id: string;
	resourceId: string;
	type: 'compress' | 'resize' | 'cache' | 'preload' | 'lazy-load' | 'cdn';
	description: string;
	estimatedSavings: number;
	implementationEffort: 'low' | 'medium' | 'high';
};
