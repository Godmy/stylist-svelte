import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeAtomicPrinciplesShowcase } from '$stylist/development/interface/recipe/atomic-principles-showcase';
import type { RecipeCodeDiff } from '$stylist/development/interface/recipe/code-diff';
import type { RecipeComponentLibraryStats } from '$stylist/development/interface/recipe/component-library-stats';
import type { RecipeComponentPreview } from '$stylist/development/interface/recipe/component-preview';
import type { RecipeDebugConsole } from '$stylist/development/interface/recipe/debug-console';
import type { RecipeDesignTokens } from '$stylist/development/interface/recipe/design-tokens';
import type { RecipeDevelopmentErrorBoundary } from '$stylist/development/interface/recipe/development-error-boundary';
import type { RecipeDocumentationBlock } from '$stylist/development/interface/recipe/documentation-block';
import type { RecipeMockDataSelector } from '$stylist/development/interface/recipe/mock-data-selector';
import type { RecipePrivacySettings } from '$stylist/development/interface/recipe/privacy-settings';
import type { RecipeResourceOptimizer } from '$stylist/development/interface/recipe/resource-optimizer';
import type { RecipeStylist } from '$stylist/development/interface/recipe/stylist';

export interface ContractDevelopment {
	CodeBlock: (Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, SlotTypography & {
/** Code content */
	code?: string;
	/** Programming language */
	language?: string;
	/** Show line numbers */
	showLineNumbers?: boolean;
	/** Lines to highlight */
	highlightLines?: number[];
	/** Block title */
	title?: string;
	/** Copyable code */
	copyable?: boolean;
	/** Additional CSS class */
	class?: string;
	/** Content CSS class */
	contentClass?: string;
	/** Line number CSS class */
	lineNumberClass?: string;
	/** Code CSS class */
	codeClass?: string;
	/** Header CSS class */
	headerClass?: string;
});
	RecipeCodeDiff: RecipeCodeDiff;
	RecipeComponentPreview: RecipeComponentPreview;
	RecipeDocumentationBlock: RecipeDocumentationBlock;
	RecipePrivacySettings: RecipePrivacySettings;
	RecipeDebugConsole: RecipeDebugConsole;
	RecipeDesignTokens: RecipeDesignTokens;
	RecipeComponentLibraryStats: RecipeComponentLibraryStats;
	RecipeAtomicPrinciplesShowcase: RecipeAtomicPrinciplesShowcase;
	RecipeDevelopmentErrorBoundary: RecipeDevelopmentErrorBoundary;
	MockDataSelector: RecipeMockDataSelector;
	RecipeResourceOptimizer: RecipeResourceOptimizer;
	RecipeStylist: RecipeStylist;
}
