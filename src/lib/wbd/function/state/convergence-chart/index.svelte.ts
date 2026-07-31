import type { RecipeConvergenceChart } from '$stylist/wbd/interface/recipe/convergence-chart';

export function createConvergenceChartState(props: RecipeConvergenceChart) {
	const maxSpread = $derived(
		Math.max(1, ...props.roundSummaries.map((summary) => summary.max - summary.min))
	);
	const bars = $derived(
		props.roundSummaries.map((summary, index) => ({
			roundNumber: index + 1,
			spread: summary.max - summary.min,
			heightPercent: ((summary.max - summary.min) / maxSpread) * 100,
			mean: summary.mean
		}))
	);
	const className = $derived(props.class ?? '');

	return {
		get taskLabel() {
			return props.taskLabel;
		},
		get bars() {
			return bars;
		},
		get className() {
			return className;
		}
	};
}

export default createConvergenceChartState;
