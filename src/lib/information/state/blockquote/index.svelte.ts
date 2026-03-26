import type { BlockquoteProps } from '$stylist/information/interface/blockquote';
import { mergeClasses } from '$stylist/information/function/classes';

/**
 * Blockquote state creator
 * Provides reactive state management for blockquote components using Svelte 5 runes
 *
 * @param props - Blockquote component props
 * @returns Reactive state object with classes and computed values
 */
export function createBlockquoteState(props: BlockquoteProps) {
	const cite = $derived(props.cite ?? '');
	const withBorder = $derived(props.withBorder ?? false);
	const withBackground = $derived(props.withBackground ?? false);
	const classes = $derived(
		mergeClasses(
			'text-lg italic',
			withBorder && 'bg-[var(--color-background-secondary)] p-4 rounded',
			withBackground && 'border-l-4 border-[var(--color-primary-500)] pl-4',
			props.class ?? ''
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





