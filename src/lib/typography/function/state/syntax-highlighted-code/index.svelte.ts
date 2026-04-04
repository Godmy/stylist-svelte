import { createSyntaxHighlightedCodeState as createBaseSyntaxHighlightedCodeState } from '$stylist/information/function/state/syntax-highlighted-code';
import { StyleManagerSyntaxHighlightedCode } from '$stylist/typography/class/style-manager/syntax-highlighted-code';
import type { ThemeSyntaxHighlightedCodeRecipe } from '$stylist/typography/interface/recipe/syntax-highlighted-code';

export function createSyntaxHighlightedCodeState(props: ThemeSyntaxHighlightedCodeRecipe) {
	const baseState = createBaseSyntaxHighlightedCodeState(props);
	const containerClasses = $derived(
		StyleManagerSyntaxHighlightedCode.container(baseState.containerClasses)
	);
	return {
		get containerClasses() {
			return containerClasses;
		},
		get code() {
			return baseState.code;
		},
		get language() {
			return baseState.language;
		},
		get showLineNumbers() {
			return baseState.showLineNumbers;
		}
	};
}

export default createSyntaxHighlightedCodeState;
