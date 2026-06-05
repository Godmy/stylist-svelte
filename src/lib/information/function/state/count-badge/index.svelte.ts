import { IndicatorsStyleManager } from '$stylist/interaction/class/style-manager/indicators';
import type { CountBadgeRecipe } from '$stylist/information/interface/recipe/count-badge';

export function createCountBadgeState(props: CountBadgeRecipe) {
	const count = $derived(props.count ?? 0);
	const max = $derived(props.max ?? 99);
	const showZero = $derived(props.showZero ?? false);
	const className = $derived(typeof props.class === 'string' ? props.class : undefined);
	const classes = $derived(IndicatorsStyleManager.getCountBadgeClasses(className));
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
