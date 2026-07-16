import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeBadge } from '$stylist/information/interface/recipe/badge';

export function createBadgeState(props: RecipeBadge) {
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const className = $derived(typeof props.class === 'string' ? props.class : '');
	const sizeClass = $derived(`badge--size-${String(size).replaceAll('/', '-')}`);
	const classes = $derived(
		mergeClassNames(
			'badge',
			`badge--${variant}`,
			sizeClass,
			props.disabled && 'badge--disabled',
			className
		)
	);

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		}
	};
}

export default createBadgeState;
