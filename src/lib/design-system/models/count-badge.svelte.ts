import type { CountBadgeProps } from '$stylist/design-system/props';
import { IndicatorsStyleManager } from '$stylist/design-system/styles/indicators';

/**
 * CountBadge state creator
 * Provides reactive state management for count badge components using Svelte 5 runes
 *
 * @param props - CountBadge component props
 * @returns Reactive state object with classes and computed values
 */
export function createCountBadgeState(props: CountBadgeProps) {
	const count = $derived(props.count ?? 0);
	const max = $derived(props.max ?? 99);
	const showZero = $derived(props.showZero ?? false);
	const classes = $derived(IndicatorsStyleManager.getCountBadgeClasses(props.class ?? ''));
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
