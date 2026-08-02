import type { RecipeWbdConfidenceDistributionChart } from '$stylist/wbd/interface/recipe/confidence-distribution-chart';

export function createWbdConfidenceDistributionChartState(props: RecipeWbdConfidenceDistributionChart) {
	const className = $derived(props.class ?? '');
	const maxCount = $derived(Math.max(1, ...props.items.map((item) => item.count)));
	const bars = $derived(
		props.items.map((item) => ({
			...item,
			heightPercent: Math.round((item.count / maxCount) * 100)
		}))
	);

	return {
		get bars() {
			return bars;
		},
		get className() {
			return className;
		}
	};
}

export default createWbdConfidenceDistributionChartState;
