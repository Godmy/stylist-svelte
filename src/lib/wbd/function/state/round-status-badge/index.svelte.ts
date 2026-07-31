import type { RecipeRoundStatusBadge } from '$stylist/wbd/interface/recipe/round-status-badge';

const STATUS_LABEL: Record<string, string> = {
	kickoff: 'Kickoff',
	collecting: 'Collecting',
	discussing: 'Discussing',
	closed: 'Closed',
	finalized: 'Finalized'
};

export function createRoundStatusBadgeState(props: RecipeRoundStatusBadge) {
	const label = $derived(STATUS_LABEL[props.status] ?? props.status);
	const className = $derived(props.class ?? '');

	return {
		get status() {
			return props.status;
		},
		get label() {
			return label;
		},
		get className() {
			return className;
		}
	};
}

export default createRoundStatusBadgeState;
