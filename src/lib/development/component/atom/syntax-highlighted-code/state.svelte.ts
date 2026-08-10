import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { RecipeThemeSyntaxHighlightedCode } from '$stylist/development/interface/recipe/syntax-highlighted-code';

export function createSyntaxHighlightedCodeState(props: RecipeThemeSyntaxHighlightedCode) {
	const SIZE_CLASS: Record<string, string> = {
		xs: 'shc--xs',
		sm: 'shc--sm',
		md: 'shc--md',
		lg: 'shc--lg',
		xl: 'shc--xl',
		'2xl': 'shc--2xl',
		'1/4': 'shc--xs',
		'1/3': 'shc--sm',
		'2/5': 'shc--sm',
		'1/2': 'shc--md',
		'3/5': 'shc--md',
		'2/3': 'shc--lg',
		'3/4': 'shc--xl',
		full: 'shc--2xl'
	};

	const containerClasses = $derived(
		joinClassNames(
			'shc',
			`shc--${props.variant ?? 'default'}`,
			SIZE_CLASS[props.size ?? 'md'] ?? 'shc--md',
			props.class ?? ''
		)
	);
	const code = $derived(props.code ?? '');
	const language = $derived((props.language ?? 'text') as any);
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
