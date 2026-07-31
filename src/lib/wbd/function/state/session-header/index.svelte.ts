import type { RecipeSessionHeader } from '$stylist/wbd/interface/recipe/session-header';

export function createSessionHeaderState(props: RecipeSessionHeader) {
	const currentRoundIndex = $derived(
		props.rounds.findIndex((round) => round.id === props.currentRoundId)
	);
	const className = $derived(props.class ?? '');

	return {
		get title() {
			return props.title;
		},
		get rounds() {
			return props.rounds;
		},
		get currentRoundId() {
			return props.currentRoundId;
		},
		get currentRoundIndex() {
			return currentRoundIndex;
		},
		get className() {
			return className;
		}
	};
}

export default createSessionHeaderState;
