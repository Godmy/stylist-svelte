import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { RecipeThemeSyntaxHighlightedCode } from '$stylist/development/interface/recipe/syntax-highlighted-code';

export function createSyntaxHighlightedCodeState(props: RecipeThemeSyntaxHighlightedCode) {
	const containerClasses = $derived(
		joinClassNames(
			'rounded-md',
			{
				default: 'bg-[--color-neutral-900] text-[--color-text-inverse]',
				terminal: 'bg-[var(--color-neutral-900)] text-[--color-success-400] font-mono',
				diff: 'bg-[--color-background-secondary] text-[--color-text-primary]'
			}[props.variant ?? 'default'],
			{
				xs: 'text-[10px] p-1.5',
				sm: 'text-xs p-2',
				md: 'text-sm p-4',
				lg: 'text-base p-6',
				xl: 'text-lg p-8',
				'2xl': 'text-xl p-10',
				'1/4': 'text-[10px] p-1.5',
				'1/3': 'text-xs p-2',
				'2/5': 'text-xs p-2',
				'1/2': 'text-sm p-4',
				'3/5': 'text-sm p-4',
				'2/3': 'text-base p-6',
				'3/4': 'text-lg p-8',
				full: 'text-xl p-10'
			}[props.size ?? 'md'] ?? 'text-sm p-4',
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
