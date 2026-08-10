import type { RecipeCountBadge } from '$stylist/information/interface/recipe/count-badge';

export function createCountBadgeState(props: RecipeCountBadge) {
	const count = $derived(props.count ?? 0);
	const max = $derived(props.max ?? 99);
	const showZero = $derived(props.showZero ?? false);
	const className = $derived(typeof props.class === 'string' ? props.class : undefined);
	const classes = $derived(['count-badge', className].filter(Boolean).join(' '));
	const displayCount = $derived(count > max ? `${max}+` : count);

	return {
		get classes() {
			return classes;
		},
		get count() {
			return count;
		},
		get showZero() {
			return showZero;
		},
		get displayCount() {
			return displayCount;
		}
	};
}

export default createCountBadgeState;
