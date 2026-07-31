import type { RecipeConfidenceRangeBar } from '$stylist/wbd/interface/recipe/confidence-range-bar';

export function createConfidenceRangeBarState(props: RecipeConfidenceRangeBar) {
	const scaleMin = $derived(props.scaleMin ?? props.estimate.optimistic);
	const scaleMax = $derived(props.scaleMax ?? (props.estimate.pessimistic || 1));
	const span = $derived(Math.max(scaleMax - scaleMin, 1));

	const optimisticPercent = $derived(((props.estimate.optimistic - scaleMin) / span) * 100);
	const mostLikelyPercent = $derived(((props.estimate.mostLikely - scaleMin) / span) * 100);
	const pessimisticPercent = $derived(((props.estimate.pessimistic - scaleMin) / span) * 100);
	const className = $derived(props.class ?? '');

	return {
		get optimisticPercent() {
			return optimisticPercent;
		},
		get mostLikelyPercent() {
			return mostLikelyPercent;
		},
		get pessimisticPercent() {
			return pessimisticPercent;
		},
		get className() {
			return className;
		}
	};
}

export default createConfidenceRangeBarState;
