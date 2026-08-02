import type { RecipeWbdResponseDistributionChart } from '$stylist/wbd/interface/recipe/response-distribution-chart';

export function createWbdResponseDistributionChartState(props: RecipeWbdResponseDistributionChart) {
	const className = $derived(props.class ?? '');
	const maxCount = $derived(Math.max(1, ...props.bins.map((bin) => bin.count)));
	const bars = $derived(
		props.bins.map((bin) => ({
			...bin,
			heightPercent: Math.round((bin.count / maxCount) * 100)
		}))
	);

	return {
		get title() {
			return props.title ?? 'Response distribution';
		},
		get bars() {
			return bars;
		},
		get className() {
			return className;
		}
	};
}

export default createWbdResponseDistributionChartState;
