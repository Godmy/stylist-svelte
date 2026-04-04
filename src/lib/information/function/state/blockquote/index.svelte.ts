import type { BlockquoteRecipe } from '$stylist/information/interface/recipe/blockquote';
import { mergeClasses } from '$stylist/layout/function/script/join-class-names';

/**
 * Blockquote state creator
 * Provides reactive state management for blockquote components using Svelte 5 runes
 *
 * @param props - Blockquote component props
 * @returns Reactive state object with classes and computed values
 */
export function createBlockquoteState(props: BlockquoteRecipe) {
	const cite = $derived(props.cite ?? '');
	const withBorder = $derived(props.withBorder ?? false);
	const withBackground = $derived(props.withBackground ?? false);
	const className = $derived(typeof props.class === 'string' ? props.class : '');
	const classes = $derived(
		mergeClasses(
			'text-lg italic',
			withBorder && 'bg-[var(--color-background-secondary)] p-4 rounded',
			withBackground && 'border-l-4 border-[var(--color-primary-500)] pl-4',
			className
		)
	);
	const footerClasses = $derived('mt-2 text-sm text-[var(--color-text-secondary)]');

	return {
		get cite() {
			return cite;
		},
		get withBorder() {
			return withBorder;
		},
		get withBackground() {
			return withBackground;
		},
		get classes() {
			return classes;
		},
		get footerClasses() {
			return footerClasses;
		},
		get footerPrefix() {
			return '&mdash; ';
		}
	};
}

export default createBlockquoteState;






