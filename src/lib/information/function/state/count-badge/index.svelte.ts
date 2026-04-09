import type { CountBadgeRecipe } from '$stylist/typography/interface/recipe/count-badge';
import { IndicatorsStyleManager } from '$stylist/interaction/class/style-manager/indicators';

/**
 * CountBadge state creator
 * Provides reactive state management for count badge components using Svelte 5 runes
 *
 * @param props - CountBadge component props
 * @returns Reactive state object with classes and computed values
 */
export function createCountBadgeState(props: CountBadgeRecipe) {
	const count = $derived(props.count ?? 0);
	const max = $derived(props.max ?? 99);
	const showZero = $derived(props.showZero ?? false);
	const className = $derived(typeof props.class === 'string' ? props.class : undefined);
	const classes = $derived(IndicatorsStyleManager.getCountBadgeClasses(className));
	const displayCount = $derived(count > max ? `${max}+` : count);

	return {
		get count() {
			return count;
		},
		get max() {
			return max;
		},
		get showZero() {
			return showZero;
		},
		get classes() {
			return classes;
		},
		get displayCount() {
			return displayCount;
		}
	};
}

export default createCountBadgeState;





