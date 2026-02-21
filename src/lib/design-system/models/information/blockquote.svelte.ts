import { mergeClasses } from '$stylist/utils/classes';
﻿import type { BlockquoteProps } from '$stylist/design-system/props';
import { BLOCKQUOTE_CLASSES } from '$stylist/design-system/classes';
import { cn } from '$stylist/utils/classes';

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
			BLOCKQUOTE_CLASSES.base,
			withBorder && BLOCKQUOTE_CLASSES.background,
			withBackground && BLOCKQUOTE_CLASSES.border,
			props.class ?? ''
		)
	);
	const footerClasses = $derived(BLOCKQUOTE_CLASSES.footer);

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
