import type { RecipeRoundSummaryCard } from '$stylist/wbd/interface/recipe/round-summary-card';

export function createRoundSummaryCardState(props: RecipeRoundSummaryCard) {
	const spread = $derived(props.summary.max - props.summary.min);
	const className = $derived(props.class ?? '');

	return {
		get task() {
			return props.task;
		},
		get summary() {
			return props.summary;
		},
		get spread() {
			return spread;
		},
		get className() {
			return className;
		}
	};
}

export default createRoundSummaryCardState;
