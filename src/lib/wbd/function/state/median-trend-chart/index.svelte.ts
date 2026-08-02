import type { RecipeWbdMedianTrendChart } from '$stylist/wbd/interface/recipe/median-trend-chart';

export function createWbdMedianTrendChartState(props: RecipeWbdMedianTrendChart) {
	const className = $derived(props.class ?? '');
	const maxValue = $derived(Math.max(1, ...props.points.map((point) => point.value)));
	const points = $derived(
		props.points.map((point) => ({
			...point,
			heightPercent: Math.round((point.value / maxValue) * 100)
		}))
	);

	return {
		get title() {
			return props.title ?? 'Median trend';
		},
		get points() {
			return points;
		},
		get className() {
			return className;
		}
	};
}

export default createWbdMedianTrendChartState;
