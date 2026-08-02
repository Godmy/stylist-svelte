import type { RecipeWbdRoundComparisonPanel } from '$stylist/wbd/interface/recipe/round-comparison-panel';

export function createWbdRoundComparisonPanelState(props: RecipeWbdRoundComparisonPanel) {
	const className = $derived(props.class ?? '');
	const items = $derived(
		[...props.items].sort((a, b) => {
			const aDelta = Math.abs((a.currentMedian ?? 0) - (a.previousMedian ?? 0));
			const bDelta = Math.abs((b.currentMedian ?? 0) - (b.previousMedian ?? 0));
			return bDelta - aDelta;
		})
	);

	return {
		get items() {
			return items;
		},
		get previousRound() {
			return props.previousRound;
		},
		get currentRound() {
			return props.currentRound;
		},
		get className() {
			return className;
		}
	};
}

export default createWbdRoundComparisonPanelState;
