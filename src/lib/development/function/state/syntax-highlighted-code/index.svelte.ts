import { StyleManagerSyntaxHighlightedCode } from '$stylist/development/class/style-manager/syntax-highlighted-code';
import type { ThemeSyntaxHighlightedCodeRecipe } from '$stylist/development/interface/recipe/syntax-highlighted-code';

export function createSyntaxHighlightedCodeState(props: ThemeSyntaxHighlightedCodeRecipe) {
	const containerClasses = $derived(
		StyleManagerSyntaxHighlightedCode.container(
			StyleManagerSyntaxHighlightedCode.getContainerClasses(
				props.variant ?? 'default',
				props.size ?? 'md',
				props.class ?? ''
			)
		)
	);
	const code = $derived(props.code ?? '');
	const language = $derived(props.language ?? 'text');
	const showLineNumbers = $derived(props.showLineNumbers ?? false);

	return {
		get containerClasses() {
			return containerClasses;
		},
		get code() {
			return code;
		},
		get language() {
			return language;
		},
		get showLineNumbers() {
			return showLineNumbers;
		}
	};
}

export default createSyntaxHighlightedCodeState;
