import type { RecipeWbdDiscussionRoundFilter } from '$stylist/wbd/interface/recipe/discussion-round-filter';

export function createWbdDiscussionRoundFilterState(props: RecipeWbdDiscussionRoundFilter) {
	const className = $derived(props.class ?? '');

	return {
		get rounds() {
			return props.rounds;
		},
		get selectedRound() {
			return props.selectedRound;
		},
		get className() {
			return className;
		},
		selectRound(roundNumber: number) {
			props.onSelectRound?.(roundNumber);
		}
	};
}

export default createWbdDiscussionRoundFilterState;
