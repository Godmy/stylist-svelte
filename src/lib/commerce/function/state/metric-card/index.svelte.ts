import type { HTMLAttributes } from 'svelte/elements';
import { ObjectManagerMetricCard } from '$stylist/commerce/class/object-manager/metric-card';
import type { RecipeMetricCard } from '$stylist/commerce/interface/recipe/metric-card';

export function createMetricCardState(props: RecipeMetricCard & HTMLAttributes<HTMLDivElement>) {
	const label = props.label;
	const value = props.value;
	const max = props.max;
	const percentage = props.percentage;
	const description = props.description;
	const variant = props.variant ?? 'info';
	const showProgressBar = props.showProgressBar ?? true;
	const propClassName = props.class ?? '';

	const progressBarWidth = $derived(
		ObjectManagerMetricCard.resolveProgressBarWidth(percentage ?? 0)
	);

	return {
		get label() {
			return label;
		},
		get value() {
			return value;
		},
		get max() {
			return max;
		},
		get percentage() {
			return percentage;
		},
		get description() {
			return description;
		},
		get variant() {
			return variant;
		},
		get showProgressBar() {
			return showProgressBar;
		},
		get progressBarWidth() {
			return progressBarWidth;
		}
	};
}
