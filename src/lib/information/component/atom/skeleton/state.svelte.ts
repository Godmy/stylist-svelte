import type { HTMLAttributes } from 'svelte/elements';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeSkeleton } from '$stylist/information/interface/recipe/skeleton';

export function createSkeletonState(props: RecipeSkeleton & HTMLAttributes<HTMLDivElement>) {
	const variant = $derived(props.variant ?? 'rectangle');
	const animated = $derived(props.animated ?? true);
	const lines = $derived(Math.max(1, Math.floor(props.lines ?? 1)));
	const classes = $derived(
		mergeClassNames(
			'information-skeleton',
			`information-skeleton--${variant}`,
			animated ? 'information-skeleton--animated' : '',
			props.class == null ? '' : String(props.class)
		)
	);
	const style = $derived(
		[
			props.style,
			props.width ? `--information-skeleton-width: ${props.width};` : '',
			props.height ? `--information-skeleton-height: ${props.height};` : ''
		]
			.filter(Boolean)
			.join(' ')
	);

	return {
		get classes() {
			return classes;
		},
		get lines() {
			return lines;
		},
		get style() {
			return style;
		}
	};
}
