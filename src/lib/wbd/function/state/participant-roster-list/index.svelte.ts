import type { RecipeParticipantRosterList } from '$stylist/wbd/interface/recipe/participant-roster-list';

export function createParticipantRosterListState(props: RecipeParticipantRosterList) {
	const submittedCount = $derived(
		props.participants.filter((participant) => participant.hasSubmitted).length
	);
	const className = $derived(props.class ?? '');

	return {
		get participants() {
			return props.participants;
		},
		get submittedCount() {
			return submittedCount;
		},
		get totalCount() {
			return props.participants.length;
		},
		get className() {
			return className;
		}
	};
}

export default createParticipantRosterListState;
