import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { ThemeSyntaxHighlightedCodeRecipe } from '$stylist/typography/interface/recipe/syntax-highlighted-code';
import { BadgeStyleManager } from '$stylist/typography/class/style-manager/badge';
import { clsx } from 'clsx';

/**
 * SyntaxHighlightedCode state creator
 * Provides reactive state management for syntax highlighted code components using Svelte 5 runes
 *
 * @param props - SyntaxHighlightedCode component props
 * @returns Reactive state object with classes and computed values
 */
export function createSyntaxHighlightedCodeState(props: ThemeSyntaxHighlightedCodeRecipe) {
	const language = $derived(props.language ?? 'text');
	const code = $derived(props.code ?? '');
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const showLineNumbers = $derived(props.showLineNumbers ?? false);
	const startLineNumber = $derived(props.startLineNumber ?? 1);
	const containerClasses = $derived(
		joinClassNames(
			'rounded-md',
			BadgeStyleManager.getCodeVariantClass(variant as ThemeSyntaxHighlightedCodeRecipe['variant']),
			BadgeStyleManager.getCodeSizeClass(size as ThemeSyntaxHighlightedCodeRecipe['size']),
			clsx(props.class ?? '')
		)
	);
	const codeClasses = $derived('font-mono text-sm');
	const escapedCode = $derived(
		code
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;')
	);

	return {
		get language() {
			return language;
		},
		get code() {
			return code;
		},
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get showLineNumbers() {
			return showLineNumbers;
		},
		get startLineNumber() {
			return startLineNumber;
		},
		get containerClasses() {
			return containerClasses;
		},
		get codeClasses() {
			return codeClasses;
		},
		get escapedCode() {
			return escapedCode;
		}
	};
}

export default createSyntaxHighlightedCodeState;





