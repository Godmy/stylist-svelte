import { mergeClasses } from '$stylist/utils/classes';
﻿import type { SeparatorProps } from '$stylist/design-system/props';
import { SEPARATOR_CLASSES } from '$stylist/design-system/classes';
import { cn } from '$stylist/utils/classes';

/**
 * Separator state creator
 * Provides reactive state management for separator components using Svelte 5 runes
 *
 * @param props - Separator component props
 * @returns Reactive state object with classes and computed values
 */
export function createSeparatorState(props: SeparatorProps) {
	const orientation = $derived(props.orientation ?? 'horizontal');
	const decorative = $derived(props.decorative ?? false);
	const classes = $derived(mergeClasses(SEPARATOR_CLASSES[orientation], props.class ?? ''));

	return {
		get orientation() {
			return orientation;
		},
		get decorative() {
			return decorative;
		},
		get classes() {
			return classes;
		}
	};
}

export default createSeparatorState;
